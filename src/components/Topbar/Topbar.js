import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { NavLink,Link } from 'react-router-dom';
import { Images } from 'Assets/Images';
import { Routes } from 'Routes/Routes';
import { topBarContent } from 'Assets/Data';
import { BiChevronDown } from 'react-icons/bi';
import { Nav, Navbar} from 'react-bootstrap';
import AmazonModal from 'components/Modal/AmazonModel';
import { useDispatch, useSelector } from 'react-redux';
import { connectMetaMask, checkAlreadyConnectedMetaMask } from 'redux/thunk/thunk';

const Topbar = (props) => {
    
    // redux setups
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [ scroll, setScroll ] = useState(false);

    const [ showMenu, setShowMenu ] = useState(false);

    const { currentState, clickLink } = props;

    const connectToMetaMask = () => {
      dispatch(connectMetaMask());
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        
        const interval = setInterval(() => {
            dispatch(checkAlreadyConnectedMetaMask(state?.connection));
        }, 3000);
      
        return () => {
            clearInterval(interval);
        };

    }, []);

    const listenToScroll = () => {
        let i = 0;

        if(window.pageYOffset > 118){
            i = i+1;
            if(i === 1){
                setScroll(true);
            }
        } else{
            setScroll(false);
        }
    };

    const goToLink = (index, link) => {
        if(index === 8){
            // replace link with client specific link
           // window.open('https://www.amazon.com/dp/B08MHMP2M7/ref=cm_sw_r_cp_api_glt_fabc_6GF5BAGVHZSZ9YYR0ZB9', '_blank');
            
        } else{
            clickLink({ value: link.value.toLowerCase(), sectionId: link.sectionId });
        }
    }
 
    return(

        <Navbar collapseOnSelect expand="lg" className={`
            navbar navbar-expand-lg navbar-light fixed-top padding-topbar
            ${ (scroll || showMenu) ? 'bg-lightPrimary' : '' }
        `}>
        
            <NavLink to={`/${Routes.main}`}>
                <span className="text-uppercase font-28px text-black mr-4" style={{fontStyle: 'italic', fontFamily: 'Oswald'}}>moving on</span>
            </NavLink>
        
            <Navbar.Toggle className={` ${scroll ? 'bg-lightPurple' : 'bg-whiteSmoke'} border-0`} 
            onClick={() => setShowMenu(!showMenu)} />

            <Navbar.Collapse>
                <Nav className="navbar-nav ml-auto app-flex-column justify-content-center align-items-center">

                    {
                        topBarContent.map((link, i) => (
                            <Nav.Item 
                                onClick={() => goToLink(i, link)}
                                style={{fontWeight: 'bold'}}
                                className={` nav-item p-0 nav-links heading-font
                                ${ (currentState.toLowerCase() === link.value.toLowerCase()) ? 
                                    'gradient-apply active-link' : 'inactive-link' } 
                                `} 
                                key={i}
                            >
                                
                                <span className={ (scroll || showMenu) ? 'text-black' : 'text-black' }>
                                {link.sectionId === 'buyNft-section' ?
                                    <Link to={`/${Routes.connect}`} style={{color: 'black'}}>
                                    
                                  {link.value}
                                
                                </Link>: link.value
                                    }
                                </span>

                            </Nav.Item>
                        ))
                    }

                    <button className="connect-wallet pb-0 gradient-apply border-0 connect-meta-mask" 
                      onClick={connectToMetaMask}
                      disabled={state?.connection}
                    >
                      { 
                        !state?.connection ? <>Connect Wallet</> 
                        : <div className="app-flex-row align-items-center text-white justify-content-center">
                            
                            <div className="app-flex-column heading-font bg-blue align-items-center justify-content-center p-2 font-14px rounded-circle" 
                            style={{ width: '32px', height: '32px' }}>
                              U
                            </div>

                            <span className="font-14px ml-3 heading-font"> { state?.address[0]?.substr(0, 10) } </span>

                        </div>
                      }
                    
                    </button>

                    { 
                     /* state?.connection &&
                      <NavLink exact to={`/${Routes.connect}`} className={`connect-wallet text-white gradient-apply pb-0 w-auto pl-4 pr-3 margin-buy-btn heading-font
                          ${ (scroll || showMenu) ? 'inactive-link-dark' : 'inactive-link' } `} 
                        >
                          
                        BUY <BiChevronDown className="ml-1 font-18px" />
                      
                      </NavLink>*/
                    }

                </Nav>
            </Navbar.Collapse>

        </Navbar>

    );

}
 
export default Topbar;