import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { Routes } from 'Routes/Routes';
import { Images } from 'Assets/Images';
import { FlexRow } from 'components/FlexRow/FlexRow';
import book1 from './../../../Assets/images/book1.png';
import book2 from './../../../Assets/images/book2.png';
import './books.css';

const Books = (props) => {

    const goToLink = (name) => {
        if(name === 'movingOn'){
            // replace link with client specific link
            window.open('https://www.amazon.com/dp/B08MHMP2M7/ref=cm_sw_r_cp_api_glt_fabc_6GF5BAGVHZSZ9YYR0ZB9', '_blank');
        } else{
            window.open('https://www.amazon.com/dp/B08MHMP2M7/ref=cm_sw_r_cp_api_glt_fabc_6GF5BAGVHZSZ9YYR0ZB9', '_blank');
        }
    }
    return (

        <SectionContainer className="bg-white text-black books-class" id="about-section">
            <h2 className="books-h6">Our Books</h2>

            <Row className="m-0 p-0">

                <Col xs={12} sm={12} md={6} lg={6} xl={6}>

                    <img alt="" width="100%" src={book1} />
                    <spam className="book-name">Butterflies in Production</spam>
                    <div className="line"></div>
                    <spam className="book-name amazon-link" onClick={()=>goToLink('movingOn')}>Buy book on Amazon</spam>
                    <Link to={`/${Routes.butterflies}`} style={{color: 'black'}}><spam className="book-name-right">Buy Book NFT</spam></Link>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-4 mt-3">
                    <img alt="" width="100%" src={book2} className="right-img"/>
                    <spam className="book-name-rightSection">Moving On</spam>
                    <div className="line"></div>
                    <spam className="book-name amazon-link" onClick={()=>goToLink('movingOn')}>Buy book on Amazon</spam>
                    <Link to={`/${Routes.connect}`} style={{color: 'black'}}><spam className="book-name-right">Buy Book NFT</spam></Link>
                </Col>

            </Row>

        </SectionContainer>

    );

}

export default Books;