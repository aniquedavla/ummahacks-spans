import React from 'react';
import DynamicAutcomplete from "./DynamicAutocomplete";
import {TextField} from "@material-ui/core";
import DynamicTextField from './DynamicTextField';

export default function getField(field, options, register, watch, formState, setValue, styleClasses){
    let {type, id, label, required = false, variant = "outlined"} = field;
    let {isDirty} = formState; 
    switch(type){
        case "autocomplete":
            return (<DynamicAutcomplete options={options} field={field} setValue={setValue} register={register} styles={styleClasses}></DynamicAutcomplete>);           
        case "text" : 
            return (<DynamicTextField {...field} register={register} setValue={setValue} isDirty={isDirty} variant={variant} styleClasses={styleClasses}></DynamicTextField>);
        default: return (<></>)
    }
}