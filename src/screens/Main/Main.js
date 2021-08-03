import React, { useState, useRef, useEffect } from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import Footer from './Footer/Footer';
import FooterArt from './Footer/FooterArt';
import Features from './Features/Features';
import ChooseBook from './ChooseBook/ChooseBook';
import About from './About/About';
import Companies from './Companies/Companies';
import History from './History/History';

const Main = () => {

    const [currentState, setCurrentState] = useState('home');

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            setCurrentState('home');
        }

    }, []);

    const goToSection = (sectionRef) => {
        document.getElementById(sectionRef).scrollIntoView({ behavior: 'smooth' });
        console.log(document.getElementById(sectionRef).offsetTop);
    }

    const onScroll = (e) => {}

    return(

        <div className="app-flex-column w-100 position-relative">
                        
            <Topbar 
                currentState={currentState} 
                clickLink={({ value, sectionId }) => {
                    setCurrentState(value);
                    goToSection(sectionId);
                }}    
            />

            <div className="app-flex-column w-100 text-white" 
            > 
                <br /><br /><br /><br />
                
                <About />
                <ChooseBook />
                <Companies />
                <History />
                <Features />
                <FooterArt />
                <Footer />

            </div>

        </div>

    );

}

export default Main;