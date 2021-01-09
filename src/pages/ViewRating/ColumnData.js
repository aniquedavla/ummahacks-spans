import React from 'react';
import {Grid, Button, Container, Typography, Box, Paper} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from "./components/SectionHeading";

const styles = makeStyles({
  root:{
    padding: "2rem",
    marginTop: 25,
    backgroundColor: "#FFF"
  },
  gridItem: {
    padding: ".2rem",
  }
});
export default function ColumnData(props){
    let classes = styles();
    let columnTitle = props.columnTitle;
    let fields = props.fields;
    let data = props.data;
    let columnType = props.columnType;
    let fieldItems = [];

    fields.map((field)=>{
      console.log(field.id, data[field.id]);
      let showField = data[field.id];
      if(columnType === "amenities"){
        showField &&
        fieldItems.push(
          <Grid className={classes.gridItem} item lg={4} md={4} xs={12}>
            <Typography variant="h5"><img src={field.img} style={{ height: "30px" }} /> {field.label}</Typography>
          </Grid>
        );
      } else if(columnType === "rating"){
        showField &&
        fieldItems.push(
          <Grid className={classes.gridItem} item lg={6} md={6} xs={12}>
            <Typography variant="h5">{field.label}</Typography>
            <Rating value={showField} readOnly></Rating>
          </Grid>
        );
      } else if(columnType === "clubs"){
        fieldItems.push(
          <Grid className={classes.gridItem} item lg={6} md={6} xs={12}>
            <Typography variant="h5">{field}</Typography>
          </Grid>
        );
      }
      
    })
    return(
    <Paper className={classes.root}>
          <SectionHeading title={columnTitle}></SectionHeading>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {fieldItems}            
          </Grid>
    </Paper>
    );
}