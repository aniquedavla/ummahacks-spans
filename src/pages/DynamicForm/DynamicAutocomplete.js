import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });

export default function DynamicAutocomplete(props){
  let {options, field, setValue, register} = props;
  let {label, id} = field;

  useEffect(()=>{
    register(
      {name: id},
      {
        required: {
          value: true,
          message: label + "is required"
        }
      }
    )
  }, []);
  
  const onChange = (event, data)=>{
    console.log(id, data.schoolName);
    console.log(setValue);
    if(data) setValue(id, data.schoolName);
  }
  const classes = useStyles();
  return (
      <Autocomplete
        id={id}
        style={{ width: 350 }}
        options={options}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.schoolName}
        renderOption={(option) => (
          <React.Fragment>
            {option.schoolName}
          </React.Fragment>
        )}
        onChange = {onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    );
}