import React, { useState, useEffect } from 'react';

const PokeCard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [abilities, setAbilites] = useState([]);
  const [newPokemon, setNewPokemon] = useState([]);

  useEffect(() => {
    //   Fetch Pokemon
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => {
        setPokemon(data.results);
      });
    //   Fetch Abilities
    fetch('https://pokeapi.co/api/v2/ability/')
      .then(res => res.json())
      .then(data => {
        setAbilites(data.results);
      });

    console.log(newPokemon, ' are the new pokemon');
  }, [newPokemon]);

  const handleClick = () => {
    pokemon.map((pokemon, index) => {
      console.log('Name: ', pokemon.name);
      console.log(`${pokemon.name}'s ability: `, abilities[index].name);
      const newPokemonObj = {
        name: pokemon.name,
        ability: abilities[index].name,
      };
      setNewPokemon(prevArr => [...prevArr, newPokemonObj]);
    });
    console.log('Done creating new Pokemon', newPokemon);
  };

  return (
    <>
      <div>
        {newPokemon.map((pokemon, index) => {
          return (
            <div key={index}>
              <h2>{pokemon.name}</h2>
              <p>{pokemon.ability}</p>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>Update memes</button>
    </>
  );
};

export default PokeCard;
