import React, { Component } from "react";
import SchoolImage from "../images/school.png";

class School extends Component {
  render() {
    return (
      <div>
        <div
          classname="Banner"
          style={{
            backgroundImage: `url(${SchoolImagee})`,
            height: "600px",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    );
  }
}

export default School;
