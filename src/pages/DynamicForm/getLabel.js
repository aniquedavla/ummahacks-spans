import React from 'react';
import {InputLabel, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme)=>({
    root: {
        textAlign: "left",
    }
}))
export default function LabelDescription({label, description}){
    const classes = styles();
    return (
    <InputLabel className={classes.root}>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
    </InputLabel>);
}