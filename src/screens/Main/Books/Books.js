import React from "react";
import { SectionContainer } from "components/SectionContainer/SectionContainer";
import { Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Routes } from "Routes/Routes";
import { Images } from "Assets/Images";
import { FlexRow } from "components/FlexRow/FlexRow";
import book1 from "./../../../Assets/images/book1.png";
import book2 from "./../../../Assets/images/book2.png";
import arrow from "./../../../Assets/images/arrow-img.png";
import "./books.css";

const Books = (props) => {
  const goToLink = (name) => {
    if (name === "movingOn") {
      // replace link with client specific link
      window.open(
        "https://www.amazon.com/dp/B08MHMP2M7/ref=cm_sw_r_cp_api_glt_fabc_6GF5BAGVHZSZ9YYR0ZB9",
        "_blank"
      );
    } else {
      window.open(
        "https://www.amazon.com/Butterflies-Production-Five-Short-Stories-ebook/dp/B09F14SLY5/ref=mp_s_a_1_1?crid=XH2PSRURSQI1&dchild=1&keywords=butterflies+in+production+jl+caban&qid=1632925691&sprefix=butterflies+in+Prod&sr=8-1",
        "_blank"
      );
    }
  };
  return (
    <SectionContainer
      className="bg-white text-black books-class"
      id="book-section"
    >
      <Row className="m-0 p-0 mt-3">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <h3 className="books-h5 left-book"> “Butterflies in Production” </h3>
          <div className="book-des left-book-des">
            <p>
              ‘Butterflies in Production; Five Short Stories,’ is the second
              novella penned by J.L. Caban, which pulls characters from its
              predecessor, ‘Moving On,’ the coming of age story of a young man
              who is attempting to escape a world of drugs and alcohol; this
              work, ‘Butterflies in Production,’ now draws attention to some of
              the moral and social issues in which these new characters are
              dealing; issues such as biracial relationships and the prejudices
              that come with them; growing up in an inner city, having no choice
              but to deal in narcotics to put food on the table; being raised in
              an abusive home; and, finally, the stresses faced by women in a
              male dominated occupation. Take a trip into their convoluted
              worlds and witness how these protagonists struggle to find their
              way through the darkness, in search of the proverbial light at the
              end of the tunnel.
            </p>
          </div>
          <img alt="" width="100%" src={book2} style={{ marginTop: "-14%" }} />
          <div className="book-buy-links">
            <spam className="book-name">Butterflies in Production</spam>
            <div className="line left-line"></div>
            <spam
              className="book-name amazon-link"
              onClick={() => goToLink("butterflyInProduction")}
            >
              Buy book on Amazon <img alt="" width="10px" src={arrow} />
            </spam>
            <Link to={`/${Routes.butterflies}`} style={{ color: "black" }}>
              <spam className="book-name-right">
                Buy Book NFT
                <img alt="" width="10px" src={arrow} />
              </spam>
            </Link>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className="px-4 movinOn-buy"
        >
          <h3 className="books-h5 right-book"> “Moving On” </h3>
          <div className="book-des right-book-des">
            <p style={{paddingBottom: '10px'}}>
              Moving On is a quintessential coming of age story that takes place
              in the early 1990s, in which an eighteen year old young man named
              Justin breaks free from a world of drugs and alcohol and attempts
              to make a better life for himself.
            </p>
            <p>
              With the help of his friends and family members, he initially
              begins to successfully climb the rungs of the ladder to this new
              life of achievement and prosperity; however, his life’s trials,
              tribulations and extreme self-doubt intervene, sending Justin into
              a whirlwind of confusion, insecurity and, ultimately, a relapse
              into despair.
            </p>
          </div>
          <img
            alt=""
            width="100%"
            src={book1}
            style={{ marginTop: "-11.5%" }}
          />
          <div
            className="book-buy-links right-links"
            style={{marginTop: "-16%" }}
          >
            <spam className="book-name-rightSection">Moving On</spam>
            <div className="line"></div>
            <spam
              className="book-name amazon-link"
              onClick={() => goToLink("movingOn")}
            >
              Buy book on Amazon <img alt="" width="10px" src={arrow} />
            </spam>
            <Link to={`/${Routes.connect}`} style={{ color: "black" }}>
              <spam className="book-name-right">
                Buy Book NFT <img alt="" width="10px" src={arrow} />
              </spam>
            </Link>
          </div>
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default Books;
