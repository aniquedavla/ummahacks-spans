import React, { useEffect } from 'react';
import { Typography, Paper, Container, Box } from '@material-ui/core';
import DynamicForm from "../DynamicForm/DynamicForm"
import {formFields} from "./FormFields";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme)=>({
    root: {
        // background: "#FFF1B0"
    },
    container: {
        [theme.breakpoints.up("md")]: {width: 500,},
        [theme.breakpoints.down("xs")]: {width: 350,},
        padding: ".5rem 2rem"
    },
    formRoot: {
        paddingTop: "1.5rem",
    },
    input: {
        [theme.breakpoints.down('sm')]: {
            width: 250
        },
        [theme.breakpoints.up('md')]: {
            width: 400
        },
    },
    submitButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default function RateForm2(){
    let classes = styles(); 
    let formLabel = "Rate a school";
    let formDescription = "Rate a school for Muslim Friendliness.";
    let formSettings = {
        gridDirection: "column",
        spacing: 2,
    }
    let submitForm = (data) =>{
        console.log("Rate form data:", data)
    }
    return(
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Box>
                    <Typography variant="h4" align="left">{formLabel}</Typography>
                    <Typography variant="subtitle1" align="left">{formDescription}</Typography>
                </Box>
                <DynamicForm fields={formFields} formSubmitCallback={submitForm} formSettings={formSettings} styleClasses={classes}></DynamicForm>
            </Container>
        </Box>
    );
}