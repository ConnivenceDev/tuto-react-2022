import React from 'react';

const RandomCountry = ({ country }) => {

  return (
    < div className='random-fiche' >
      {
        country ?
          <img src={country.flags.svg
          } alt={"Drapeau " + country.translations.fra.common} />
          :
          ""
      }
    </div >
  );
};

export default RandomCountry;