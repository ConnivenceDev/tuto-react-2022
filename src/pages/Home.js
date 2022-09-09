import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div>
            <Logo />
            <Nav />
            <h1>Accueil</h1>
            <Countries />
        </div>
    );
};

export default Home;