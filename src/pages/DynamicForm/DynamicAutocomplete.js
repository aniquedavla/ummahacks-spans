import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    // root: {
    //   [theme.breakpoints.down('sm')]:
    //     {
    //       width: 250
    //     },
    //   [theme.breakpoints.up('md')]: {
    //     width: 350
    //   },
    // },
    option: {
      fontSize: "1rem",
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  }));

export default function DynamicAutocomplete(props){
  let {field, setValue, register, styleClasses} = props;
  let {label, id, placeholder = false, dataURL} = field;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  useEffect(()=>{

    register(
      {name: id},
      {
        required: {
          value: true,
          message: label + "is required"
        }
      }
    );
    let active = true;

    if (!loading) {
      return undefined;
    }
  
    (async () => {
      const response = await fetch(dataURL);

      const schoolsJSON = await response.json();
  
      if (active) {
        // console.log(schoolsJSON.features[0].attributes["NAME"]);
        // console.log(Object.keys(schoolsJSON.features).map((key) => schoolsJSON.features[key].attributes));
        setOptions(Object.keys(schoolsJSON.features).map((key) => schoolsJSON.features[key].attributes))
      }
    })();
  
    return () => {
      active = false;
    };
  }, [loading]);

  

React.useEffect(() => {
  if (!open) {
    setOptions([]);
  }
}, [open]);
  const onChange = (event, data)=>{
    console.log(id, data);
    //console.log("Autocomplete data", data["NAME"]);
    if(data) {setValue(id, data["NAME"]);}
  }
  const classes = useStyles();
  return (
      <Autocomplete
        id={id}
        //freeSolo
        //style={{ width: 250 }}
        options={options}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        classes={{
          root: styleClasses != null ? styleClasses.input : "",
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option["NAME"]}
        renderOption={(option) => (
          <React.Fragment>
            {option["NAME"]}
          </React.Fragment>
        )}
        onChange = {onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            //label={!placeholder ? label : ""}
            classes={{
              root: styleClasses != null ? styleClasses.searchAutoComplete : "",
            }}
            placeholder={placeholder ? placeholder : ""}
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              // autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    );
}