import React from 'react';
import DynamicAutcomplete from "./DynamicAutocomplete";

export default function getField(field, options, register, watch, errors){
    let {type} = field;

    switch(type){
        case "autocomplete":
            return (<DynamicAutcomplete options={options} field={field}></DynamicAutcomplete>);
        default: return (<></>)
    }
}