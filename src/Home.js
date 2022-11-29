import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Categorias from './components/Categorias/Categorias';
import Characters from './components/Characters/articulos';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Normas from './components/Normas/normas';






function Home() {
    const [character, setCharacters] = useState([]);

    const initialUrl = "https://rickandmortyapi.com/api/character"

    const fetchCharacters = (initialUrl) => {
        fetch(initialUrl)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, [])

    return (

            <>
                 <Header /> 
                 <NavBar/> 
                <div> <Categorias /> </div>

                <div className='container mt-5'> <Characters characters={character} /> </div>
            </>

    )
}

export default Home

