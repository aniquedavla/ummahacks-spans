import React from 'react';
import DynamicAutcomplete from "./DynamicAutocomplete";
import {TextField} from "@material-ui/core";
import DynamicTextField from './DynamicTextField';
import HoverRating from './HoverRating';
import MUICheckbox from './MUICheckbox';
import DynamicSelect from './DynamicSelect';
import DynamicMultiSelect from './DynamicMultiSelect';

export default function getField(field, options, register, watch, formState, setValue, styleClasses){
    let {type, id, label, required = false, variant = "outlined"} = field;
    let {isDirty} = formState; 
    switch(type){
        case "autocomplete":
            return (<DynamicAutcomplete options={options} field={field} setValue={setValue} register={register} styles={styleClasses}></DynamicAutcomplete>);           
        case "text" : 
            return (<DynamicTextField {...field} register={register} setValue={setValue} isDirty={isDirty} variant={variant} styleClasses={styleClasses}></DynamicTextField>);
        // case "paragraph" : 
        //     return (<DynamicTextField {...field} register={register} setValue={setValue} isDirty={isDirty} variant={variant} styleClasses={styleClasses}></DynamicTextField>);
        case "rating": 
            return(<HoverRating {...field} register={register} setValue={setValue} watch={watch}></HoverRating>)
        case "checkbox":
            return(<MUICheckbox {...field} register={register} setValue={setValue}></MUICheckbox>);
        case "select": 
            return(<DynamicSelect {...field} register={register} setValue={setValue} styleClasses={styleClasses}></DynamicSelect>);
        case "multi-select": 
            return(<DynamicMultiSelect {...field} register={register} setValue={setValue} styleClasses={styleClasses}></DynamicMultiSelect>)
        default: return (<></>)
    }
}