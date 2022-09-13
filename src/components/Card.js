import React from 'react';

// Si je veux atteindre props.country plus rapidement je peux mettre const Card = ({ country }) => {

const Card = (props) => {
    return (
        <li className='card'>
            <img src={props.country.flags.svg} alt={"Drapeau " + props.country.translations.fra.common} />
            <div className='infos'>
                <h2>{props.country.translations.fra.common}</h2>
                {props.country.capital ? (
                    <ul>
                        {
                            props.country.capital.map((capital, index) => (
                                <li key={index}>
                                    {capital}
                                </li>
                            ))
                        }
                    </ul>
                ) : ""
                }
                <p>{props.country.population.toLocaleString()}</p>

            </div>
        </li>
    );
};

export default Card;