import MerkleTree from "merkletreejs";
import { ethers } from 'ethers'
import { chain } from '../utils/constants'

export const merkleLeafMap = new Map()

const allowListNodes = [
    ["0xd7f46F27369AfaA0a0db4B9C9f476e2993dF5c08", 100, 2],
    ["0x92527292b221116c4D956a984934dC6047CcD87e", 100, 3],
]

const leafNodes = allowListNodes.map(([address, maxQuantity, salesRound]) => {
    const hash = ethers.utils.solidityKeccak256(
        ["address", "address", "uint256", "uint256"],
        [chain.contractAddress, address, maxQuantity, salesRound]
    )

    if (merkleLeafMap.has(salesRound)) {
        const srMap = merkleLeafMap.get(salesRound)
        srMap.set(address, { hash, maxQuantity })
    } else {
        const srMap = new Map()
        srMap.set(address, { hash, maxQuantity })
        merkleLeafMap.set(salesRound, srMap)
    }

    return hash
});

export const merkleTree = new MerkleTree(leafNodes, ethers.utils.keccak256, { sortPairs: true });

