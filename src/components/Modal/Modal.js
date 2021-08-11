import React, { useState } from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import { Modal, Spinner } from 'react-bootstrap';
import Web3 from "web3";
import { ethers } from "ethers";
import MetaMask from './../.././Assets/images/metamask.png';

import {
    SALE_CONTRACT_ABI,
    SALE_CONTRACT_ADDRESS,
} from "Contract/CrowdsaleContract" ;

import { useSelector, useDispatch } from 'react-redux';
import { setUserBalance } from 'redux/actions/action';

import { connectMetaMask, checkAlreadyConnectedMetaMask } from 'redux/thunk/thunk';


const CustomModal = (props) => {
    
    // redux setups
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { show, handleClose } = props;
    const [ loading, setLoading ] = useState(false);
    const [ value, setValue ] = useState('');
    const [ convertedValue, setConvertedValue ] = useState('');

    const connectToMetaMask = () => {
        if(dispatch(connectMetaMask())){
            props.closePop();
        }

      };
    const clickBuyCoin = async () => {

        if(!value){
            alert('Plz Write Amount.');
        } 
        else{
            
            if(state?.userBalance >= convertedValue){
                setLoading(true);

                const web3 = new Web3(Web3.givenProvider);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
    
                const contract = new ethers.Contract(
                    SALE_CONTRACT_ADDRESS,
                    SALE_CONTRACT_ABI,
                    signer
                );
    
                const weightAmount = Web3.utils.toWei(convertedValue.toString(), 'ether');
                
                await contract.buyTokens(state?.address[0], { value: weightAmount })
                .then((remainingBalance) => {
                    setLoading(false);
                    setValue('');
                    setConvertedValue('');
                    alert("Transaction Complete", remainingBalance);
                    dispatch(setUserBalance({ flag: false, balance: state?.userBalance - convertedValue }));
                    handleClose();
                })
                .catch((err) => {
                    setLoading(false);
                    alert("Transaction failed");

                });

            }
            else {
                alert('Your balance is less.');
            }
            
        }

    }

    // for avoid to write exponential form in number input field
    const getRegExp = ['e', 'E', '+', '-', '.'];

    return(

        <Modal show={show} onHide={handleClose} centered 
        backdrop="static" autoFocus={false}>
            
            <div className="px-1 py-4 bg-lightSecondary rounded position-relative w-100"
            style={{ margin: '0px', border: '3px solid var(--lightPurple)', outline: 'none' }}>
    
                <FaTimes className="position-absolute text-black cursor-pointer-sort" 
                    style={{ right: '10px', top: '10px' }} onClick={handleClose} />

                <div className="app-flex-column w-100 py-3 bg-grey rounded m-0 px-0">

                    <h4 className="text-center text-black"> 
                     Please Connect Wallet
                    </h4>

                    <div className="app-flex-row w-100 justify-content-center align-items-center my-4">
                       <img src={MetaMask} width="30px" height="30px" style={{marginLeft: '7%', marginTop: '8%', marginBottom: '0%'}}/><p style={{fontSize: '25px', marginLeft: '1%', marginTop: '8%'}}>MetaMask</p>
                        
                    

                    <button className="buy-coin-btn heading-font connect-wallet" onClick={connectToMetaMask}>
                        { loading ? <Spinner animation="border" size="sm" /> : 'connect now' }
                    </button>
                    </div>
                    <div className="underLine"></div>
                </div>

            </div>

        </Modal>

    );

}
 
export default CustomModal;