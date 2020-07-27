import React, { Component } from "react";
import backgroundImage from "../../images/background.png";
import "./homepage.css";
import ReactSearchBox from "react-search-box";
import unity from "../../images/unit.png";

class HomePage extends Component {
  data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
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
          <div className="MissionState">
            Muslim Friendly Mission <br />
            Statement
            <img src={unity} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
