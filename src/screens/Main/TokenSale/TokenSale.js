import React from 'react';
import './TokenSale.css';
import { Row, Col } from 'react-bootstrap'; 
import { Images } from '../../../Assets/Images';
import { tokenSales } from '../../../Assets/Data';

const TokenSaleSection = (props) => {

    const arr = [{ start: 0, end: 4 }, { start: 4, end: 9 }];

    return(

        <div className="app-flex-column w-100 py-5 text-black justify-content-center align-items-center token-section">
            
            <h6 className="font-28px mb-1 mt-4">Token Sale</h6>
            <p className="font-16px mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            {
                arr?.map((allocate, i) => (
                    <Row key={i} className="m-0 p-0 w-100">
                        
                        <Col className="text-center"
                            xs={12} sm={12} 
                            md={{ span: 6, order: i === 0 ? 'first' : 'last' }} 
                            lg={{ span: 6, order: i === 0 ? 'first' : 'last' }} 
                            xl={{ span: 7, order: i === 0 ? 'first' : 'last' }}
                        >
                        
                            <img alt="" src={Images.allocations} width="75%" />
                        
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                            <h6 className={`font-28px mb-5 ${ i === 0 ? 'pt-2' : 'pt-5' } text-uppercase`}>
                                { i === 0 ? 'token' : 'funds' } ALLOCATION
                            </h6>                            
                            <div className="app-flex-column">
                            {
                                tokenSales.slice(allocate.start, allocate.end).map((item, index) => (
                                    <div className="app-flex-row align-items-center justify-content-start mb-4" key={index}>
                                        <div style={{ width: '25px', height: '25px', background: item.hex }}></div>
                                        <div className="font-16px text-black ml-4">{item?.text}</div>
                                    </div>
                                ))
                            }
                            </div>
                        </Col>
                    </Row>
                ))
            }

            {/* {
                arr?.map((allocate, i) => (
                    <React.Fragment key={i}>
                        <h6 className={`font-28px my-5 ${ i === 0 ? 'pt-2' : 'pt-5' } text-uppercase`}>
                            { i === 0 ? 'token' : 'funds' } ALLOCATION
                        </h6>
                        <div className="evenly-content">
                            <GetContentText left={true} />
                            <GetContentText left={false} />
                        </div>

                        <div className="evenly-content">
                            <GetContentText left={true} />
                            <img alt="" src={Images.shapeLogo} className="evenly-content-img" />
                            <GetContentText left={false} />
                        </div>
                    </React.Fragment>
                ))
            } */}

        </div>

    );

}
 
const GetContentText = ({ left }) => {
    return <div className={`app-flex-column text-white pb-4 ${ left ? 'justify-content-start align-items-end' : 
    'justify-content-end align-items-start' } `}>
        <span className="mb-2 font-16px">Title one</span>
        <span className="font-14px text-justify get-content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu
        </span>
    </div>
}

export default TokenSaleSection;