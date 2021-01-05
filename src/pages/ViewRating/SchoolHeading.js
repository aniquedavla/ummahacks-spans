import React from 'react';
import {Grid, Button, Container, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import star from "./images/star.png";

const useStyles = makeStyles({
    root:{
        padding:".5rem 0 .5rem 0",
    },
    totalRating: {
        padding:".2rem 0 .2rem 0",
    },
    rateButton:{
        paddingTop:"1rem",
    },
});
export default function SchoolHeading(props){
    let {schoolName, numberOfReviews} = props;
    const classes = useStyles();
    return (
        <>
            <Grid container
                className={classes.root}
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                width="auto"
            >
                <Grid container item md={8}
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item md={8}><Typography variant="h3">{schoolName}</Typography></Grid>
                    <Grid item md={8} className={classes.totalRating}>
                        <Typography variant="h5"><img src={star} style={{ height: "30px" }}/>({numberOfReviews} Reviews)</Typography>
                    </Grid>
                </Grid>
                <Grid item md={4} className={classes.rateButton}>
                    <Link to={`/rate`}><Button variant="contained" color="primary">Rate this School</Button></Link>
                </Grid>                
            </Grid>
           
        </>
    );
}