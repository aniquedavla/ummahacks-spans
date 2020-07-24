import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Moon from "../images/moon.png";
class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Moon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"  "}
          muslim friendly
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavBar;
