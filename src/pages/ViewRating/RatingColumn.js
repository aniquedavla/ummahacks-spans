import React from 'react';
import { Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
export default function RatingColumn(){
    return (
        <>
        <Row>
          <br />
          <br />

          <h3 style={{ paddingLeft: "30px" }}>Reviews</h3>
          <br />
          <br />

          <Col>
            <br />
            <br />
            <Row>
              <h3>Prayer Space</h3>
            </Row>
            <Row>
              <ProgressBar now={88} label={`88%`} style={{ width: "300px" }} />
            </Row>
            <br />
            <br />
            <Row>
              <h3>Wudu Area</h3>
            </Row>
            <Row>
              <ProgressBar now={74} label={`74%`} style={{ width: "300px" }} />
            </Row>
          </Col>
          <Col>
            <br />
            <br />
            <Row>
              <h3>Clothing Flexibility</h3>
            </Row>
            <Row>
              <ProgressBar now={60} label={`60%`} style={{ width: "300px" }} />
            </Row>
            <br />
            <br />
            <Row>
              <h3>Muslim Leadership</h3>
            </Row>
            <Row>
              <ProgressBar now={30} label={`30%`} style={{ width: "300px" }} />
            </Row>
          </Col>
          <br />
          <br />
        </Row>
        <br />
        <br />
        </>
    );
}