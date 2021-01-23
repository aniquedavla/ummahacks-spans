import React from 'react';
import {InputLabel, Typography, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme)=>({
    root: {
        textAlign: "left",
    },
    label: {
        fontWeight: 500,
    },

}))
export default function LabelDescription({label, description}){
    const classes = styles();
    return (
        <InputLabel className={classes.root}>
            <Typography variant="h6"><Box className={classes.label}>{label}</Box></Typography>
            <Box><Typography variant="subtitle2">{description}</Typography></Box>
        </InputLabel>
    );
}