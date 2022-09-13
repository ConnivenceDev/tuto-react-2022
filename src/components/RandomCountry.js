import React, { useEffect, useState } from 'react';

const RandomCountry = ({ country }) => {



  useEffect(() => {

  }, [])

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