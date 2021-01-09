import React from 'react';
import "./school.css";
import { Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Link, useParams, Redirect } from "react-router-dom";
import SchoolHeading from "./SchoolHeading";
import { Container } from '@material-ui/core';
import Comments from "./Comments";
import ColumnData from './ColumnData';
import {amenityFields, ratingFields} from "./Fields";
import {reportData} from "./reportData";
export default function SchoolViewRating(props){
    let schoolName = "San Jose State University";
    return (
      <Container>
        <SchoolHeading schoolName="San Jose State University" numberOfReviews={35}></SchoolHeading>
        <ColumnData columnTitle="INCLUSIVE AMENITIES" fields={amenityFields} 
          data={reportData.fields} 
          columnType="amenities">
        </ColumnData>
        <ColumnData columnTitle="RATINGS" fields={ratingFields} 
          data={reportData.fields} 
          columnType="rating">
        </ColumnData>
        <Comments data={reportData.comments}></Comments>
      </Container>
    );
}