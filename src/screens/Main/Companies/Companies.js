import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { BiCheck } from 'react-icons/bi';

const Companies = (props) => {
    
    return(

        <SectionContainer className="bg-white text-black pl-0">

            <Row className="m-0 p-0">
                
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    
                    <img alt="" width="100%" src={Images.city} />

                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-4 pt-5">
                    
                    <span className="font-14px d-block">
                        Featured By Companies
                    </span>

                    <span className="font-25px d-block w-75 mb-5">
                        Explore the most appropriate ultimate reward. Let's get started
                    </span>

                    <FeatureAward text="10+ award achieved" />
                    <FeatureAward text="Read On Any Device" />
                    <FeatureAward text="Very High Resolution" />

                </Col>
                
            </Row>

        </SectionContainer>

    );

}

const FeatureAward = ({ text }) => {
    return(
        <div className="app-flex-column w-100 justify-content-center bg-whiteShade pl-3 px-2 rounded mb-3" style={{ height: '85px' }}>
            <FlexRow className="align-items-center justify-content-start d-inline-flex">
                <BiCheck className="text-success font-30px mr-2" />
                <span className="text-black font-18px">{text}</span>
            </FlexRow>
        </div>
    );
}
 
export default Companies;