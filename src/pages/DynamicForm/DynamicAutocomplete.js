import React from 'react';
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
  let {options, field} = props;
  let {label} = field;

  const classes = useStyles();
  return (
      <Autocomplete
        id="school-select"
        style={{ width: 300 }}
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