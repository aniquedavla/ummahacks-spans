import React from 'react';
import {Paper, } from "@material-ui/core";
import DynamicForm from "../DynamicForm/DynamicForm";
import {makeStyles} from "@material-ui/core/styles";
import {schoolSearchFields} from "../ViewRating/Fields";
import {schools} from "../ViewRating/reportData";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory  } from "react-router-dom";
const styles = makeStyles((theme)=> ({
    input: {
        [theme.breakpoints.down('sm')]: {
            width: 250
        },
        [theme.breakpoints.up('md')]: {
            width: 350
        },
    },
    formRoot: {
        background: "#fff",
        border: "2px solid #fff",
        borderRadius: ".5em"
    },
    submitButton: {
    },
    searchAutoComplete: {
        border: "2px solid #4472ca",
        borderRadius: ".5em"
    },
}));

export default function SearchSchool(){
    let history = useHistory();

    const classes = styles();
    let submitButton = <IconButton type="submit" className={classes.submitButton}><SearchIcon fontSize="large" color="primary"></SearchIcon></IconButton>;

    const searchSchoolSubmitCallback = (data) => {
        console.log("form data", data);
        history.push(`/viewrating/${data["search-school"]}`)
    }
    let formSettings = {
        spacing: 4,
        submitGridWidth: {
            submitMd : 4, 
            submitXs : 4
        }
    };
    return(
        <>
            <DynamicForm styleClasses={classes} fields={schoolSearchFields} options={schools} submitLabel="View a rating" submitButton={submitButton} formSubmitCallback={searchSchoolSubmitCallback} formSettings={formSettings}>
            </DynamicForm>
        </>
    );
}