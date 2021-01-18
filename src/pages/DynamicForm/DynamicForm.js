import React from 'react';
import { useForm } from "react-hook-form";
import {Grid, Button} from "@material-ui/core";
import getField from "./GetField";
import { Label } from 'semantic-ui-react';
import getLabel from './getLabel';
import LabelDescription from './getLabel';

export default function DynamicForm(props){
    const { register, handleSubmit, watch, errors, setValue} = useForm();
    let formState = {errors}
    let {fields, formSubmitCallback, submitLabel="Submit", options, styleClasses, submitButton = false, formSettings={}} = props;
    let {spacing = 2, gridDirection = "row", submitGridWidth={submitXs: 12, submitMd: 12}} = formSettings;
    let getFields = [];
    let {submitMd, submitXs} = submitGridWidth;
    const formSubmit = (data) => {  
        console.log("search-school data", watch("search-school"));
        formSubmitCallback(data);
    }
    return(
        <>  
        <form onSubmit={handleSubmit(formSubmit)}>
            <Grid container 
                spacing={spacing} 
                direction={gridDirection}
                justify="center"
                alignItems="flex-start"
                className={styleClasses ? styleClasses.formRoot : ""}
            >
                {fields.map((field)=>{
                    let {xs = 12, md = 12} = field.gridWidth ? field.gridWidth : "";
                    return (
                        <Grid item xs={xs} md={md}>
                            {field.label && <LabelDescription label={field.label} description={field.description}></LabelDescription>}
                            {getField(field, options,  register, watch, formState, setValue, styleClasses)}
                        </Grid>
                    );
                })}
                {/*render default submit button if not passed in */}
                <Grid item md={submitMd} xs={submitXs}>
                    {!submitButton && <Button className={styleClasses ? styleClasses.submitButton : ""} type="submit" variant="contained" color="primary">{submitLabel}</Button>}
                    {submitButton ? submitButton : ""}
                </Grid>
            </Grid>
            
        </form>
        </>
    );
};