import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import PokeLeft from '../componants/PokeLeft';
import PokeRight from '../componants/PokeRight';


const PokemonInfo = () => {
    const { name } = useParams();
    const { state } = useLocation();
    const pokemonData = state?.pokemonData;
    console.log(pokemonData);
    if (!pokemonData) {
        return <div>No Pokémon data available.</div>; }

  return (
    <div className={`flex flex-col md:flex-row min-h-screen max-w-full mx-auto p-10 rounded-lg shadow-lg bg-slate-600 text-white`}>
     <PokeLeft pokemonData={pokemonData} name={name} />
      <PokeRight pokemonData={pokemonData}/>
    </div>
  );
  
}

export default PokemonInfo;