import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';
import { FlexRow } from 'components/FlexRow/FlexRow';

const History = (props) => {
    
    return(

        <SectionContainer className="bg-lightPrimary text-black" id="history-section">

            <span className="mb-4 font-25px d-block text-center text-uppercase">ownership history</span>
            
            {
                Images.owners.map((src, i) => (
                    <GetOwnersHistory src={src} key={i} />
                ))
            }

        </SectionContainer>

    );

}

const GetOwnersHistory = ({ src }) => {
    return(

        <FlexRow className="align-items-center justify-content-start py-3 d-inline-flex mx-auto history-owner">
            
            <img alt="" src={src} className="rounded-circle mr-4 d-inline-block" />

            <div className="app-flex-column justify-content-start w-100">
                <span className="font-18px">
                    @iza_watson
                    <span className="pl-3">Won Auction With A Bid Of   0.75 = ($1,000)</span>
                </span>
                <span className="font-12px text-whiteSmoke">10 Minuets Ago </span>
            </div>

        </FlexRow>

    );
}
 
export default History;