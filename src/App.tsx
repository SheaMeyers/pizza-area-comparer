import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import './App.css';

const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: 20
  },
  addPizza: {
    width: "90%",
    margin: 20,
    display: 'flex'
  }
});


function App() {

  const classes = useStyles();
  const [choices, setChoices] = useState();

  return (
    <div className="App">
      <Card className={classes.root}>
        <CardContent>
          <h1>Pizza Area Comparer</h1>
          <h3>Find out which pizzas give the best deals</h3>
        </CardContent>
      </Card>
      <Card className={classes.addPizza}>
        <CardContent>
          <TextField id="diameter-basic" label="Diameter" variant="outlined" />
          <TextField id="price-basic" label="Price" variant="outlined" />
          <Button variant="contained" color="primary">
            Add
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
