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

interface Choice {
  numPizzas: number;
  diameter: number;
  price: number;
  pricePerUnit: number;
}

const moneyRegex: RegExp = /^\d{1,}(\.\d{0,2})?$/;
const numberRegex: RegExp = /^\d+$/;

function App() {

  const handleNumPizzasChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let value: string = event.target.value;
    if (value.match(numberRegex) || value === '') {
      setNumPizzas(parseInt(value));
    }
  }

  const handleDiameterChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let value: string = event.target.value;
    if (value.match(numberRegex) || value === '') {
      setDiameter(parseInt(value));
    }
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let value: string = event.target.value;
    if (value.match(moneyRegex) || value === '') {
      setPrice(value);
    }
  }

  const classes = useStyles();
  const [numPizzas, setNumPizzas] = useState<number | null>();
  const [diameter, setDiameter] = useState<number | null>();
  const [price, setPrice] = useState<string>('');
  const [choices, setChoices] = useState<Choice[] | []>([]);
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

    setBestChoice(tempBestChoice+1);
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
              <CardContent>
                <span>{index+1}</span>
                <TextField disabled label={"Number:" + choice.numPizzas} variant="outlined" />
                <TextField disabled label={"Diameter:" + choice.diameter} variant="outlined" />
                <TextField disabled label={"Price:" + choice.price} variant="outlined" />
                <TextField disabled label={"Price per 'unit':" + choice.pricePerUnit} variant="outlined" />
              </CardContent>
            </Card>
        </div>
      )})}

      {choices.length > 1 && 
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
            const numPizzas = elements.numPizzas.value;
            const diameter = elements.diameter.value
            const price = elements.price.value;

            setNumPizzas(null);
            setDiameter(null);
            setPrice('');

            const radius = diameter/2;
            const area = 3.14 * radius * radius;
            const pricePerUnit = price / area;

            const newElement = {
              "numPizzas": numPizzas,
              "diameter": diameter,
              "price": price,
              "pricePerUnit": pricePerUnit
            }

            setChoices([...choices, newElement]);
            calculateBestChoice();
          }}>
            <TextField 
              required 
              id="num-pizzas-basic" 
              name="numPizzas" 
              label="Number" 
              variant="outlined" 
              value={numPizzas || ''}
              onChange={event => handleNumPizzasChange(event)}
            />
            <TextField 
              required 
              id="diameter-basic" 
              name="diameter" 
              label="Diameter" 
              variant="outlined" 
              value={diameter || ''}
              onChange={event => handleDiameterChange(event)}
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
