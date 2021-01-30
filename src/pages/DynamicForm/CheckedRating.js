import React from 'react';
import MUICheckbox from './MUICheckbox';
import HoverRating from './HoverRating';
import {Checkbox, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme)=>({
    root: {
        display: "flex",
        alignItems: "left",
        justifyContent: "left",
    }
}))

export default function CheckedRating({id, required, register, setValue, watch}){
    const [checkedState, setCheckedState] = useState(false);
    const classes = styles();

    return(
        <>
            <Box className={classes.root}>
                <Checkbox checked={checkedState} 
                    color="primary"
                    onChange={(event)=>{
                        const checkedValue = event.target.checked;
                        setCheckedState(checkedValue);
                        setValue(id, checkedValue)
                        console.log("Checked value", checkedValue)
                    }} 
                    name={label} 
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
            </Box>
            {
                checkedState 
                &&
                <HoverRating {...field} register={register} setValue={setValue} watch={watch} checkedValue={checkedState}></HoverRating>

            }
        </>
    );
}