import React, { Component } from "react";
import SchoolImage from "../images/school.png";
import "./school.css";
import { Row, Col } from "react-bootstrap";
import star from "../images/star.png";
import sajadah from "../images/sajadah.png";
import hijab from "../images/hijab.png";
import wudu from "../images/wudu.png";
import halal from "../images/halal.png";
import beard from "../images/beard.png";
import cel from "../images/muslimcel.png";
import lead from "../images/leadership.png";
import mlead from "../images/woma.png";

class School extends Component {
  render() {
    return (
      <div>
        <img src={SchoolImage} style={{ height: "400px" }} />
        <Row>
          <Col>
            <h1>San Jose State University</h1>
            <Row style={{ paddingLeft: "30px" }}>
              <img src={star} style={{ height: "30px" }} />
              <h3> 4.7 out of 5 (35 Reviews)</h3>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <br />

        <Row>
          <h3 style={{ paddingLeft: "30px" }}>Amenities</h3>
          <Col>
            <br />
            <br />
            <Row>
              <img src={sajadah} style={{ height: "30px" }} />{" "}
              <h3> Prayer Space</h3>
            </Row>
            <Row>
              <img src={wudu} style={{ height: "30px" }} /> <h3> Wudu Area</h3>
            </Row>
            <Row>
              <img src={halal} style={{ height: "30px" }} />{" "}
              <h3>Halal Options</h3>
            </Row>
            <Row>
              <img src={hijab} style={{ height: "30px" }} />{" "}
              <h3>Hijab Friendly</h3>
            </Row>
          </Col>
          <Col>
            <br />
            <br />
            <Row>
              <img src={beard} style={{ height: "30px" }} />
              {"  "}
              <h3>
                {" "}
                <span></span>Beard Friendly
              </h3>
            </Row>
            <Row>
              <img src={cel} style={{ height: "30px" }} />{" "}
              <h3>Muslim Celebrations</h3>
            </Row>
            <Row>
              <img src={lead} style={{ height: "30px" }} />{" "}
              <h3>Muslim Leadership</h3>
            </Row>
            <Row>
              <img src={mlead} style={{ height: "30px" }} />{" "}
              <h3>Muslim Woman Leadership</h3>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default School;
