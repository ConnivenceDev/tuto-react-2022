import React, { useEffect, useState } from 'react';

const ChronoTimer = () => {
  const [chronoTimer, setChronoTimer] = useState(0);
  let chronoState = null;

  useEffect(() => {
    if (chronoState == null) {

      chronoState = setInterval(() => {
        setChronoTimer((state) => state += 1);
      }, 1000);

    }

    return () => clearInterval(chronoState);
  }, [])
  return (
    <p>
      Temps passé depuis le début du jeu : {chronoTimer}
    </p>
  );
};

export default ChronoTimer;