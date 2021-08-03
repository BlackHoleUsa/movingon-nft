import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';

const Chapters = (props) => {
    
    const data = [
        { id: 1, icon: Images.chooseBookIcons[0], title: 'Easily Transferable', text: 'NFTs are purchased and sold on unique markets' },
        { id: 2, icon: Images.chooseBookIcons[1], title: 'Trustworthy', text: 'Non-fungible tokens are used in blockchain technologies' },
        { id: 3, icon: Images.chooseBookIcons[2], title: 'Maintain Ownership Rights', text: 'This refers to a network of shared platforms the size of an NFT, where no buyer can change the data later' }
    ];

    return(

        <SectionContainer className="bg-white text-black">
        
            <Row className="m-0 p-0">
                
                <Col xs={12} sm={12} md={4} lg={3} xl={3} 
                className="app-flex-column justify-content-center">

                    <span className="font-14px mb-2 d-block text-left">
                        Book Review
                    </span>

                    <span className="font-25px mb-3 d-block text-left text-blueShade">
                        Chapters Preview
                    </span>

                </Col>

                <Col xs={12} sm={12} md={8} lg={9} xl={9}>

                    <Row className="p-0 m-0">

                        {
                            Images.pages.map((page, i) => (
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                                    <img alt="" src={page} width="100%" />
                                </Col>
                            ))
                        }

                    </Row>

                </Col>

            </Row>

        </SectionContainer>

    );

}
 
export default Chapters;