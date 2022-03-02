import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../Components/baseURL.js';
import { goToBattle, goToHome, goToInfo } from '../../Routes/coordinates';

export const HomePage = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const [newPokemon, setNewPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  useEffect(() => {
    const pokeData = [];
    pokemon.forEach(
      (poke) => {
        axios
          .get(`${baseURL}/${poke.name}`)
          .then((res) => {
            if (pokeData.length === 20) {
              const orderedList = pokeData.sort((a, b) => {
                return a.id - b.id;
              });
              console.log(res);
              pokeData.push(res);
              setNewPokemon(orderedList);
            }
          })
          .catch((err) => {
            alert('Ocorreu um erro, tente novamente!');
            console.log(err.response);
          });
      },
      [pokemon]
    );
  });

  const renderPokeList = pokemon.map((poke, index) => {
    return (
      <div key={index}>
        <h3>{poke.name}</h3>
      </div>
    );
  });

  console.log(newPokemon);
  console.log(pokemon);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            goToHome(navigate);
          }}
        >
          Home
        </button>

        <button
          onClick={() => {
            goToInfo(navigate);
          }}
        >
          Info
        </button>

        <button
          onClick={() => {
            goToBattle(navigate);
          }}
        >
          Battle
        </button>
      </div>
      {renderPokeList}
    </div>
  );
};
