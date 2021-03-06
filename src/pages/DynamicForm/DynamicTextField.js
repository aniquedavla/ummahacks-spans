import React from 'react';
import {TextField, makeStyles} from "@material-ui/core";
export default function DynamicTextField({label, id, required, rows, register, setValue, isDirty, variant, styleClasses}){
    return (
        <TextField 
        //label={label}
        //helperText={this.props.formErrors.titleErrorMessage}
        multiline={rows !=null ? true : false}
        rows={rows !=null ?  rows : ""}
        classes={{root: styleClasses ? styleClasses.input : ""}}
        fullWidth
        error={isDirty}
        name={label}
        onChange={(event)=>{
            console.log("Id:", id, "value", event.target.value)
            setValue(id, event.target.value)
        }}
        required={required}
        variant={variant}
        inputRef={
            register && register(
                {name: id}, 
                {
                    required: {
                        value: required,
                        message: label + "is required"
                    }
                }
            )
        }
      />
    );
}