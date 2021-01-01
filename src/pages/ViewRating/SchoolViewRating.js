import React from 'react';
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
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Link, useParams, Redirect } from "react-router-dom";

export default function SchoolViewRating(props){
    let {schoolData} = props;
    let schoolName = schoolData[0].schoolName;
    return (
        <div>
        <img src={SchoolImage} style={{ height: "400px" }} />
        <br />
        <br />
        <Row>
        <Col>
          <h1>{schoolName}</h1>
          <Row style={{ paddingLeft: "30px" }}>
            <img src={star} style={{ height: "30px" }} />
            <h3> 4.7 out of 5 (35 Reviews)</h3>
          </Row>
        </Col>
          <Col>
            <Link to={`/rate/${schoolName}`}>
              <Button>Rate this School</Button>
            </Link>
          </Col>
        </Row>
        <br />
        <br />

        <Row>
          <h3 style={{ paddingLeft: "30px" }}>Amenities</h3>
          <br />
          <br />
          <Col>
            <br />
            <br />
            <Row>
              <img src={sajadah} style={{ height: "30px" }} />{" "}
              <h3> Prayer Space</h3>
              <br />
            </Row>
            <Row>
              <img src={wudu} style={{ height: "30px" }} /> <h3> Wudu Area</h3>
              <br />
            </Row>
            <Row>
              <img src={halal} style={{ height: "30px" }} />{" "}
              <strike>
                <h3>Halal Options</h3>
              </strike>
              <br />
            </Row>
            <Row>
              <img src={hijab} style={{ height: "30px" }} />{" "}
              <h3>Hijab Friendly</h3>
              <br />
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
              <br />
            </Row>
            <Row>
              <img src={cel} style={{ height: "30px" }} />{" "}
              <strike>
                <h3>Muslim Celebrations</h3>{" "}
              </strike>
              <br />
            </Row>
            <Row>
              <img src={lead} style={{ height: "30px" }} />{" "}
              <h3>Muslim Leadership</h3>
              <br />
            </Row>
            <Row>
              <img src={mlead} style={{ height: "30px" }} />{" "}
              <h3>Muslim Woman Leadership</h3>
              <br />
            </Row>
          </Col>
        </Row>

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

        <Row style={{ paddingLeft: "150px" }}>
          {" "}
          <div className="comment">
            <h3 style={{ textAlign: "left" }}>Anonymous</h3>
            <Row>
              <img src={star} style={{ height: "30px", paddingLeft: "10px" }} />
              <h3 style={{ textAlign: "left" }}>4/5 Stars</h3>
            </Row>
            <br />
            <h3 style={{ textAlign: "left", fontSize: "20px" }}>
              SJSU has an amazing prayer space. I have never seen a college
              campus have a wudu area like the one you would see at a mosque.
              They have a dedicated wudu space in their meditation room. One can
              sit down and make wudu like the masjid(I don't even have that at
              my house!). The prayer space is small and the school does not have
              halal food options on campus.
            </h3>
          </div>
        </Row>
      </div>
    );
} 