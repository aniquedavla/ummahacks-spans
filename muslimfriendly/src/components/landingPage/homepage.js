import React, { Component } from "react";
import backgroundImage from "../../images/background.png";
import "./homepage.css";
import ReactSearchBox from "react-search-box";
import unity from "../../images/unit.png";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class HomePage extends Component {
  data = [
    {
      key: "San",
      value: "San Jose State University",
    },
    {
      key: "San",
      value: "San Francisco University",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  render() {
    return (
      <div>
        <div
          classname="Banner"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            height: "600px",
            backgroundSize: "cover",
          }}
        >
          <div className="headingT">
            Find out how muslim-friendly your college is
          </div>
          <div className="SearchBar">
            <ReactSearchBox
              placeholder="Search"
              value=""
              data={this.data}
              callback={(record) => console.log(record)}
            />
            <br />
            <Link to="/school">
              <Button>Search</Button>{" "}
            </Link>
          </div>
        </div>
        <div>
          <Row>
            <Col>
              <div className="MissionState">
                Muslim Friendly Mission <br />
                Statement
              </div>
              <div className="mission">
                Muslim-friendly is a platform that allows Muslims to voice
                opinions about the "muslim-friendliness" of their colleges. The
                college reviews are intentioned to help incoming freshmen make
                informed decisions about their choice of college by providing
                them insight into the place's culture. Ratings for each college
                are calculated holistically; the presence--as well as the
                quality--of facilities such as prayer rooms and wudu areas, in
                addition to accommodations such as halal food options, are
                considered.
              </div>
            </Col>
            <Col className="unit">
              {" "}
              <img src={unity} style={{ width: "500px" }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
