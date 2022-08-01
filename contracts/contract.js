import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import ABI from './abi.json'
import { chain } from '../utils/constants'

const contractInterface = new utils.Interface(ABI)
const contractAddress = chain.contractAddress

const contract = new Contract(contractAddress, contractInterface)

export { contract }