import React from 'react';
import './TeamButtons.css';
import { Row, Col } from 'react-bootstrap';

const TeamButtons = (props) => {
    
    const buttonTexts = [ 'Director', 'Advisor', 'Supervisor' ];

    return(

        <div className="teams-buttons">

            <Row className="m-0 p-0 bg-lightPink rounded-pill">
                { buttonTexts.map((btn, i) => (
                    <Col className="m-0 p-0 team-btn font-23px heading-font" xs={4} sm={4} md={4} lg={4} xl={4} key={i}>
                        { btn }
                    </Col>
                )) }
            </Row>

        </div>

    );

}
 
export default TeamButtons;