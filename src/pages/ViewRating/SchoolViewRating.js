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
import { makeStyles } from '@material-ui/core/styles';

let styles = makeStyles({
  sectionStyle: {
    padding: "5rem",
  }
})
export default function SchoolViewRating(props){
    let classes = styles();
    let schoolName = "San Jose State University";
    return (
      <Container>
        <SchoolHeading className={classes.sectionStyle} schoolName="San Jose State University" numberOfReviews={35}></SchoolHeading>
        <ColumnData className={classes.sectionStyle} columnTitle="INCLUSIVE AMENITIES" fields={amenityFields} 
          data={reportData.fields} 
          columnType="amenities">
        </ColumnData>
        <ColumnData  className={classes.sectionStyle} columnTitle="RATINGS" fields={ratingFields} 
          data={reportData.fields} 
          columnType="rating">
        </ColumnData>
        <ColumnData  className={classes.sectionStyle} columnTitle="RELEVANT CLUBS AND ORGANIZATIONS"
          fields={reportData.fields["Select all Muslim Student orgs present on this campus"]}
          data={reportData.fields} 
          columnType="clubs">
        </ColumnData>
        <Comments className={classes.sectionStyle} data={reportData.comments}></Comments>
      </Container>
    );
}