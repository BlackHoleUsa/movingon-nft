import React from 'react';
import './RoadMapContain.css';

import { FlexRow } from '../FlexRow/FlexRow';

const RoadMapContain = () => {

    const timings = ['Jan 2018', 'Feb 2018', 'March 2018', 'April 2018', 'May 2018'];

    const launch = ['Planning', 'ICO Launch', 'Token Sell', 'Token Start', 'Token Live'];

    return(

        <div className="road-map-contain app-flex-column w-100">
            
            <FlexRow className="justify-content-around padding-flex-row flex-align-headings heading-font">
                { 
                    timings.map((str, i) => (
                        <span key={i} className="font-18px text-greyShade mb-2">
                            {str}
                        </span>
                    ))
                }
            </FlexRow>

            <FlexRow className="justify-content-around padding-flex-row flex-align-headings heading-font">
                { 
                    launch.map((str, i) => (
                        <span key={i} className="font-20px text-black font-weight-bold">
                            {str}
                        </span>
                    ))
                }
            </FlexRow>

            <FlexRow className="padding-line bg-lightPurple rounded my-5 position-relative">
                <FlexRow className="position-absolute justify-content-around padding-flex-row">
                    {
                        timings.map((item, i) => (
                            <span style={{ width: '30px', height: '30px' }} key={i}
                                className="rounded-circle bg-lightPurple border-0 app-flex-column align-items-center justify-content-center">
                                <span style={{ width: '16px', height: '16px' }} className="p-1 rounded-circle bg-redShade border-0">
                                
                                </span>    
                            </span>
                        ))
                    }
                </FlexRow>
            </FlexRow>

            <FlexRow className="justify-content-around padding-flex-row d-lg-flex d-xl-flex d-md-flex d-sm-none remove-flex">
                { 
                    launch.map((str, i) => (
                        <span key={i} className="font-18px text-black text-center d-block text-road-map-margin paragraph-font">
                            Lorem ipsum is simply dummy text of the printings.
                        </span>
                    ))
                }
            </FlexRow>

            <div className="w-100 app-flex-column show-flex">
                { 
                    launch.map((str, i) => (
                        <span key={i} className="font-18px text-black text-center d-block mb-2 paragraph-font">
                            Lorem ipsum is simply dummy text of the printings.
                        </span>
                    ))
                }
            </div>

        </div>

    );

}

export default RoadMapContain;