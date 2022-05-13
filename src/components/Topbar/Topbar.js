import React, { useEffect, useState } from "react";
import "./Topbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Images } from "Assets/Images";
import { Routes } from "Routes/Routes";
import { topBarContent } from "Assets/Data";
import { BiChevronDown } from "react-icons/bi";
import { Nav, Navbar } from "react-bootstrap";
import AmazonModal from "components/Modal/AmazonModel";
import { useDispatch, useSelector } from "react-redux";
import {
  connectMetaMask,
  checkAlreadyConnectedMetaMask,
} from "redux/thunk/thunk";
const Topbar = (props) => {
  // redux setups
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((state) => state);

  const [scroll, setScroll] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  // const [amazonLink, setAmazonLink] = useState("");
  let amazonLink;
  const clientAddress = "0x0a74C2C2EaEa604e7FF37B85f58231A64e14fA88"; //"0x0F7217FA0Ed45b019481F9E74b9c329245Afe84B";

  const { currentState, clickLink } = props;

  const connectToMetaMask = () => {
    dispatch(connectMetaMask());
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    const interval = setInterval(() => {
      dispatch(checkAlreadyConnectedMetaMask(state?.connection));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const listenToScroll = () => {
    let i = 0;

    if (window.pageYOffset > 118) {
      i = i + 1;
      if (i === 1) {
        setScroll(true);
      }
    } else {
      setScroll(false);
    }
  };

  if (location?.pathname === "/butterflies") {
    amazonLink =
      "https://www.amazon.com/Butterflies-Production-Five-Short-Stories-ebook/dp/B09F14SLY5/ref=mp_s_a_1_1?crid=XH2PSRURSQI1&dchild=1&keywords=butterflies+in+production+jl+caban&qid=1632925691&sprefix=butterflies+in+Prod&sr=8-1";
  } else if (location?.pathname === "/connect") {
    amazonLink =
      "https://www.amazon.com/dp/B08MHMP2M7/ref=cm_sw_r_cp_api_glt_fabc_6GF5BAGVHZSZ9YYR0ZB9";
  } else {
    amazonLink = "";
  }

  const goToLink = (index, link) => {
    if (
      (location?.pathname === "/butterflies" ||
        location?.pathname === "/connect") &&
      index === 3
    ) {
      // replace link with client specific link
      window.open(amazonLink, "_blank");
    } else {
      clickLink({ value: link.value.toLowerCase(), sectionId: link.sectionId });
    }
  };
  const goToHelp = () => {
    window.open(
      "https://booknft.mypinata.cloud/ipfs/QmNXsspxYRhtFNd2vUL4eHcUQ2cdPqgy4LhthzsNTHeKT2",
      "_blank"
    );
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`
            navbar navbar-expand-lg navbar-light fixed-top padding-topbar
            ${scroll || showMenu ? "bg-lightPrimary" : ""}
        `}
    >
      <NavLink to={`/${Routes.main}`}>
        <span
          className="text-uppercase font-28px text-black mr-4"
          style={{ fontStyle: "italic", fontFamily: "Oswald" }}
        >
          <img src={Images.logo} alt="" width="70px"/>
        </span>
      </NavLink>

      <Navbar.Toggle
        className={` ${scroll ? "bg-lightPurple" : "bg-whiteSmoke"} border-0`}
        onClick={() => setShowMenu(!showMenu)}
      />

      <Navbar.Collapse>
        <Nav className="navbar-nav ml-auto app-flex-column justify-content-center align-items-center">
          {location?.pathname === "/butterflies" ||
          location?.pathname === "/connect"
            ? null
            : topBarContent.map((link, i) => (
                <NavLink
                  to=""
                  onClick={() => goToLink(i, link)}
                  style={{ fontWeight: "bold" }}
                  className={` nav-item p-0 nav-links heading-font
                                ${
                                  currentState.toLowerCase() ===
                                  link.value.toLowerCase()
                                    ? "gradient-apply active-link"
                                    : "inactive-link"
                                } 
                                `}
                  key={i}
                >
                  <span
                    className={scroll || showMenu ? "text-black" : "text-black"}
                  >
                    
                    {link.sectionId === "buyNft-section" ? (
                      <Link
                        to={`/${Routes.connect}`}
                        style={{ color: "black" }}
                      >
                        {/* check to go on Dashboard */}
                      </Link>
                    ) : link.sectionId === "dashboard-section" &&
                      clientAddress === state?.address[0] ? (
                      <Link to={`/${Routes.dashboard}`}>
                        <spam style={{ color: "black" }}>Dashboard</spam>
                      </Link>
                    ) : link.sectionId === "help-section" ? (
                    <Link onClick={goToHelp}>
                      <spam style={{ color: "black" }}>Help</spam>
                    </Link>
                  ) : (
                    link.value
                  )}
                  </span>
                </NavLink>
              ))}
             

          <button
            className="connect-wallet pb-0 gradient-apply border-0 connect-meta-mask"
            onClick={connectToMetaMask}
            disabled={state?.connection}
          >
            {!state?.connection ? (
              <>Connect Wallet</>
            ) : (
              <div className="app-flex-row align-items-center text-white justify-content-center">
                <div
                  className="app-flex-column heading-font bg-blue align-items-center justify-content-center p-2 font-14px rounded-circle"
                  style={{ width: "32px", height: "32px" }}
                >
                  U
                </div>

                <span className="font-14px ml-3 heading-font">
                  {" "}
                  {state?.address[0]?.substr(0, 10)}{" "}
                </span>
              </div>
            )}
          </button>

          {/* state?.connection &&
                      <NavLink exact to={`/${Routes.connect}`} className={`connect-wallet text-white gradient-apply pb-0 w-auto pl-4 pr-3 margin-buy-btn heading-font
                          ${ (scroll || showMenu) ? 'inactive-link-dark' : 'inactive-link' } `} 
                        >
                          
                        BUY <BiChevronDown className="ml-1 font-18px" />
                      
                      </NavLink>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
