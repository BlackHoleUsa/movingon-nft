import React from 'react';
import './HeaderSection.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';

const HeaderSection = (props) => {
    
    const data = [
        { time: 12, value: 'Month' },
        { time: 22, value: 'Day' },
        { time: 32, value: 'Minute' },
        { time: 42, value: 'Seconds' }
    ];

    return(

        <Row className="m-0 px-0 pt-0 pb-5">

            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="m-0 p-0">

                <div className="app-flex-column header-left-section pr-2 pt-4 text-black">

                    <h6><span className="text-lightPurple">ICO</span> Solution Page for Your Business</h6> <br />
                    <p>Tempory incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudquat.Tempory incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudquat.</p>
                    <br />
                    <button className="gradient-apply border-0">
                        Get Started
                    </button>
                    <br />
                    <br />
                </div>

            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="m-0 p-0">
                <div className="h-100 w-100 app-flex-column justify-content-center align-items-center text-center header-right-section">
                    <BorderBox className="border-box text-black">
                        <h6 className="pt-3 pb-2 font-weight-bold">ICO Coin Start</h6>
                        <span>Discount 70% From The Final Price</span>
                        <div className="w-100 app-flex-row justify-content-between align-items-center px-4 flex-wrap" style={{ height: '190px' }}>

                            {
                                data?.map((time, i) => (
                                    <React.Fragment key={i}>
                                        <div className="app-flex-column text-black">
                                            <div className="time-box">
                                                {time.time}
                                            </div>
                                            <div className="text-center py-3 text-black">
                                                {time.value}
                                            </div>
                                        </div>                                        
                                    </React.Fragment>
                                ))
                            }

                        </div>
                    </BorderBox>
                </div>
            </Col>

        </Row>

    );

}
 
export default HeaderSection;