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

import { SALE_CONTRACT_ABI, SALE_CONTRACT_ADDRESS } from "./contractInfo";
import {
  NFT_CONTRACT_ABI,
  MVN_CONTRACT_ADDRESS,
  BTRF_CONTRACT_ADDRESS,
} from "./NFTcontract";

const Connect2 = (props) => {
  const [showModal, setShowModal] = useState(false);
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

      const btrfcontract = new ethers.Contract(
        BTRF_CONTRACT_ADDRESS,
        NFT_CONTRACT_ABI,
        signer
      );

      const butterFly = await btrfcontract.balanceOf(state?.address[0]);
      let bterBalance = parseInt(butterFly._hex, 16);
      bterBalance >= 1 ? setShowPdf("yes") : setShowPdf("no");
    }
  };
  const handleBuyBtn = async () => {
    if (!state?.connection) {
      setCheckConnect("noConnect");
    } else {
      setCheckConnect("connected");
      if (state?.userBalance > parseFloat(0.24)) {
        const web3 = new Web3(Web3.givenProvider);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          SALE_CONTRACT_ADDRESS,
          SALE_CONTRACT_ABI,
          signer
        );

        let bookvalue = 0.24;
        let weiamount = Web3.utils.toWei(bookvalue.toString(), "ether");

        const accounts = await web3.eth.getAccounts();

        console.log(await web3.eth.getBalance(accounts[0]));

        const transaction = await contract
          .buyMvn(accounts[0], { value: weiamount })
          .then(function (txHash) {
            console.log("Transaction sent");
            alert("Transaction is done, NFT is saved in your Wallet");
            showBookPdf();
          })
          .catch
          //   alert("Transaction failed")
          ();

        // return (alert('Write the logic for buy'));
      } else {
        alert("Your balance is less.");
      }
    }
  };
  const showBookPdf = () => {
    window.open(
      "https://gateway.pinata.cloud/ipfs/QmRr4vDiphdxREKt8s529tyub1HyNZWX454bChYiyonxad",
      "_blank"
    );
  };
  const closePop = () => {
    setCheckConnect("connected");
  };
  /* if (!state?.connection) {
        return <Redirect exact to={`/${Routes.main}`} />
    }

    else */ {
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
            <p className="font-20px">
              The television in the hospital room was turned on, but silent.
              Someone had muted the volume in a sort of valetudinarian effort
              because it was too loud, and it might have disturbed him although,
              if anyone had bothered to ask Felix what he would have liked, he
              would just as soon raise the volume to the maximum,
            </p>
            <Row>
              <Review />
              <p className="reviewCount">30 Reviews</p>
            </Row>
            <h3 className="font-20px">0.24 ETH($ 125.255)</h3>
            <button className="buyBtn" onClick={handleBuyBtn}>
              buy now
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
  }
};

export default Connect2;
