import React from 'react';
import './RoadMap.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from 'Assets/Images';
import { teamMembers } from 'Assets/Data';
import TeamButtons from 'components/TeamButtons/TeamButtons';
import RoadMapContain from 'components/RoadMapContain/RoadMapContain';

const RoadMapSection = (props) => {

    return(

        <div className="app-flex-column w-100 py-5 text-black justify-content-center align-items-center">
            
            <h6 className="font-36px mb-2 mt-2 heading-font">Roadmap To Success</h6>
            <p className="font-16px mb-4 paragraph-font">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <RoadMapContain />

        </div>

    );

}

export const MyTeam = () => {
    return (

        <div className="w-100 py-5 text-center text-black">
            
            <h6 className="font-36px mb-2 pt-5 heading-font">Our Awesome Team</h6>
            <p className="font-16px mb-5 pb-3 paragraph-font">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <TeamButtons />
            
            <Row className="px-0 mt-5">
                {
                    teamMembers.map((memb, i) => (
                        <Col xs={12} sm={6} md={6} lg={6} xl={3} key={i} className="px-0 mx-0">
                            <div className="w-100 app-flex-column align-items-center justify-content-center mb-4">
                                
                                <div className="p-1 rounded-circle" style={{ border: '3px solid var(--lightPurple)' }}>
                                    <img alt="" src={memb.image} />
                                </div>

                                <h6 className="font-20px mb-2 mt-4 heading-font">{memb.name}</h6>
                                <span className="font-16px mb-1 paragraph-font">{memb.role}</span>
                            </div>
                        </Col>
                    ))
                }
            </Row>

            <button className="gradient-apply mx-auto connect-wallet rounded font-weight-bold border-0 mt-5 mb-3 paragraph-font">
                See All
            </button>

        </div>

    );
}

export default RoadMapSection;