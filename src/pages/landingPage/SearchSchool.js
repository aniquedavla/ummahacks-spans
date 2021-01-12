import React from 'react';
import {Paper, } from "@material-ui/core";
import DynamicForm from "../DynamicForm/DynamicForm";
import {makeStyles} from "@material-ui/core/styles";
import {schoolSearchFields} from "../ViewRating/Fields";
import {schools} from "../ViewRating/reportData";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory  } from "react-router-dom";
const styles = makeStyles({
    root:{
        padding: "1rem 0 1rem 1rem",
        margin: "0 .5rem 0 .5rem"
    },
    formFieldItem: {

    },
    submitButton: {
        marginTop: 1,
        paddingLeft: "2rem"        
    }
});

export default function SearchSchool(){
    let history = useHistory();

    const classes = styles();
    let submitButton = <IconButton type="submit" className={classes.submitButton}><SearchIcon fontSize="large" color="primary"></SearchIcon></IconButton>;

    const searchSchoolSubmitCallback = (data) => {
        console.log("form data", data);
        history.push(`/viewrating/${data["search-school"]}`)
    }
    return(
        <>
            <Paper className={classes.root}>
                <DynamicForm styleClasses={classes} fields={schoolSearchFields} options={schools} submitLabel="View a rating" submitButton={submitButton} formSubmitCallback={searchSchoolSubmitCallback}>
                </DynamicForm>
            </Paper>
        </>
    );
}