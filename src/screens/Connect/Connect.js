import React, { useState, useEffect } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import CustomModal from '../../components/Modal/Modal';
import { useHistory, Redirect } from 'react-router-dom';
import { Routes } from '../../Routes/Routes';

import { useSelector } from 'react-redux';

const Connect = (props) => {
    
    const [ showModal, setShowModal ] = useState(false);
 
    const state = useSelector(state => state);

    const history = useHistory();

    
    useEffect(() => {
        setShowModal(true);        
        
        return () => {
            setShowModal(false);
        }

    }, []);

    if(!state?.connection){
        return <Redirect exact to={`/${Routes.main}`} />
    }

    else{
        return(

            <div className="app-flex-column w-100 h-100 position-relative bg-img-set">
                
                <Topbar 
                    currentState={''} 
                    clickLink={({ value, sectionId }) => {
                        console.log(value);
                    }}
                />
    
                <div className="app-flex-column justify-content-center align-items-center w-100 h-50">
                    <div className="text-black font-30px">Holdings</div>
                </div>
                
                <CustomModal show={showModal} handleClose={() => {
                    setShowModal(false);
                    history.replace(`/${Routes.main}`)
                }} />
    
            </div>
    
        );
    }

}
 
export default Connect;