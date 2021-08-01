import React, { useState, useEffect } from 'react';
import './HeaderSection.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from 'components/BorderBox/BorderBox';

const HeaderSection = (props) => {

    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {

        let days, minutes, seconds;

        // Get today's date and time
        const countDownDate = new Date("Dec 30, 2021 15:37:25").getTime();
        const timer = setInterval(() => {

            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;
            
            // Time calculations for days, month, minutes and seconds
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setSec(seconds);
            setMin(minutes);
            setHour(days * 24);
            setDay(days);

            if (distance < 0) {
                clearInterval(timer);
            }
            
        }, 1000);

        return () => {
            setSec(seconds);
            setMin(minutes);
            setHour(days * 24);
            setDay(days);
        };

    }, []);

    const data = [
        { time: day, value: 'Days' },
        { time: hour, value: 'Hours' },
        { time: min, value: 'Minutes' },
        { time: sec, value: 'Seconds' }
    ];

    return(

        <Row className="m-0 px-0 pt-0 pb-5">

            <Col xs={12} sm={12} md={6} lg={6} xl={7} className="m-0 p-0">

                <div className="app-flex-column header-left-section pr-4 pt-4 text-black">

                    <h6><span className="text-lightPurple heading-font">ICO</span> Solution Page for Your Business</h6> <br />
                    <p className="paragraph-font">Tempory incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudquat.Tempory incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudquat.</p>
                    <br />
                    <button className="gradient-apply border-0 heading-font">
                        Get Started
                    </button>
                    <br />
                    <br />
                </div>

            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={5} className="m-0 p-0">
                <div className="h-100 w-100 app-flex-column justify-content-center align-items-center text-center header-right-section">
                    <BorderBox className="border-box text-black">
                        <h6 className="pt-3 pb-2 font-weight-bold heading-font">ICO Coin Start</h6>
                        <span className="heading-font">Discount 70% From The Final Price</span>
                        <div className="w-100 app-flex-row justify-content-between align-items-center px-4 flex-wrap" style={{ height: '190px' }}>

                            {
                                data?.map((time, i) => (
                                    <React.Fragment key={i}>
                                        <div className="app-flex-column text-black">
                                            <div className="time-box font-30px">
                                                {time.time}
                                            </div>
                                            <div className="text-center py-3 text-black heading-font">
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