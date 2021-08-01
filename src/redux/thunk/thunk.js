import Web3 from "web3";

import { connectMetaMaskAction, setUserBalance } from '../actions/action';

// example Api calling functions

export const getArgs = (args, callback) => {



};


export const checkAlreadyConnectedMetaMask = (currentConnection) => async dispatch => {
  
  window.web3 = new Web3(window.web3.currentProvider);

  if (window.web3.currentProvider.isMetaMask === true){

    await window.web3.eth.getAccounts((error, accounts) => {
      if (accounts?.length) {
        
        window.web3.eth.getBalance(accounts[0]).then((res) => {
          dispatch(setUserBalance({ flag: true, balance: res }));
        });

        dispatch(connectMetaMaskAction({ connection: true, address: accounts }));
      }
      else {
        dispatch(connectMetaMaskAction({ connection: false, address: [] }));
        dispatch(setUserBalance({ flag: false, balance: 0 }));
        if(currentConnection){
          window.location.reload();
        }
      }
    });

  }
}

// meta mask connection
export const connectMetaMask = () => async dispatch => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        
        try {
          await window.ethereum.enable();
          console.log(window.web3);
          console.log(window.ethereum);
          updateAddress(dispatch);
        } catch (err) {
          alert('Something went wrong.');
        }
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        updateAddress(dispatch);
      } else {
        alert('You have to install MetaMask !');
      }   
};

const updateAddress = async (dispatch) => {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();

    if (accounts) {
        dispatch(connectMetaMaskAction({ connection: true, address: accounts }));
        web3.eth.getBalance(accounts[0]).then((res) => dispatch(setUserBalance({ flag: true, balance: res })));
    }
    else{
        dispatch(connectMetaMaskAction({ connection: false, address: [] }));
        dispatch(setUserBalance({ flag: false, balance: 0 }));
    }
};