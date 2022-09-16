import React, { useState, useEffect } from 'react';

const PairCard = ({ index, country, chooseCard, className }) => {

  const [hidden, setHidden] = useState(true);
  const [finded, setFinded] = useState(false);

  const handleDiscover = (ev) => {
    //setHidden(false);

    chooseCard(index);
  }

  useEffect(() => {
    if (country.state === 0) {
      setHidden(true);
    }
    else if (country.state === 1) {
      setHidden(false);
    }
    else {
      setHidden(false);
      setFinded(true);
    }
  }, [country.state])

  return (
    <>
      {
        hidden ?
          <li className='hidden' onClick={(ev) => handleDiscover()}>
            <h2>?</h2>
          </li>
          :
          <li style={{
            backgroundImage: "url(" + country.flag + ")",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }} className={finded === true ? "finded" : ""}>
          </li>
      }
    </>

  );
};

export default PairCard;