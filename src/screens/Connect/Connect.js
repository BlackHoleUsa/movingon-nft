import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Topbar from "../../components/Topbar/Topbar";
import CustomModal from "../../components/Modal/Modal";
import { useHistory, Redirect } from "react-router-dom";
import { Routes } from "../../Routes/Routes";
import { useSelector } from "react-redux";
import Footer from "./.././Main/Footer/Footer";
import FooterArt from "./.././Main/Footer/FooterArt";
import itemInfo from "./../.././Assets/images/item-info.png";
import pdfIcon from "./../.././Assets/images/pdf.png";
import Review from "./rating.js";
import "./Connect.css";
import Web3 from "web3";
import { ethers } from "ethers";
import Web3Utils from "web3-utils";

import { SALE_CONTRACT_ABI, SALE_CONTRACT_ADDRESS } from "./contractInfo";

import {
  NFT_CONTRACT_ABI,
  MVN_CONTRACT_ADDRESS,
  BTRF_CONTRACT_ADDRESS,
} from "./NFTcontract";

const Connect = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [disableBuy, setDisableBuy] = useState('no');
  const [totalMovingOnPrice, setTotalMovingOnPrice] = useState(0);
  let [showPdf, setShowPdf] = useState("no");
  const state = useSelector((state) => state);
  const [checkConnect, setCheckConnect] = useState("no");

  const history = useHistory();

  useEffect(() => {
    handleViewPdfBtn();
    setShowModal(true);
    return () => {
      setShowModal(false);
    };
  }, []);

  //  Here is getBalance code in handleViewPdfBtn.

  const handleViewPdfBtn = async () => {
    if (state?.connection) {
      const web3 = new Web3(Web3.givenProvider);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const mvncontract = new ethers.Contract(
        MVN_CONTRACT_ADDRESS,
        NFT_CONTRACT_ABI,
        signer
      );

      const saleContract = new ethers.Contract(
        SALE_CONTRACT_ADDRESS,
        SALE_CONTRACT_ABI,
        signer
      );
      const id = await web3.eth.net.getId();
      if(id === 4){
      const mvnPrice = await saleContract.getMvnPrice();
      //const mvnPrice = 100;
      console.log('mvnPrice is ', mvnPrice);
      const mvnP = Web3Utils.hexToNumber(mvnPrice);
      const mvnFinalPrice = Web3Utils.fromWei(`${mvnP}`, "ether");
      setTotalMovingOnPrice(mvnFinalPrice);
      const address = await web3.eth.getAccounts();
      const movOn = await mvncontract.balanceOf(address[0]);
      let movBalance = parseInt(movOn._hex, 16);
      console.log(movBalance);
      movBalance >= 1 ? setShowPdf("yes") : setShowPdf("no");
      movBalance >= 1 ? setDisableBuy("yes") : setDisableBuy("no");
    }else{
      alert('please connect with proper network');
    }
  }
  };
  const checkFetchedPrice = () => {
    setSpinner(true);
    if (totalMovingOnPrice > 0) {
      handleBuyBtn();
    } else {
      setSpinner(false);
      alert(
        "Please Connect your Wallet first OR Check your internet connection"
      );
    }
  };
  const handleBuyBtn = async () => {
    
    if (!state?.connection) {
      setCheckConnect("noConnect");
      setSpinner(false);
    } else {
      setCheckConnect("connected");
      const web3 = new Web3(Web3.givenProvider);
      const id = await web3.eth.net.getId();
      if(id === 4){

      if (state?.userBalance > totalMovingOnPrice) {
        const web3 = new Web3(Web3.givenProvider);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          SALE_CONTRACT_ADDRESS,
          SALE_CONTRACT_ABI,
          signer
        );

        // make this value dynamic
        let bookvalue = totalMovingOnPrice;
        let weiamount = Web3.utils.toWei(bookvalue.toString(), "ether");

        const accounts = await web3.eth.getAccounts();

        
          try{
            const transaction = await contract.buyMvn(accounts[0], { value: weiamount });
            if(transaction){
              // console.log(tx);
               const y= await transaction.wait();
                
                if(y){
                  alert("Transaction is done, NFT is saved in your Wallet");
                 setSpinner(false);
                 //showBookPdf();
                 window.location.reload();
                }
              }
          }catch(err){
            console.log('err is ', err);
            setSpinner(false);
            alert("Transaction failed");
           
          }

        // return (alert('Write the logic for buy'));
      } else {
        setSpinner(false);
        alert("Your balance is less.");
      }
    }else{
      setSpinner(false);
      alert('Please connect with proper network');
    }
  }
  };
  const showBookPdf = () => {
    window.open(
      "https://booknft.mypinata.cloud/ipfs/Qmb5YuBxs5U5m6jtQqz5JRRy4wKFdQS2K4N238zH6ve2YU",
      "_blank"
    );
  };

  const closePop = () => {
    setCheckConnect("connected");
  };
  /* if (!state?.connection) {
        return <Redirect exact to={`/${Routes.main}`} />
    }

    else */
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
          <img src={itemInfo} className="mr-3" width="100%" />
        </Col>
        <Col className="textDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
          <h1 className="Book-heading font-36px">What's Inside The Book.</h1>
          <h1 className="Book-Chapters font-36px">Chapters Covered</h1>
          <p className="font-20px text-justify">
            With the help of his friends and family members, he initially begins
            to successfully climb the rungs of the ladder to this new life of
            achievement and prosperity; however, his life’s trials, tribulations
            and extreme self-doubt intervene, sending Justin into a whirlwind of
            confusion, insecurity and, ultimately, a relapse into despair.
          </p>
          <Row>
            <Review />
            <p className="reviewCount">30 Reviews</p>
          </Row>
          <h3 className="font-20px">{totalMovingOnPrice} ETH($ 7.99)</h3>
          <button className={`buyBtn ${spinner ? 'inLoading' : ''} ${disableBuy === 'yes' ? 'hide-buy' : ''}`} onClick={checkFetchedPrice} disabled={(spinner || disableBuy === 'yes') ? true : false}>
          {spinner ? "Transaction in progress..." : "buy now"}
          </button>
          <button
            className={`buyBtn view-pdf ${
              showPdf === "no" ? "noShow-pdf" : ""
            }`}
            onClick={showBookPdf}
          >
            <img
              src={pdfIcon}
              width="15px"
              height="15px"
              style={{ marginTop: "-4px", marginRight: "5px" }}
            />{" "}
            View PDF
          </button>
        </Col>
      </Row>
      <FooterArt />
      <Footer />
      {checkConnect === "noConnect" ? (
        <CustomModal
          show={showModal}
          closePop={closePop}
          handleClose={() => {
            setShowModal(false);
            history.replace(`/${Routes.connect}`);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Connect;
