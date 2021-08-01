import React from 'react';
import './TokenSale.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';
import { tokenSales } from '../../../Assets/Data';

const TokenSaleSection = (props) => {

    const arr = [{ start: 0, end: 4 }, { start: 4, end: 9 }];

    return(

        <div className="app-flex-column w-100 py-5 text-black justify-content-center align-items-center token-section">
            
            <h6 className="font-28px mb-1 mt-4 heading-font">Token Sale</h6>
            <p className="font-16px mb-5 paragraph-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <Row className="mx-0 mb-4 p-0 w-100">
                <Col className="text-center"
                    xs={12} sm={12} 
                    md={{ span: 6 }} 
                    lg={{ span: 6 }} 
                    xl={{ span: 7 }}
                >
                
                    <img alt="" src={Images.allocations} className="allocation-img" />
                
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={5} 
                    className={`my-auto`}
                >
                    
                    <h6 className={`font-28px mb-5 text-uppercase heading-font`}>
                        token ALLOCATION
                    </h6>

                    <div className="app-flex-column">
                    {
                        tokenSales.slice(0, 4).map((item, index) => (
                            <div className="app-flex-row align-items-center justify-content-start mb-4 heading-font" key={index}>
                                <div style={{ width: '25px', height: '25px', background: item.hex }}></div>
                                <div className="font-16px text-black ml-4">{item?.text}</div>
                            </div>
                        ))
                    }
                    </div>

                </Col>
            </Row>

            <Row className="mx-0 mb-4 p-0 w-100">
                <Col className="app-flex-column place-center"
                    xs={12} sm={12} 
                    md={{ span: 6 }} 
                    lg={{ span: 6 }} 
                    xl={{ span: 7 }}
                >
                    <h6 className={`font-28px mb-5 text-uppercase heading-font`}>
                        funds ALLOCATION
                    </h6>

                    <div className="app-flex-column w-auto __padding-upper">
                    {
                        tokenSales.slice(4, 9).map((item, index) => (
                            <div className="app-flex-row align-items-center justify-content-start mb-4 heading-font" key={index}>
                                <div style={{ width: '25px', height: '25px', background: item.hex }}></div>
                                <div className="font-16px text-black ml-4">{item?.text}</div>
                            </div>
                        ))
                    }
                    </div>
                
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={5} 
                    className={`my-auto allocation-img-center`}
                >
                    <img alt="" src={Images.allocations} className="allocation-img allocation-img-center" />        
                </Col>
            </Row>

        </div>

    );

}

export default TokenSaleSection;