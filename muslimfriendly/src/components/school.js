import React, { Component, useState, useEffect } from "react";
import SchoolImage from "../images/school.png";
import "./school.css";
import { Row, Col } from "react-bootstrap";
import star from "../images/star.png";
import sajadah from "../images/sajadah.png";
import hijab from "../images/hijab.png";
import wudu from "../images/wudu.png";
import halal from "../images/halal.png";
import beard from "../images/beard.png";
import cel from "../images/muslimcel.png";
import lead from "../images/leadership.png";
import mlead from "../images/woma.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Link, useParams, Redirect } from "react-router-dom";
import schoolData from "../data/schoolData.json";
import SchoolDataView from "./SchoolDataView";

export default function School(props) {
    return (
      <SchoolDataView {...props}></SchoolDataView>
    );
}