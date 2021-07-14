import React from 'react';
import './AboutSection.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';
import { Images } from '../../../Assets/Images';

const AboutSection = (props) => {

    return(

        <div className="w-100 app-flex-column py-5">

            <h1 className="font-36px text-black mb-3 text-center">Know About Us</h1>
            <span className="font-16px text-black mb-5 text-center">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </span>

            <Row className="mx-0 p-0 text-black">

                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <BorderBox className="border-box-about" adjust={true} feature>
                        <h6 className="pb-4 font-36px mt-2">Great Blockchain Business Solutions For Blockchain Business</h6>
                        
                        <span className="w-100 text-justify mb-2">
                            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the.
                        </span>

                        <span className="w-100 text-justify mb-2">
                            car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming.
                        </span>

                        <button className="gradient-apply border-0 connect-wallet text-white mt-3 rounded font-weight-bold" style={{ width: '200px' }}>
                            Know About Ourself
                        </button>
                        
                    </BorderBox>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img alt="" width="100%" src={Images.aboutImage} />
                </Col>

            </Row>

        </div>

    );

}
 
export default AboutSection;