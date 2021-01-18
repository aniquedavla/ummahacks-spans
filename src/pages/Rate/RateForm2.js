import React, { useEffect } from 'react';
import { Typography, Paper, Container, Box } from '@material-ui/core';
import DynamicForm from "../DynamicForm/DynamicForm"
import {formFields} from "./FormFields";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme)=>({
    root: {
        [theme.breakpoints.up("md")]: {width: 500,},
        alignItems: "center",
        justifyContent: "center",
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
            width: 350
        },
    },
    submitButton: {

    }
}));
export default function RateForm2(){
    let classes = styles(); 
    let formLabel = "Rate a school";
    let formSettings = {
        gridDirection: "column",
        spacing: 2,
    }
    let submitForm = (data) =>{
        console.log("Rate form data:", data)
    }
    return(
        <Container className={classes.root}>
            <Typography variant="h4" align="center">{formLabel}</Typography>
            <DynamicForm fields={formFields} formSubmitCallback={submitForm} formSettings={formSettings} styleClasses={classes}></DynamicForm>
        </Container>
    );
}