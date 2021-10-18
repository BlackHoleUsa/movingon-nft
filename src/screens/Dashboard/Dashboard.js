import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Topbar from "../../components/Topbar/Topbar";
import CustomModal from "../../components/Modal/Modal";
import { useHistory, Redirect } from "react-router-dom";
import { Routes } from "../../Routes/Routes";
import { useSelector } from "react-redux";
import Footer from "./.././Main/Footer/Footer";
import FooterArt from "./.././Main/Footer/FooterArt";
import itemInfo from "./../.././Assets/images/item-info.png";
import movingDashboard from "./../.././Assets/images/moving-dashboard.png";
import butterflyDashboard from "./../.././Assets/images/butterfly-dashboard.png";
import { Row, Col } from "react-bootstrap";
import { Images } from "../../Assets/Images";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  let [showPdf, setShowPdf] = useState("no");
  const state = useSelector((state) => state);
  const [checkConnect, setCheckConnect] = useState("no");

  

  return (
    <div className="app-flex-column w-100 h-100 position-relative ">
      <Topbar
        currentState={""}
        clickLink={({ value, sectionId }) => {
          console.log(value);
        }}
      />

      <Row className="connect w-100" xs={12} sm={12} md={12} lg={12} xl={12}>
        <Col className="imageDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="img-div">
            <img src={butterflyDashboard} className="mr-3" width="100%" />
          </div>
        </Col>
        <Col className="textDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="sale-details" style={{background: '#E3E3E3', marginRight: '20%'}}>
              <h3>Butterflies In Production</h3>
              <h2>Total Sales & Earning</h2>
              <div className="sold-books align-items-center justify-content-start">
                  <spam className="sold-head">Total Sold Books</spam>
                  <spam className="sold-val">100</spam>
              </div>
              <div className="sold-books total-earning align-items-center justify-content-start">
                  <spam className="sold-head">Total Earning</spam>
                  <spam className="sold-val">24 (ETH)</spam>
              </div>
          </div>
        </Col>
      </Row>

      <Row className="connect w-100" xs={12} sm={12} md={12} lg={12} xl={12}>
        <Col className="imageDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="img-div mov-img-div">
            <img src={movingDashboard} className="mr-3" width="100%" />
          </div>
        </Col>
        <Col className="textDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="sale-details move-sale-details" style={{background: '#E3E3E3', marginRight: '20%'}}>
              <h3 style={{fontWeight: '600'}}>Moving On</h3>
              <h2>Total Sales & Earning</h2>
              <div className="sold-books align-items-center justify-content-start">
                  <spam className="sold-head">Total Sold Books</spam>
                  <spam className="sold-val">90</spam>
              </div>
              <div className="sold-books total-earning align-items-center justify-content-start">
                  <spam className="sold-head" style={{textAlign: 'left'}}>Total Earning</spam>
                  <spam className="sold-val">22 (ETH)</spam>
              </div>
          </div>
        </Col>
      </Row>
      <FooterArt />
      <Footer />
    </div>
  );
};

export default Dashboard;
