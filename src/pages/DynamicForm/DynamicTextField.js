import React from 'react';
import {TextField, makeStyles} from "@material-ui/core";
export default function DynamicTextField({label, id, required, register, setValue, isDirty, variant, styleClasses}){
    return (
        <TextField 
        //label={label}
        //helperText={this.props.formErrors.titleErrorMessage}
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
            register && register({
                required: {
                    value: required,
                    message: label + "is required"
                }
            })

        }
      />
    );
}