import React from 'react';
import {Paper, Grid, Avatar, Typography} from "@material-ui/core"
import star from "./images/star.png";

export default function Comments(props){
  let comments = props.data;
  let commentsDivs = []; 
  comments.map((comment)=>{
    commentsDivs.push(
      <Paper style={{ padding: "20px 10px", marginTop: 25 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {/* <Avatar alt="Remy Sharp" src={star} /> */}
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
      <>
      <Typography variant="h5" align="left">COMMENTS</Typography>
      {commentsDivs}
      </>
    );
}