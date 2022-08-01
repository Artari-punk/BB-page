import MerkleTree from "merkletreejs";
import { ethers } from 'ethers'
import { chain } from '../utils/constants'
import { allowListNodes } from './list'

export const merkleLeafMap = new Map()

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

console.log('merkleRoot', merkleTree.getHexRoot(), 'Allowlist', allowListNodes.length)