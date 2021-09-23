import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';

const Features = (props) => {
    
    const data = [
        { id: 1, icon: Images.features[0], title: '2540+', text: 'Copies Sold' },
        { id: 2, icon: Images.features[1], title: '10+', text: 'Languages' },
        { id: 3, icon: Images.features[2], title: '12%', text: 'Averages Score' },
        { id: 4, icon: Images.features[3], title: '100 M +', text: 'Readers Worldwide' }
    ];

    return(

        <SectionContainer className="bg-white text-black" id="features-section">
            
            <Row className="m-0 p-0 mt-5">
                
                {
                    data?.map((item, i) => (
                        <Col xs={12} sm={6} md={6} lg={3} xl={3} key={i} 
                        className={`align-items-center justify-content-center app-flex-column ${ i < 3 ? 'margin-features-bottom' : '' } `}>
                            
                            <img alt="" src={item?.icon} className="mb-3" />
                            <span className="d-block mb-1 font-30px">{item?.title}</span>
                            <span className="d-block font-15px text-whiteSmoke">{item?.text}</span>

                        </Col>
                    ))
                }

            </Row>

        </SectionContainer>

    );

}
 
export default Features;