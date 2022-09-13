import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {

    //Le useState crée une variable d'état, le seul moyen de modifier la variable data est d'utilise setData()

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    //Le useEffect se joue lorsque le composant est monté

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>
            <h1>
                Drapeaux
            </h1>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} step="1" onChange={(ev) => {
                    setRangeValue(ev.target.value);
                }} />
                {
                    radios.map((continent, index) => (
                        <li key={index}>
                            <input type="radio" id={continent.toLowerCase()} name="continents" checked={continent === selectedRadio} onChange={(ev) => {
                                setSelectedRadio(ev.target.id[0].toUpperCase() + ev.target.id.slice(1));
                            }} />
                            <label htmlFor={continent.toLowerCase()}>{continent}</label>
                        </li>
                    ))
                }

            </ul>
            {
                selectedRadio && (
                    <button onClick={() => setSelectedRadio("")}>
                        Annuler la recherche
                    </button>
                )
            }
            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                }
            </ul>
        </div>
    );
};

export default Countries;