import React from 'react';
import {Paper, Grid, Avatar, Typography} from "@material-ui/core"
import star from "./images/star.png";
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import SectionHeading from './components/SectionHeading';

const styles = makeStyles({
  root:{
    padding: "2rem",
    marginTop: 25,
    backgroundColor: "#FFF"
  },
})
export default function Comments(props){
  let classes = styles();
  let comments = props.data;
  let commentsDivs = []; 
  comments.map((comment)=>{
    commentsDivs.push(
      <Paper style={{ padding: "20px 10px", marginTop: 25 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><PersonIcon></PersonIcon></Avatar>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Anonymous</h4>
            <p style={{ textAlign: "left" }}>
              {comment}
              {" "}
            </p>
            {/* <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p> */}
          </Grid>
        </Grid>
      </Paper>
    );
  })
    return(
      <Paper className={classes.root}>
        <SectionHeading title="COMMENTS"></SectionHeading>
        {commentsDivs}
      </Paper>
    );
}