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
import { FaCommentsDollar } from "react-icons/fa";
import Web3 from "web3";
import Web3Utils from 'web3-utils';
import { ethers } from "ethers";

import {
  NFT_CONTRACT_ABI,
  MVN_CONTRACT_ADDRESS,
  BTRF_CONTRACT_ADDRESS,
} from "./../Connect/NFTcontract";
import {
  SALE_CONTRACT_ABI,
  SALE_CONTRACT_ADDRESS,
} from "./../Connect/contractInfo";
const Dashboard = () => {
  const [totalMovingOn, setTotalMovingOn] = useState(0);
  const [totalButterfly, setTotalButterfly] = useState(0);
  const [totalMovingOnPrice, setTotalMovingOnPrice] = useState(0);
  const [totalButterflyPrice, setTotalButterflyPrice] = useState(0);
  let [showPdf, setShowPdf] = useState("no");
  const state = useSelector((state) => state);
  const [checkConnect, setCheckConnect] = useState("no");
  useEffect(() => {
    getPrices();
  }, []);
  const getPrices = async () => {
    if (state?.connection) {
      const web3 = new Web3(Web3.givenProvider);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const saleContract = new ethers.Contract(
        SALE_CONTRACT_ADDRESS,
        SALE_CONTRACT_ABI,
        signer
      );
      const id = await web3.eth.net.getId();
      if(id === 1){
      const movingSold = await saleContract.copiesSold1(); // moving on book.
      const butterflySold = await saleContract.copiesSold2(); // butterflies in produciton book
      const mvnPrice = await saleContract.getMvnPrice();
      const btrfPrice = await saleContract.getBtrfPrice();
      const mvnP = Web3Utils.hexToNumber(mvnPrice);
      const btrfP = Web3Utils.hexToNumber(btrfPrice);
      const mvnFinalPrice = Web3Utils.fromWei(`${mvnP}`, 'ether');
      const btrfFinalPrice = Web3Utils.fromWei(`${btrfP}`, 'ether');
      console.log(mvnFinalPrice, btrfFinalPrice);
      const moveT = parseInt(movingSold._hex, 16);
      const butterT = parseInt(butterflySold._hex, 16);
      setTotalMovingOn(moveT);
      setTotalButterfly(butterT);
      const movePrice = moveT * mvnFinalPrice;
      const butterPrice = butterT * btrfFinalPrice;
      setTotalButterflyPrice(parseFloat(butterPrice).toFixed(4));
      setTotalMovingOnPrice(parseFloat(movePrice).toFixed(4));
    }else{
      alert('Please connect with proper network');
    }
  }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
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
          <div
            className="sale-details"
            style={{ background: "#E3E3E3", marginRight: "20%" }}
          >
            <h3>Butterflies In Production</h3>
            <h2>Total Sales & Earning</h2>
            <div className="sold-books align-items-center justify-content-start">
              <spam className="sold-head">Total Sold Books</spam>
              <spam className="sold-val">{totalButterfly}</spam>
            </div>
            <div className="sold-books total-earning align-items-center justify-content-start">
              <spam className="sold-head">Total Earning</spam>
              <spam className="sold-val">{totalButterflyPrice} (ETH)</spam>
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
          <div
            className="sale-details move-sale-details"
            style={{ background: "#E3E3E3", marginRight: "20%" }}
          >
            <h3 style={{ fontWeight: "600" }}>Moving On</h3>
            <h2>Total Sales & Earning</h2>
            <div className="sold-books align-items-center justify-content-start">
              <spam className="sold-head">Total Sold Books</spam>
              <spam className="sold-val">{totalMovingOn}</spam>
            </div>
            <div className="sold-books total-earning align-items-center justify-content-start">
              <spam className="sold-head" style={{ textAlign: "left" }}>
                Total Earning
              </spam>
              <spam className="sold-val">{totalMovingOnPrice} (ETH)</spam>
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
