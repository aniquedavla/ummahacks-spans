import React from 'react';
import { useForm } from "react-hook-form";
import {Grid, Button} from "@material-ui/core";
import getField from "./GetField";

export default function DynamicForm(props){
    const { register, handleSubmit, watch, errors} = useForm();
    let {fields, onSubmit, submitLabel, options} = props;
    let getFields = [];
    
    

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                {fields.map((field)=>{
                    return (<Grid item xs={12}>{getField(field, options,  register, watch, errors)}</Grid>);
                })}
            </Grid>
            <Button type="submit">{submitLabel}</Button>
        </form>
        </>
    );
};