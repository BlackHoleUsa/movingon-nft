import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { NavLink } from 'react-router-dom';
import { Images } from '../../Assets/Images';
import { Routes } from '../../Routes/Routes';
import { Avatar } from '../Avatar/Avatar';
import { BiChevronDown } from 'react-icons/bi';
import { Nav, Navbar} from 'react-bootstrap';


const Topbar = (props) => {
    
    const [ scroll, setScroll ] = useState(false);

    const [ showMenu, setShowMenu ] = useState(false);

    const { currentState, clickLink } = props;

    const data = [
        { id: 1, value: 'Home', sectionId: 'home-section' },
        { id: 2, value: 'About', sectionId: 'about-section' },
        { id: 3, value: 'Team', sectionId: 'team-section' },
        { id: 4, value: 'Token', sectionId: 'token-section' },
        { id: 5, value: 'Roadmap', sectionId: 'roadmap-section' },
        { id: 6, value: 'FAQs', sectionId: 'faq-section' },
        { id: 7, value: 'Contact', sectionId: 'contact-section' }
    ];

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
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
    }

    return(

        <Navbar collapseOnSelect expand="lg" className={`
            navbar navbar-expand-lg navbar-light fixed-top padding-topbar
            ${ (scroll || showMenu) ? 'bg-grey' : '' }
        `}>
        
            <NavLink to={`/${Routes.main}`}>
                <img alt="" src={Images.textLogo} width="140px" />
            </NavLink>
        
            <Navbar.Toggle className={` ${scroll ? 'bg-lightPurple' : 'bg-whiteSmoke'} border-0`} 
            onClick={() => setShowMenu(!showMenu)} />

            <Navbar.Collapse>
                <Nav className="navbar-nav ml-auto">

                    {
                        data.map((link, i) => (
                            <Nav.Item 
                                onClick={() => clickLink({ value: link.value.toLowerCase(), sectionId: link.sectionId })}
                                className={` nav-item p-0 nav-links 
                                ${ (currentState.toLowerCase() === link.value.toLowerCase()) ? 
                                    'gradient-apply active-link' : 'inactive-link' } 
                                `} 
                                key={i}
                            >
                                
                                <span className={ (scroll || showMenu) ? 'text-black font-weight-bold' : 'text-black font-weight-bold' }>
                                    { link.value }
                                </span>

                            </Nav.Item>
                        ))
                    }

                    <NavLink exact to={`/${Routes.connect}`} className={`connect-wallet pb-1 
                        ${ (scroll || showMenu) ? 'inactive-link-dark' : 'inactive-link' } `} 
                        activeClassName="gradient-apply pt-1">
                        
                        Connect Wallet <BiChevronDown className="ml-1" style={{ fontSize: '18px' }} />
                    
                    </NavLink>

                </Nav>
            </Navbar.Collapse>

        </Navbar>

    );

}
 
export default Topbar;