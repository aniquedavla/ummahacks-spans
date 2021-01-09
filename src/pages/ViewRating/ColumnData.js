import React from 'react';
import {Grid, Button, Container, Typography, Box} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export default function ColumnData(props){
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
          <Grid item lg={4} md={4} xs={12}>
            <h3><img src={field.img} style={{ height: "30px" }} /> {field.label}</h3>
          </Grid>
        );
      } else if(columnType === "rating"){
        showField &&
        fieldItems.push(
          <Grid item lg={4} md={4} xs={12}>
            <h3>{field.label}</h3>
            <Rating value={showField} readOnly></Rating>
          </Grid>
        );
      }
      
    })
    return(
    <Box>
          <Typography variant="h5" align="left">{columnTitle}</Typography>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {fieldItems}            
          </Grid>
    </Box>
    );
}