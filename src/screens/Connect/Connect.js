import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Topbar from '../../components/Topbar/Topbar';
import CustomModal from '../../components/Modal/Modal';
import { useHistory, Redirect } from 'react-router-dom';
import { Routes } from '../../Routes/Routes';
import { useSelector } from 'react-redux';
import Footer from './.././Main/Footer/Footer';
import FooterArt from './.././Main/Footer/FooterArt';
import itemInfo from './../.././Assets/images/item-info.png';
import Review from './rating.js';
import './Connect.css';
const Connect = (props) => {

    const [showModal, setShowModal] = useState(false);

    const state = useSelector(state => state);

    const history = useHistory();


    useEffect(() => {
        setShowModal(true);

        return () => {
            setShowModal(false);
        }

    }, []);

    if (!state?.connection) {
        return <Redirect exact to={`/${Routes.main}`} />
    }

    else {
        return (

            <div className="app-flex-column w-100 h-100 position-relative bg-img-set">

                <Topbar
                    currentState={''}
                    clickLink={({ value, sectionId }) => {
                        console.log(value);
                    }}
                />

                <Row className="connect w-100">
                    <Col className="imageDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <img src={itemInfo} className="mr-3" />
                    </Col>
                    <Col className="textDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <h1 className="Book-heading">What's Inside The Book.</h1>
                        <h1 className="Book-Chapters">Chapters Covered</h1>
                        <p>With the help of his friends and family members, he initially begins to
                            successfully climb the rungs of the ladder to this new life of achievement
                            and prosperity; however, his life’s trials, tribulations and extreme
                            self-doubt intervene, sending Justin into a whirlwind of confusion,
                            insecurity and, ultimately, a relapse into despair.</p>
                        <Row>
                            <Review />
                            <p className="reviewCount">30 Reviews</p>
                        </Row>
                        <h2>0.24 ETH($ 125.255)</h2>
                        <button className="buyBtn">
                            buy now
                        </button>
                    </Col>

                </Row>
                <FooterArt />
                <Footer />
            </div>

        );
    }

}

export default Connect;