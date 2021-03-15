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
  },
  addPizzaCardContent: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  }
});

interface Choice {
  numPizzas: number;
  diameter: number;
  price: number;
  pricePerUnit: number;
}

const moneyRegex: RegExp = /^\d{1,}(\.\d{0,2})?$/;
const numberRegex: RegExp = /^\d+$/;

function App() {

  const handleNumFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, setHook: Function) => {
    let value: string = event.target.value;
    if (value.match(numberRegex) || value === '') {
      setHook(parseInt(value));
    }
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let value: string = event.target.value;
    if (value.match(moneyRegex) || value === '') {
      setPrice(value);
    }
  }

  const classes = useStyles();
  const [numPizzas, setNumPizzas] = useState<number>(0);
  const [diameter, setDiameter] = useState<number>(0);
  const [price, setPrice] = useState<string>('');
  const [choices, setChoices] = useState<Choice[] | []>([]);

  const getBestChoice = () => {
    let tempBestChoice = 0;
    let lowestPricePerUnit = 0;
    let i = 1;
    for (const choice in choices) {
      if (!lowestPricePerUnit || choices[choice].pricePerUnit < lowestPricePerUnit) {
        tempBestChoice = i;
        lowestPricePerUnit = choices[choice].pricePerUnit;
      }
      i++;
    }

    return tempBestChoice;
  }

  const removeChoice = (choiceIndex: number) => {
    setChoices(choices.filter((choice, index) => index !== choiceIndex))
  }

  return (
    <div className="App">
      <Card className={classes.root}>
        <CardContent>
          <h1>Pizza Area Comparer</h1>
          <h3>Find out which pizzas give the best deals</h3>
        </CardContent>
      </Card>

      {choices.map((choice: Choice, index: number) => {
        return (
          <div>
            <Card className={classes.addPizza}>
              <CardContent className={classes.addPizzaCardContent}>
                <p>{index+1}.</p>
                <TextField disabled label={"Number:" + choice.numPizzas} variant="outlined" />
                <TextField disabled label={"Diameter:" + choice.diameter} variant="outlined" />
                <TextField disabled label={"Price:" + choice.price} variant="outlined" />
                <TextField disabled label={"Price per 'unit':" + (choice.pricePerUnit*100).toFixed(3)} variant="outlined" />
                <Button variant="contained" color="secondary" type="submit" onClick={() => removeChoice(index)}>Remove</Button>
              </CardContent>
            </Card>
        </div>
      )})}

      {choices.length > 1 && 
        <Card className={classes.addPizza}>
          <CardContent className={classes.addPizzaCardContent}>
            <p>Option <b>{getBestChoice()}</b> is the best value</p>
          </CardContent>
        </Card>
      }

      <Card className={classes.addPizza}>
        <CardContent className={classes.addPizzaCardContent}>
          <form  className={classes.addPizzaCardContent} onSubmit={event => {
            event.persist();
            event.preventDefault();

            // @ts-ignore
            const elements = event.target.elements;
            const numPizzas = elements.numPizzas.value;
            const diameter = elements.diameter.value
            const price = elements.price.value;

            setNumPizzas(0);
            setDiameter(0);
            setPrice('');

            const radius = diameter/2;
            const area = numPizzas * 3.14 * radius * radius;
            const pricePerUnit = price / area;

            const newElement = {
              "numPizzas": numPizzas,
              "diameter": diameter,
              "price": price,
              "pricePerUnit": pricePerUnit
            }

            setChoices([...choices, newElement]);
          }}>
            <TextField 
              required 
              id="num-pizzas-basic" 
              name="numPizzas" 
              label="Number" 
              variant="outlined" 
              value={numPizzas || ''}
              onChange={event => handleNumFieldChange(event, setNumPizzas)}
            />
            <TextField 
              required 
              id="diameter-basic" 
              name="diameter" 
              label="Diameter" 
              variant="outlined" 
              value={diameter || ''}
              onChange={event => handleNumFieldChange(event, setDiameter)}
            />
            <TextField 
              required 
              id="price-basic" 
              name="price" 
              label="Price" 
              variant="outlined" 
              value={price}
              onChange={event => handlePriceChange(event)}
            />
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
