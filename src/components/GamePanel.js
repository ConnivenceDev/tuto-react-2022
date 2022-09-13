import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RandomCountry from './RandomCountry';

const GamePanel = () => {

  const [data, setData] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setData(res.data);
        if (randomIndex === null) {
          setRandomIndex(Math.floor(Math.random() * res.data.length));
        }

      })
  }, [])
  return (
    <div className='game_panel'>
      <h2>{score}</h2>
      {
        randomIndex !== null ?
          <RandomCountry country={data[randomIndex]} />
          :
          ""
      }

      <input type="text" id="answer" onChange={(ev) => {
        let answer = ev.target.value.toLowerCase();

        if (answer == data[randomIndex].translations.fra.common.toLowerCase()) {
          setRandomIndex(Math.floor(Math.random() * data.length));
          ev.target.value = "";
          setScore((value) => (value += 1))
        }
      }} />

      <button onClick={(ev) => {
        setRandomIndex(Math.floor(Math.random() * data.length));
        ev.target.value = "";
      }}>
        Passer
      </button>

    </div>
  );
};

export default GamePanel;