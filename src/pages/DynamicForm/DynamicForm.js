import React from 'react';
import { useForm } from "react-hook-form";
import {Grid, Button} from "@material-ui/core";
import getField from "./GetField";

export default function DynamicForm(props){
    const { register, handleSubmit, watch, errors, setValue} = useForm();
    let {fields, formSubmitCallback, submitLabel, options, styleClasses, submitButton} = props;
    let getFields = [];

    const formSubmit = (data) => {  
        console.log("search-school data", watch("search-school"));
        formSubmitCallback(data);
    }
    return(
        <>
        <form onSubmit={handleSubmit(formSubmit)}>
            <Grid container spacing={2} justify="center">
                {fields.map((field)=>{
                    return (<Grid item md={8} xs={8}>{getField(field, options,  register, watch, errors, setValue)}</Grid>);
                })}
            {/*render default submit button if not passed in */}
            <Grid item md={4} xs={4} className={styleClasses.submitButton}>
                {!submitButton && <Button type="submit" variant="contained" color="primary">{submitLabel}</Button>}
                {submitButton ? submitButton : ""}
            </Grid>
            </Grid>
            
        </form>
        </>
    );
};