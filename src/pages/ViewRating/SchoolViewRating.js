import React, { useState, useEffect } from 'react';
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
});

const SCHOOLDATAENDPOINT = "https://app.fakejson.com/q/f4YiYpVB?token=GKX5KMwF5wlcC_0zvhveUQ";

export default function SchoolViewRating(props){
    let classes = styles();
    let [schoolData, setSchoolData] = useState();
    let {schoolName} = useParams();
    console.log(schoolData)

    useEffect( async ()=>{
      let schoolDataRespone = await fetch(SCHOOLDATAENDPOINT);
      let schoolDataJson = await schoolDataRespone.json();
      if(schoolDataJson) setSchoolData(schoolDataJson);
    }, [schoolName]);

    return (
      <>
      {schoolData &&
      <Container>
        <SchoolHeading className={classes.sectionStyle} schoolName={schoolName} numberOfReviews={35}></SchoolHeading>
        <ColumnData className={classes.sectionStyle} columnTitle="INCLUSIVE AMENITIES" 
          fields={amenityFields} 
          data={schoolData.fields} 
          columnType="amenities">
        </ColumnData>
        <ColumnData  className={classes.sectionStyle} columnTitle="RATINGS" 
          fields={ratingFields} 
          data={schoolData.fields} 
          columnType="rating">
        </ColumnData>
        <ColumnData  className={classes.sectionStyle} columnTitle="RELEVANT CLUBS AND ORGANIZATIONS"
          fields={schoolData.fields["Select all Muslim Student orgs present on this campus"]}
          data={schoolData.fields} 
          columnType="clubs">
        </ColumnData>
        <Comments className={classes.sectionStyle} data={reportData.comments}></Comments>
      </Container>
      } 
      {schoolData ? "" : <h5>Loading...</h5>}
      </>
    );
}