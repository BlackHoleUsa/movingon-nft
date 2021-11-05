import React from "react";
import { SectionContainer } from "components/SectionContainer/SectionContainer";
import { Row, Col } from "react-bootstrap";
import { Images } from "Assets/Images";
import { FlexRow } from "components/FlexRow/FlexRow";

const About = (props) => {
  return (
    <SectionContainer
      className="bg-white text-black"
      style={{ marginTop: "150px" }}
      id="about-section"
    >
      <Row className="m-0 p-0 mt-5">
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img
            alt=""
            width="100%"
            src={Images.author}
            style={{ marginTop: "10%" }}
          />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-4 mt-3">
          <FlexRow className="align-items-center justify-content-start mb-2 w-100">
            <span className="font-14px text-blueShade mr-3">ABOUT AUTHOR</span>
            <img alt="" src={Images.pat} />
          </FlexRow>

          <span className="font-36px mb-2 d-block">J.L. Caban</span>

          <span className="font-14px mb-3 d-block text-justify">
            JL Caban was born in the year of Elton John’s ‘Rocket Man’ (1972) to
            Joe and Lisa in a Mount Sinai hospital room in New York City and
            grew up in the boro of the Bronx. True to the iconic song, he has
            always found himself reaching for the stars.
          </span>

          <span className="font-14px d-block text-justify">
            Having a keen interest in the literary arts, he found himself
            reading the works of classic novelists such as Hemingway, Wharton,
            Bronte and the like and dreamed of one day writing his own page
            turner. He attended Lehman College where he received a Bachelor of
            Arts in Psychology, with a minor in English Literature, and a Master
            of Science in Education; in addition to becoming a Brother of Kappa
            Alpha Psi Fraternity, Incorporated.
          </span>
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default About;
