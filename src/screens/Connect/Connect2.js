import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Topbar from "../../components/Topbar/Topbar";
import CustomModal from "../../components/Modal/Modal";
import { useHistory, Redirect } from "react-router-dom";
import { Routes } from "../../Routes/Routes";
import { useSelector } from "react-redux";
import Footer from "./.././Main/Footer/Footer";
import FooterArt from "./.././Main/Footer/FooterArt";
import itemInfo2 from "./../.././Assets/images/item-info2.png";
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

const Connect2 = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  let [showPdf, setShowPdf] = useState("no");
  const [disableBuy, setDisableBuy] = useState('no');
  const state = useSelector((state) => state);
  const [checkConnect, setCheckConnect] = useState("no");
  const [totalButterflyPrice, setTotalButterflyPrice] = useState(0);
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

      const btrfcontract = new ethers.Contract(
        BTRF_CONTRACT_ADDRESS,
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
      const btrfPrice = await saleContract.btrfPrice();
      const btrfP = Web3Utils.hexToNumber(btrfPrice);
      const btrfFinalPrice = Web3Utils.fromWei(`${btrfP}`, "ether");
      setTotalButterflyPrice(btrfFinalPrice);
      const address = await web3.eth.getAccounts();
      const butterFly = await btrfcontract.balanceOf(address[0]);
      let bterBalance = parseInt(butterFly._hex, 16);
      console.log(bterBalance);
      bterBalance >= 1 ? setShowPdf("yes") : setShowPdf("no");
      bterBalance >= 1 ? setDisableBuy("yes") : setDisableBuy("no");
    }else{
      alert('Please connect with proper network');
    }
  }
  };
  const checkFetchedPrice = () => {
    setSpinner(true);
    if (totalButterflyPrice > 0) {
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
      console.log(totalButterflyPrice);
      if (state?.userBalance > totalButterflyPrice) {
        const web3 = new Web3(Web3.givenProvider);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          SALE_CONTRACT_ADDRESS,
          SALE_CONTRACT_ABI,
          signer
        );

        // make this value dynamic
        let bookvalue = totalButterflyPrice;
        let weiamount = Web3.utils.toWei(bookvalue.toString(), "ether");

        const accounts = await web3.eth.getAccounts();

        console.log(await web3.eth.getBalance(accounts[0]));
        try{
          const transaction = await contract.buyBtrf(accounts[0], { value: weiamount });
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
      "https://booknft.mypinata.cloud/ipfs/QmRr4vDiphdxREKt8s529tyub1HyNZWX454bChYiyonxad",
      "_blank"
    );
  };
  const closePop = () => {
    setCheckConnect("connected");
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
          <img src={itemInfo2} className="mr-3" width="100%" />
        </Col>
        <Col className="textDiv" xs={12} sm={12} md={12} lg={6} xl={6}>
          <h1 className="Book-heading font-36px">What's Inside The Book.</h1>
          <h1 className="Book-Chapters font-36px">Chapters Covered</h1>
          <p className="font-14px text-justify">
            ‘Butterflies in Production; Five Short Stories,’ is the second
            novella penned by J.L. Caban, which pulls characters from its
            predecessor, ‘Moving On,’ the coming of age story of a young man who
            is attempting to escape a world of drugs and alcohol; this work,
            ‘Butterflies in Production,’ now draws attention to some of the
            moral and social issues in which these new characters are dealing;
            issues such as biracial relationships and the prejudices that come
            with them; growing up in an inner city, having no choice but to deal
            in narcotics to put food on the table; being raised in an abusive
            home; and, finally, the stresses faced by women in a male dominated
            occupation. Take a trip into their convoluted worlds and witness how
            these protagonists struggle to find their way through the darkness.
          </p>
          <Row>
            <Review />
            <p className="reviewCount">30 Reviews</p>
          </Row>
          <h3 className="font-20px">{totalButterflyPrice} ETH($ 9.99)</h3>
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

export default Connect2;
