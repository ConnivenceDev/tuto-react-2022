import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import PairCard from '../components/PairCard';

const Pairs = () => {

  const [grid, setGrid] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [states, setStates] = useState([]);

  const chooseCard = (card, index) => {
    /* Trouver mieux ? */
    let array_states = states;
    array_states[index] = 1;
    setStates(array_states);
    /* */
    /*let actual_pairs = pairs;
    actual_pairs.push(card);
    if (actual_pairs.length < 2) {
      setPairs(actual_pairs);
    }
    else {
      setPairs([])
      if (actual_pairs[0] === actual_pairs[1]) {
        return (true);
      }
      else {
        return (false);
      }

    }*/

  }

  const genereGrid = (countries) => {
    let random_value = 0;
    let array_cards = [];
    for (let i = 0; i < 10; i++) {
      random_value = Math.floor(Math.random() * countries.length);

      while (array_cards.indexOf(countries[random_value]) > -1) {
        console.log(random_value)
        random_value = Math.floor(Math.random() * countries.length);
      }

      states.push(0);
      states.push(0);

      array_cards.push(countries[random_value]);
      array_cards.push(countries[random_value]);

    }

    return array_cards.sort(() => Math.random() - 0.5);
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

      <ul className="game-screen">
        {
          grid.map((country, index) => <PairCard key={index} country={country} chooseCard={chooseCard} index={index} />)
        }
      </ul>


    </div>
  );
};

export default Pairs;