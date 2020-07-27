import React, { Component } from "react";
import backgroundImage from "../../images/background.png";
import "./homepage.css";
import ReactSearchBox from "react-search-box";
import unity from "../../images/unit.png";
import { Row, Col } from "react-bootstrap";
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
