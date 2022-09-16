import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import PairCard from '../components/PairCard';

const Pairs = () => {

  const [grid, setGrid] = useState([]);
  const [guess, setGuess] = useState([]);
  const [tries, setTries] = useState(0);

  const updateState = (index, state) => {
    const newState = grid.map((obj, i) => {

      if (index.indexOf(i) > -1) {
        return { ...obj, state };
      }

      return obj;
    })

    setGrid(newState);
  }

  const chooseCard = (index) => {

    if (guess.length < 2) {

      setGuess((current) => current.push(index))

      updateState([index], 1);

      if (guess.length === 2) {
        setTries((current) => current + 1)
        if (grid[guess[0]].flag === grid[guess[1]].flag) {
          let timeout = setTimeout(() => {
            updateState([guess[0], guess[1]], 2);
            setGuess([])
          }, 1000)

          return () => clearTimeout(timeout);
        }
        else {
          let timeout = setTimeout(() => {
            updateState([guess[0], guess[1]], 0);
            setGuess([])
          }, 1000)

          return () => clearTimeout(timeout);
        }

      }
      else {
        setGuess(guess)
      }
    }

  }

  const genereGrid = (countries) => {
    let randomValue = 0;
    let arrayCards = [];
    for (let i = 0; i < 10; i++) {
      randomValue = Math.floor(Math.random() * countries.length);

      while (arrayCards.indexOf(countries[randomValue]) > -1) {
        randomValue = Math.floor(Math.random() * countries.length);
      }

      arrayCards.push({
        flag: countries[randomValue].flags.svg,
        state: 0
      });
      arrayCards.push({
        flag: countries[randomValue].flags.svg,
        state: 0
      });

    }

    return arrayCards.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setGrid(genereGrid(res.data));
      })
  }, [])

  return (
    <div>
      <Logo />
      <Nav />
      <h1>Jeu des paires</h1>
      <p>Trouve toutes les paires de drapeau</p>
      <strong>Déjà {tries} essai{tries > 1 ? "s" : ""} !</strong>

      <ul className="game-screen">
        {
          grid.map((country, index) => (
            <PairCard key={index} country={country} chooseCard={chooseCard} index={index} />
          ))
        }
      </ul>


    </div>
  );
};

export default Pairs;