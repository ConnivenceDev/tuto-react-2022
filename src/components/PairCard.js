import React, { useState, useEffect } from 'react';

const PairCard = ({ index, country, chooseCard }) => {

  const [hidden, setHidden] = useState(true);
  const [finded, setFinded] = useState(false);

  const handleDiscover = (ev) => {
    setHidden(false);
    const result = chooseCard(country, index);
    if (result !== undefined) {
      if (result === true) {
        //setFinded(true);
      }
      else {
        //setHidden(true);
      }
    }
  }

  return (
    <>
      {
        hidden ?
          <li className='hidden' onClick={(ev) => handleDiscover()}>
            <h2>?</h2>
          </li>
          :
          <li style={{
            backgroundImage: "url(" + country.flags.svg + ")",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}>

          </li>
      }
    </>

  );
};

export default PairCard;