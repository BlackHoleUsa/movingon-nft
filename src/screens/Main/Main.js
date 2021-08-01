import React, { useState, useRef, useEffect } from 'react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import HeaderSection from './HeaderSection/HeaderSection';
import AboutSection from './AboutSection/AboutSection';
import FeatureSection, { GetCoins } from './Features/Features';
import TokenSaleSection from './TokenSale/TokenSale';
import RoadMapSection, { MyTeam } from './RoadMap/RoadMap';
import ContactSection, { ContentSectionQuestions } from './ContactSection/ContactSection';
import Footer from './Footer/Footer';

const Main = () => {

    const [currentState, setCurrentState] = useState('home');

    const sections = [
        { id: 1, component: <HeaderSection />, className: 'main-container bg-img-set', 
            componentState: '', sectionId: 'home-section' },

        { id: 2, component: <GetCoins />, className: 'main-container bg-lightPinkShade pt-0 position-relative', 
            componentState: 'about', sectionId: '' },

        { id: 3, component: <AboutSection />, className: 'main-container pt-0 bg-secondary', 
            componentState: 'faqs', sectionId: 'about-section' },

        { id: 4, component: <FeatureSection />, className: 'main-container bg-lightPinkShade pt-0 position-relative', 
            componentState: 'features', sectionId: '' },

        { id: 5, component: <TokenSaleSection />, className: 'main-container pt-0 bg-secondary', 
            componentState: 'token', sectionId: 'token-section' },

        { id: 6, component: <RoadMapSection />, className: 'main-container pt-0 bg-lightPinkShade', 
            componentState: 'roadmap', sectionId: 'roadmap-section' },

        { id: 7, component: <MyTeam />, className: 'main-container pt-0 bg-secondary', 
            componentState: 'team', sectionId: 'team-section' },

        { id: 8, component: <ContactSection />, className: 'main-container pt-0 bg-lightPinkShade', 
            componentState: 'contact', sectionId: '' },

        { id: 9, component: <ContentSectionQuestions />, className: 'main-container pt-0 bg-secondary', 
            componentState: 'contact', sectionId: 'contact-section' },

        { id: 10, component: <Footer />, className: 'main-container pt-0 bg-lightPink', 
            componentState: 'footer', sectionId: 'faq-section' }
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
        // console.log(e);
        // console.log(window.pageYOffset);
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