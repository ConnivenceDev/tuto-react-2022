import React from 'react';
import ChronoTimer from '../components/ChronoTimer';
import GamePanel from '../components/GamePanel';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Game = () => {

  return (
    <div>
      <Logo />
      <Nav />
      <h1>
        Devine le drapeau
      </h1>
      <ChronoTimer />

      <GamePanel />

    </div>
  );
};

export default Game;