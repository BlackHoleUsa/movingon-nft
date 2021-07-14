import React, { useState } from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

const CustomModal = (props) => {
    
    const { show, handleClose } = props;

    const [ value, setValue ] = useState('');

    return(

        <Modal show={show} onHide={handleClose} centered 
        backdrop="static" autoFocus={false}>
            
            <div className="px-1 py-4 bg-lightSecondary rounded position-relative w-100"
            style={{ margin: '0px', border: '3px solid var(--lightPurple)', height: '33vh', outline: 'none' }}>
    
                <FaTimes className="position-absolute text-black cursor-pointer-sort" 
                    style={{ right: '10px', top: '10px' }} onClick={handleClose} />

                <div className="app-flex-column w-100 py-3 bg-grey rounded m-0 px-0">

                    <h4 className="text-center text-black"><span className="font-weight-bold">Total:</span> 100 ETH</h4>

                    <div className="app-flex-row w-100 justify-content-center align-items-center my-4">
                        <h4 className="text-center text-black mr-3">Buy</h4>
                        <input className="buy-coin-filed" placeholder="Enter Value" value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>

                    <button className="buy-coin-btn">
                        buy now
                    </button>
                </div>

            </div>

        </Modal>

    );

}
 
export default CustomModal;