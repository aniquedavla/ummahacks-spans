import React from 'react';
//import "./school.css";
import { Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Link, useParams, Redirect } from "react-router-dom";
import SchoolHeading from "./SchoolHeading";
import { Container } from '@material-ui/core';
import RatingColumn from './RatingColumn';
import Coments from "./Coments";
import TwoColumnData from './TwoColumnData';
import {amenityFields, ratingFields} from "./Fields";
import {reportData} from "./reportData";
export default function SchoolViewRating(props){
    let schoolName = "San Jose State University";
    return (
      <Container>
        <SchoolHeading schoolName="San Jose State University" numberOfReviews={35}></SchoolHeading>
        <TwoColumnData columnTitle="Inclusive Amenities" fields={amenityFields} data={reportData.fields}></TwoColumnData>
        <RatingColumn></RatingColumn>
        <Coments></Coments>
      </Container>
    );
}