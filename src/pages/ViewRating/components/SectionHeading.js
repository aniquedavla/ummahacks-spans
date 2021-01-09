import React from 'react';
import {Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  sectionHeading: {
    padding: ".5rem",
    fontWeight: 450
  }
});

export default function SectionHeading(props){
    let classes = styles();
    let title = props.title;
    return (
        <Typography className={classes.sectionHeading} variant="h5" align="left">{title}</Typography>
    );
}