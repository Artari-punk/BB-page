import { forwardRef, useState, useEffect, useCallback } from 'react'
import { Button, Modal } from 'components'
import { useEthers, useCall, useContractFunction } from '@usedapp/core'
import { contract, merkleLeafMap, merkleTree } from '../../../contracts'
import { BigNumber } from 'ethers'

const mintRound = {
    0: "Paused",
    1: "Team",
    2: "Whitelist",
    3: "Raffle",
    4: "Public"
}

function HomeMint({ }, ref) {
    const { account } = useEthers()

    const [statusMessage, setStatusMessage] = useState("")
    const [canMint, setCanMint] = useState(true)

    const [salesRound, setSalesRound] = useState("...")
    const [tokenPrice, setTokenPrice] = useState(BigNumber.from("0"))

    const [userQuantity, setUserQuantity] = useState(1)
    const [userMintedAmount, setUserMintedAmount] = useState(0)
    const [userMaxQuantity, setUserMaxQuantity] = useState(0)
    const [userProof, setUserProof] = useState([])

    const salesRoundCall = useCall({ contract, method: 'salesRound' })
    const maxPerWalletCall = useCall({ contract, method: 'maxPerWallet' })
    const tokenPriceCall = useCall({ contract, method: 'tokenPrice' })
    const userRoundMintedAmountCall = useCall({ contract, method: 'userRoundMintedAmount', args: [account, salesRoundCall?.value[0].toNumber()] })
    const { state, send } = useContractFunction(contract, 'mint', { transactionName: 'Mint' })

    useEffect(() => {
        if (salesRoundCall?.value) {
            const sr = salesRoundCall.value[0].toNumber()

            setSalesRound(mintRound[sr] || "Invalid sales round")


            if (sr === 0 || sr === 1) {
                setCanMint(false)
            } else {
                setCanMint(true)
            }

            if (sr === 2 || sr === 3) {
                const salesRoundMerkle = merkleLeafMap.get(sr)
                if (salesRoundMerkle) {
                    const userMerkleProof = salesRoundMerkle.get(account)
                    if (userMerkleProof) {
                        setUserMaxQuantity(userMerkleProof.maxQuantity)

                        const proof = merkleTree.getHexProof(userMerkleProof.hash)
                        setUserProof(proof)
                    }
                }
            } else if (sr === 4) {
                if (maxPerWalletCall?.value[0]) {
                    setUserMaxQuantity(maxPerWalletCall?.value[0])
                } else {
                    setUserMaxQuantity(3)
                }

                setUserProof([])
            }
        }

        if (userRoundMintedAmountCall?.value) {
            setUserMintedAmount(userRoundMintedAmountCall?.value[0].toNumber() || 0)
        }

        if (tokenPriceCall?.value) {
            setTokenPrice(tokenPriceCall?.value[0] || BigNumber.from("0"))
        }
    }, [salesRoundCall, userRoundMintedAmountCall, tokenPriceCall, maxPerWalletCall])

    const decreaseUserQuantity = () => {
        const newValue = userQuantity - 1

        if (newValue !== -1) {
            setUserQuantity(newValue)
        }
    }

    const increaseUserQuantity = useCallback(() => {
        const newValue = userQuantity + 1

        if (newValue + userMintedAmount <= userMaxQuantity) {
            setUserQuantity(newValue)
        }
    }, [userQuantity, userMaxQuantity])

    useEffect(() => {
        if (state.status === "PendingSignature") {
            setStatusMessage("Pending")
        }
        if (state.status === "Exception") {
            setStatusMessage(state.errorMessage)
        }
        if (state.status === "Success") {
            setStatusMessage("Success!")
        }
    }, [state])

    const onMintClicked = useCallback(() => {
        if (!canMint) {
            return
        }

        setStatusMessage("")
        setCanMint(false)
        send(userProof, userMaxQuantity, userQuantity, { value: tokenPrice.mul(userQuantity) }).then((tx) => {
            setUserQuantity(0)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCanMint(true)
        })
    }, [tokenPrice, userQuantity, userMaxQuantity, userProof, send, state, canMint])

    return (
        <Modal ref={ref}>
            <div className="MintModal__wrapper">
                <div>
                    <div>Your address</div>
                    <div>{account ? `${account.substring(0, 10)}...${account.slice(-8)}` : "Connect"}</div>
                </div>
                <div>
                    <div>Current sales round</div>
                    <div>{salesRound}</div>
                </div>
                <div>
                    <div>You can mint {userMaxQuantity - (userMintedAmount || 0)} NFTs during this round</div>
                </div>
                {statusMessage !== "" && (
                    <div>
                        <div className="h-txt-error">{statusMessage}</div>
                    </div>
                )}
                <div className="MintModal__quantity">
                    <Button className="MintModal__quantity__btn" onClick={decreaseUserQuantity}>-</Button>
                    <div>{userQuantity}</div>
                    <Button className="MintModal__quantity__btn" onClick={increaseUserQuantity}>+</Button>
                </div>
                <Button className={canMint ? "" : "ButtonGray"} onClick={onMintClicked}>Mint</Button>
            </div>
        </Modal>
    )
}

export default forwardRef(HomeMint)
