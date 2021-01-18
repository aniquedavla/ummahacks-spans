import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  1: 'Horrible',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating({id, required, register, setValue}) {
  const [value, setValueState] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  useEffect(()=>{
    register(
        {name: id }, 
        {required: required }
    );
  }, [])
  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        onChange={(event, newValue) => {
          setValueState(newValue);
          console.log("rating ", id , newValue)
          setValue(id, newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        size="large"
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}
