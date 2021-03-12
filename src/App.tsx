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

  const exampleChoices = [{
    "number": 2,
    "diameter": 10,
    "price": 1499,
    "pricePerUnit": 23
  }, {
    "number": 1,
    "diameter": 20,
    "price": 1399,
    "pricePerUnit": 25
  }]

  const classes = useStyles();
  const [choices, setChoices] = useState(exampleChoices);
  const [bestChoice, setBestChoice] = useState(0);

  const calculateBestChoice = () => {
    let tempBestChoice = 0;
    let lowestPricePerUnit = null;
    let i = 1;
    for (const choice in choices) {
      if (!lowestPricePerUnit || choices[choice].pricePerUnit > lowestPricePerUnit) {
        tempBestChoice = i;
        lowestPricePerUnit = choices[choice].pricePerUnit;
      }
      i++;
    }

    setBestChoice(tempBestChoice);
  }

  return (
    <div className="App">
      <Card className={classes.root}>
        <CardContent>
          <h1>Pizza Area Comparer</h1>
          <h3>Find out which pizzas give the best deals</h3>
        </CardContent>
      </Card>

      
      {choices.map((choice, index) => {
        return (
          <div>
            <Card className={classes.addPizza}>
              <CardContent>
                <span>{index}</span>
                <TextField disabled label={"Number:" + choice.number} variant="outlined" />
                <TextField disabled label={"Diameter:" + choice.diameter} variant="outlined" />
                <TextField disabled label={"Price:" + choice.price} variant="outlined" />
                <TextField disabled label={"Price per 'unit':" + choice.pricePerUnit} variant="outlined" />
              </CardContent>
            </Card>
        </div>
      )})}

      {bestChoice && 
        <Card className={classes.addPizza}>
          <CardContent>
            <p>Option {bestChoice} is the best value</p>
          </CardContent>
        </Card>
      }

      <Card className={classes.addPizza}>
        <CardContent>
          <form onSubmit={event => {
            event.persist();
            event.preventDefault();

            // @ts-ignore
            const elements = event.target.elements;
            const number = elements.number.value;
            const diameter = elements.diameter.value
            const price = elements.price.value;

            elements.number.value = '';
            elements.diameter.value = '';
            elements.price.value = '';

            const radius = diameter/2;
            const area = 3.14 * radius * radius;
            const pricePerUnit = price / area;

            const newElement = {
              "number": number,
              "diameter": diameter,
              "price": price,
              "pricePerUnit": pricePerUnit
            }

            setChoices([...choices, newElement]);
            calculateBestChoice();
          }}>
            <TextField required id="number-basic" name="number" label="Number" variant="outlined" />
            <TextField required id="diameter-basic" name="diameter" label="Diameter" variant="outlined" />
            <TextField required id="price-basic" name="price" label="Price" variant="outlined" />
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
