import React, { useState } from 'react';
import './Footer.css';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';

const FooterArt = (props) => {
    
    const [email, setEmail] = useState('');

    return(

        <SectionContainer className="bg-lightPrimary text-black">
            
            <Row className="p-0 m-0">

                <Col xs={12} sm={12} md={6} lg={5} xl={5}>

                    <span className="font-25px d-block">Let's Talk</span>
                    <span className="font-14px text-uppercase d-block">DON'T MISS OUR FUTURE UPDATES!</span>

                </Col>

                <Col xs={12} sm={12} md={6} lg={7} xl={7}>

                    <Row className="p-0 m-0">

                        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                            <input value={email} type="email" className="w-100 email-field border-0 mt-2" 
                            onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                            <button className="border-0 connect-wallet w-100 mt-2">
                                Get Started
                            </button>
                        </Col>

                    </Row>

                </Col>

            </Row>

        </SectionContainer>

    );

}
 
export default FooterArt;