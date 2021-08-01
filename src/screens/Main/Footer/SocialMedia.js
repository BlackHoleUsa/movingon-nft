import React from 'react';
import './Footer.css';
import { GrFacebookOption, GrTwitter, AiOutlineInstagram } from 'react-icons/all';

const SocialMedia = () => {

    const iconClass = "text-black font-28px cursor-pointer-sort"

    return(

        <div className="social-media text-black">
            <div className="w-100 app-flex-row align-items-center justify-content-around">
                <div className="font-23px w-50 text-center font-weight-bold">Follow Us</div>
                <GetSocialIcons iconClass={iconClass} align />
            </div>
        </div>

    );

}

export const GetSocialIcons = ({ iconClass, align }) => {
    return (
        <div className={`app-flex-row align-items-center 
            ${ align ? 'justify-content-center w-50 text-center' : 'justify-content-start w-100' } `}>
            
            <GrFacebookOption className={`${iconClass} mr-4`} />
            <GrTwitter className={`${iconClass} mr-4`} />
            <AiOutlineInstagram className={iconClass} />

        </div>
    );
}

export default SocialMedia;