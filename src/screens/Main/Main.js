import React, { useState, useRef, useEffect } from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import HeaderSection from './HeaderSection/HeaderSection';

const Main = () => {

    const [currentState, setCurrentState] = useState('home');

    const sections = [
        { id: 1, component: <HeaderSection />, className: 'main-container bg-img-set', 
            componentState: '', sectionId: 'home-section' },
    ];

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

    const onScroll = (e) => {
        console.log(e);
        console.log(window.pageYOffset);
    }

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

                {
                    sections.map((section, i) => (
                        <div className={section.className}
                            style={{ clipPath: i === 0 ? 'polygon(0% 0%, 100% 0, 100% 93%, 50% 100%, 0 93%)' : 'none' }}
                            key={i}
                            id={section?.sectionId}
                            name={section?.sectionId}
                        >
                            { section.component }
                        </div>
                    ))
                }

            </div>

        </div>

    );

}

export default Main;