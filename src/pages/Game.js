import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GamePanel from '../components/GamePanel';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Game = () => {

  const [chronoTimer, setChronoTimer] = useState(0);
  let chrono_state = null;

  useEffect(() => {
    if (chrono_state == null) {

      chrono_state = setInterval(() => {
        setChronoTimer((state) => state += 1);
      }, 1000)
    }
  }, [])

  return (
    <div>
      <Logo />
      <Nav />
      <h1>
        Devine le drapeau
      </h1>
      <p>
        Temps passé depuis le début du jeu : {chronoTimer}
      </p>

      <GamePanel />

    </div>
  );
};

export default Game;