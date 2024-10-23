import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Shimmer from "../componants/Shimmer";
import PokemonCard from "./PokemonCard";

const HomePage = () => {
  const [pokemonget, setPokemonget] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const getPokeData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
      );
      setPokemonget(response.data.results);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokeData();
  }, []);

  const filteredPokeData = pokemonget.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      <h1 className="text-6xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-yellow-400 to-blue-900 drop-shadow-2xl  tracking-wide flex items-center justify-center">
        POKEMON GALLERY
        <img
          className="w-40 h-28 ml-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
        />
      </h1>

      <div className="flex justify-center mb-8 drop-shadow-lg">
        <input
          type="text"
          placeholder="Search your favorite Pokemon...."
          className="border border-gray-300 rounded-lg p-2 w-1/2 md:w-1/4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Shimmer key={index} />
            ))
          : filteredPokeData.map((poke) => (
              <PokemonCard
                name={poke.name}
                key={poke.name}
                setLoading={setLoading}
              />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
