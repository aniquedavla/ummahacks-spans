import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function DynamicSelect({id, menus, register, setValue, styleClasses}){
    const [value, setStateValue] = React.useState("");
    return(
        <>
            <Select
                name={id}
                id={id}
                value={value}
                onChange={(event)=>{
                    let selectedValue = event.target.value;
                    setStateValue(selectedValue);
                    setValue(id, selectedValue);
                }}
                classes={{root: styleClasses != null ? styleClasses.input : ""}}
                ref={register({name: id})}
                variant="outlined"
            >
                <MenuItem value="" default>
                </MenuItem>
                {menus.map((menu)=>{
                    return(
                        <MenuItem value={menu.value} >
                            {menu.label}
                        </MenuItem>
                    )
                })}
                
            </Select>
        </>
    );
}