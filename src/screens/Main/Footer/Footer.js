import React from 'react';
import './Footer.css';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = (props) => {
    const goToLink = (link) => {
        window.open(link, "_blank")?.focus();
      };
    return(

        <SectionContainer className="bg-white text-black">
            
            {/*<span className="d-block text-uppercase mb-4 text-center font-30px">logo</span>*/}

            <span className="d-block mb-3 text-center font-25px">
                Change The Way Of Your Life Towards A Positive World
            </span>

            <span className="d-block mb-3 text-center font-16px">
                I folded the letter and put it back in my jean jacket pocket. I thought about it for awhile, standing on the cheese line at Penn Station, waiting to buy a train ticket, but honestly it was the view of the shrinking Manhattan skyline, as the Amtrak Train traveled southbound to Ray Charles’ sweet and clear as moonlight.
            </span>

            <FlexRow className="w-100 align-items-center d-inline-flex" 
            style={{ justifyContent: 'center' }}>
                <FiFacebook className="font-18px mr-3 cursor-pointer-sort" onClick={() => goToLink("https://www.facebook.com/JLCaban1972/")}/>
                <FiInstagram className="font-18px mr-3 cursor-pointer-sort" onClick={() => goToLink("https://www.instagram.com/invites/contact/?i=8y6ueyoqtnje&utm_content=lejp22s")}/>
                
            </FlexRow>

            <hr className="my-3 bg-black rounded w-75 mx-auto" />

            <span className="font-12px d-block text-center">
                COPYRIGHT 2021 - TERMS & CONDITIONS  PRIVACY POLICY
            </span>

        </SectionContainer>

    );

}
 
export default Footer;