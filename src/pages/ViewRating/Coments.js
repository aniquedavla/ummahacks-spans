import React from 'react';
import { Row, Col } from "react-bootstrap";
import star from "./images/star.png";

export default function Coments(){
    return(
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
    );
}