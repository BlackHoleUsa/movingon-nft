import React from 'react';
import './RoadMap.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';
import { teamMembers } from '../../../Assets/Data';
import TeamButtons from '../../../components/TeamButtons/TeamButtons';

const RoadMapSection = (props) => {

    const arr = [1, 2];

    return(

        <div className="app-flex-column w-100 py-5 text-black justify-content-center align-items-center">
            
            <h6 className="font-36px mb-2 mt-3">Roadmap To Success</h6>
            <p className="font-16px mb-4">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <img alt="" src={Images.teamHeadings} className="w-100 my-5" />

        </div>

    );

}

export const MyTeam = () => {
    return (

        <div className="w-100 py-5 text-center text-black">
            
            <h6 className="font-36px mb-2 pt-5">Our Awesome Team</h6>
            <p className="font-16px mb-5 pb-3">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <TeamButtons />
            
            <Row className="px-5 mt-5">
                {
                    teamMembers.map((memb, i) => (
                        <Col xs={12} sm={6} md={6} lg={6} xl={3} key={i}>
                            <div className="w-100 app-flex-column align-items-center justify-content-center mb-4">
                                
                                <div className="p-1 rounded-circle" style={{ border: '3px solid var(--lightPurple)' }}>
                                    <img alt="" src={memb.image} />
                                </div>

                                <h6 className="font-20px mb-2 mt-4">{memb.name}</h6>
                                <span className="font-16px mb-1">{memb.role}</span>
                            </div>
                        </Col>
                    ))
                }
            </Row>

            <button className="gradient-apply mx-auto connect-wallet rounded font-weight-bold border-0 mt-5 mb-3">
                See All
            </button>

        </div>

    );
}

export default RoadMapSection;