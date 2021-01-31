import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
};

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

const useStyles = makeStyles((theme) => ({
    formControl: {
    //   border: "1px solid",
    //   borderRadius: "5px",
    //   minWidth: 120,

    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  

export default function DynamicMultiSelect({id,menus, register, setValue, styleClasses}){
    const [selectedVal, setSelectedVal] = React.useState([]);
    const theme = useTheme();
    const classes = useStyles();

    return(
        <>
        <Select
            id={id}
            value={selectedVal}
            variant="outlined"
            multiple
            onChange={(event)=>{
                let selectedValues = event.target.value;
                setSelectedVal(selectedValues);
                setValue(id, selectedValues)
            }}
            input={<Input id="select-multiple-chip" variant="outlined"/>}
            classes={{root: styleClasses ? styleClasses.input : ""}}
            renderValue={(selected) => (
                <div className={classes.chips}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip} />
                    ))}
                </div>
            )}
            MenuProps={MenuProps}
            ref={register({name: id})}
        >
            {menus.map((name) => (
                <MenuItem key={name} value={name} style={getStyles(name, selectedVal, theme)}>
                    {name}
                </MenuItem>
            ))}
        </Select>
        </>
    );
}