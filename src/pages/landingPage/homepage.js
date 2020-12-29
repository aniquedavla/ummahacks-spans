import React, { Component } from "react";
import backgroundImage from "../../images/background.png";
import "./homepage.css";
import ReactSearchBox from "react-search-box";
import unity from "../../images/unit.png";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import {Container, Grid, Button} from '@material-ui/core/';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  heading2: {
    align: "left",
    font: "Light 99px/149px Kohinoor Telugu",
    fontSize: '3rem',
    fontWeight: 400,
    letterSpacing: '.05em',
    paddingLeft: '4.5rem',
    paddingTop: '2rem',
    color: '#000000',
    opacity: 1,
  },
  body1: {
    font: "Light 99px/149px Kohinoor Telugu",
    fontSize: '2rem',
    fontWeight: 10,
    letterSpacing: '.05em',
    padding: '0 2rem 2rem 4.2rem',
  },
  buttonGrid:{
    paddingTop:"4rem"
  },
  disabledText:{
    //backgroundColor:"#FFFFFF",
    color:"#FFFFFF",
    fontFamily:"'Roboto',sans-serif",
    display:"inline-block",
    boxSizing: "border-box",
    fontWeight:400,
    textTransform:"uppercase",
    borderRadius: "0.15em",
  },
  buttonStyle:{
       display:"inline-block",
       padding:"0.7em 1.4em",
       margin:"0 0.3em 0.3em 0",
       borderRadius: "0.15em",
       boxSizing: "border-box",
       fontFamily:"'Roboto',sans-serif",
       textTransform:"uppercase",
       fontWeight:400,
       color:"#FFFFFF",
       backgroundColor:"#3369ff",
       boxShadow:"inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17)",
       textAlign:'center',
       position: 'relative',
  },
});

export default function HomePage(){
    const classes = useStyles();
    return (
      <>
        <Container fixed>
            <div
              classname="Banner"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "35rem",
                width: "auto",
                backgroundSize: "cover",
              }}
            >
              <Typography variant="h1" component="h2" className="headingT">
                Find out how muslim-friendly your college is
              </Typography>
              <Grid container className={classes.buttonGrid} spacing={4} justify="center">
                <Grid item>
                  <Typography variant="contained" className={classes.disabledText}>
                    View a rating <br/>(Coming soon!)
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.buttonStyle} href="/rate">
                  Rate a school
                  </Button>
                </Grid>
              </Grid>
            </div>
        </Container>
        <Grid container>
            <Grid item md={6}>
              <Typography className={classes.heading2} align="left" gutterBottom>
                Muslim Friendly Mission Statement
              </Typography>
              <Typography className={classes.body1} align="left">
                Muslim-friendly is a platform that allows Muslims to voice
                opinions about the "muslim-friendliness" of their colleges. The
                college reviews are intentioned to help incoming freshmen make
                informed decisions about their choice of college by providing
                them insight into the place's culture. Ratings for each college
                are calculated holistically; the presence--as well as the
                quality--of facilities such as prayer rooms and wudu areas, in
                addition to accommodations such as halal food options, are
                considered.
              </Typography>
          </Grid>
          <Grid item className="unit" md={6}>
            {" "}
            <img src={unity} style={{ width: "80%" }} /> 
          </Grid>
        </Grid>
    </>
    );
}
