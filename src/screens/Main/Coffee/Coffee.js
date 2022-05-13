import React from "react";
import { SectionContainer } from "components/SectionContainer/SectionContainer";
import { Row, Col } from "react-bootstrap";
import { Images } from "Assets/Images";
import { FlexRow } from "components/FlexRow/FlexRow";

const Coffee = (props) => {
  return (
    <SectionContainer
      className="bg-white text-black"
      style={{ marginTop: "150px" }}
      id="coffee-section"
    >
      <Row className="m-0 p-0 mt-5">
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img
            alt=""
            width="100%"
            src={Images.coffee}
            style={{ marginTop: "10%" }}
          />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-4 mt-3">
          {/* <FlexRow className="align-items-center justify-content-start mb-2 w-100">
            <span className="font-14px text-blueShade mr-3">ABOUT AUTHOR</span>
            <img alt="" src={Images.pat} />
          </FlexRow> */}

          <span className="font-36px mb-2 mt-4 d-block">Coffee Table</span>

          <span className="font-14px mb-3 d-block text-justify">
          {/* </span>

          <span className="font-14px d-block text-justify"> */}
            What a wonderfully written piece; a brilliant escape from the mundane… breaking from the chains of 
            conformity, this ‘Book of Darku’ captures one’s heart and mind from the very first page until its last.
             I was instantly transported into a world of spiritual and mental unwinding; between Ms. Dowling’s
              innovative take on the Haiku and her breath taking original photography, my only wish upon its
               conclusion was the want for more! I thank you, Dar Dowling, for this beautifully presented, and
                singularly necessary, publication; for, in this convoluted world of ours, we could all use a little
                 more artistic enlightenment. I highly recommend this work to any and all!
          </span>
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default Coffee;
