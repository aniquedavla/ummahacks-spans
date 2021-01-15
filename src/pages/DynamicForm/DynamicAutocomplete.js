import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        border: "2px solid #4472ca",
        borderRadius: ".5em"
    },
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });

export default function DynamicAutocomplete(props){
  let {field, setValue, register} = props;
  let {label, id} = field;
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
      const response = await fetch(
        "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Colleges_and_Universities_Campuses/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson&token="
      );

      const schoolsJSON = await response.json();
  
      if (active) {
        console.log(schoolsJSON.features[0].attributes["NAME"]);
        console.log(Object.keys(schoolsJSON.features).map((key) => schoolsJSON.features[key].attributes));
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
        style={{ width: 350 }}
        options={options}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        classes={{
          //root: classes.root,
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
            // label={label}
            classes={{
              root: classes.root,
            }}
            placeholder={label}
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