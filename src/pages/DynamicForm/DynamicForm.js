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
            <Grid container spacing={4} justify="center" className={styleClasses.formRoot}>
                {fields.map((field)=>{
                    let {xs, md} = field.gridWidth
                    return (<Grid item xs={xs} md={md}>{getField(field, options,  register, watch, errors, setValue)}</Grid>);
                })}
                {/*render default submit button if not passed in */}
                <Grid item md={4} xs={2}>
                    {!submitButton && <Button className={styleClasses.submitButton} type="submit" variant="contained" color="primary">{submitLabel}</Button>}
                    {submitButton ? submitButton : ""}
                </Grid>
            </Grid>
            
        </form>
        </>
    );
};