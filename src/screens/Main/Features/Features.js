import React from 'react';
import './Features.css';
import { Row, Col } from 'react-bootstrap'; 
import BorderBox from '../../../components/BorderBox/BorderBox';
import { Images } from '../../../Assets/Images';
import { featureData, exchangeRates } from '../../../Assets/Data';

const FeatureSection = (props) => {

    return(

        <Row className="mx-0 pb-4 px-0">

            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 p-0">
                
                <div className="w-100 app-flex-column align-items-center justify-content-center feature-section text-black">

                    <h6 className="font-28px mb-1 heading-font">Features</h6>
                    <p className="font-16px paragraph-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <Row className="mx-0 mt-5 mb-5 p-0">
                        {
                            featureData.map((data, i) => (
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                                    <div className="w-100 app-flex-column px-4 mb-4 align-items-center justify-content-center text-center" 
                                    style={{ height: '380px', border: '3px solid var(--secondary)' }}>
                                        <img alt="" width="80px" src={data.image} />
                                        <h6 className="font-20px pt-4 pb-2 heading-font">{data.heading}</h6>
                                        <p className="font-16px paragraph-font">{data.text}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>

                </div>

            </Col>

        </Row>

    );

}
 
export const GetCoins = () => {

    return(

        <Row className="mx-0 pb-4 px-0">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 p-0">

                <div className="w-100 app-flex-column align-items-center justify-content-center exchange-section text-black">

                    <h6 className="font-28px mb-5 mt-5 heading-font">Coin Exchange Rates</h6>

                    <BorderBox className="border-box-exchange" feature={true} adjust={true}>
                        <div className="w-100 app-flex-column align-items-center justify-content-center pb-3 pt-4 border-box-exchange-inner">
                            <div className="w-100 app-flex-row align-items-center justify-content-center">
                                <img alt="" src={Images.ctn} />
                                <h6 className="font-30px ml-3 heading-font">Ethereum (ETH)</h6>
                            </div>
                            <Row className="mx-0 mt-2 p-0">
                                {
                                    exchangeRates.map((data, i) => (
                                        <React.Fragment key={i}>
                                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                                <div className="w-100 app-flex-column px-4 mb-4 align-items-center text-center justify-content-center" 
                                                >
                                                    <h6 className="font-28px pt-4 pb-2 heading-font">{data.coin}</h6>
                                                    <p className="font-16px paragraph-font">{data.rate}</p>
                                                </div>
                                            </Col>
                                            { i === 2 && <Col xs={12}>
                                                <div style={{ height: '1px' }} className="bg-black mx-4 "></div>
                                            </Col> }
                                        </React.Fragment>
                                    ))
                                }
                                </Row>
                        </div>
                    </BorderBox>

                </div>

            </Col>
        </Row>

    );

}

export default FeatureSection;