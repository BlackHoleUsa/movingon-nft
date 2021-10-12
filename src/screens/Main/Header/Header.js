import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';
import { goToSection } from '../../../utilities/CommonMethods';
import ProgressStepper from 'components/ProgressStepper/ProgressStepper';

const Header = (props) => {
    const started = () => {
        goToSection('book-section', false);
    }
    return(

        <SectionContainer className="bg-white text-black" id="home-section">
            
            <Row className="m-0 p-0 mt-5">
                
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{paddingTop:'8%'}}>

                    <span className="text-blueShade text-uppercase " style={{fontSize: '36px', fontWeight: '400'}}>
                    Rare Jewels<br /> Literary Works
                    </span><br />

                    

                    <button className="border-blueShade connect-wallet bg-white text-black mb-4" onClick={started} style={{marginTop:'6%'}}>
                        Get It Now <RiArrowRightUpLine />
                    </button>

                </Col>
                
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>

                    <img alt="" width="100%" className="mb-2" src={Images.headerBook} />

                    {/*<ProgressStepper />*/}

                </Col>

            </Row>

        </SectionContainer>

    );

}
 
export default Header;