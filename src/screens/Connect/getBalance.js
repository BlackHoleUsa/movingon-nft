import Web3 from "web3";
import { ethers } from "ethers";

import {
    NFT_CONTRACT_ABI,
    MVN_CONTRACT_ADDRESS,
    BTRF_CONTRACT_ADDRESS
} from "./NFTcontract" ;

import { SALE_CONTRACT_ABI, SALE_CONTRACT_ADDRESS } from "./contractInfo";


const web3 = new Web3(Web3.givenProvider);
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const mvncontract = new ethers.Contract(
    MVN_CONTRACT_ADDRESS,
    NFT_CONTRACT_ABI,
    signer
);

const btrfcontract = new ethers.Contract(
    BTRF_CONTRACT_ADDRESS,
    NFT_CONTRACT_ABI,
    signer
);

const saleContract = new ethers.Contract(
    SALE_CONTRACT_ADDRESS,
    SALE_CONTRACT_ABI,
    signer
);

await mvncontract.balanceOf(address[0]);
await btrfcontract.balanceOf(address[0]);

await saleContract.copiesSold1(); // moving on book.
await saleContract.copiesSold2(); // butterflies in produciton book

await saleContract.getMvnPrice();
await saleContract.getBtrfPrice();