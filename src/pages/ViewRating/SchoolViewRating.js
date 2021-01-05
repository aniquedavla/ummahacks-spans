import React from 'react';
//import "./school.css";
import { Row, Col } from "react-bootstrap";
import sajadah from "./images/sajadah.png";
import hijab from "./images/hijab.png";
import wudu from "./images/wudu.png";
import halal from "./images/halal.png";
import beard from "./images/beard.png";
import cel from "./images/muslimcel.png";
import lead from "./images/leadership.png";
import mlead from "./images/woma.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Link, useParams, Redirect } from "react-router-dom";
import SchoolHeading from "./SchoolHeading";
import { Container } from '@material-ui/core';
import RatingColumn from './RatingColumn';
import Coments from "./Coments";

export default function SchoolViewRating(props){
    let schoolName = "San Jose State University";
    const amenityFields = [
      {
        label:"Prayer Space",
        id:"Has Prayer Space?",
      },
      {
        label:"Wudu Area",
        id:"Has washing facility(wudu area)",
        
      },
      {
        label: "On-campus halal food",
        id: "Has On-campus halal food options"
      }
    ];
    return (
      <Container>
        <SchoolHeading schoolName="San Jose State University" numberOfReviews={35}></SchoolHeading>
        <RatingColumn></RatingColumn>
        <Coments></Coments>
      </Container>
    );
} 