import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { typeColors } from "./utils/typecolor";
import axios from "axios";

const PokemonCard = ({ name, setLoading }) => {
  const [data, setData] = useState({});

  const getPokemonCard = async (pokemonName) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    getPokemonCard(name);
  }, [name]);

  const firstType = data?.types?.[0]?.type?.name;
  const bgColor = typeColors[firstType]?.bg || "from-gray-700 to-gray-900";
  const hoverColor =
    typeColors[firstType]?.hover || "hover:from-gray-600 hover:to-gray-800";

  return (
    <div>
      <Link to={`/pokemon/${name}`} state={{ pokemonData: data }}>
        <div
          className={`rounded-lg shadow-2xl p-8 max-w-sm mx-auto bg-gradient-to-br ${bgColor} ${hoverColor} hover:shadow-slate-900 transform hover:scale-105  transition-transform duration-300 cursor-pointer`}
        >
          {data?.sprites?.other?.["official-artwork"]?.front_default && (
            <img
              className="w-48 h-48 mx-auto mb-6"
              src={data.sprites.other["official-artwork"].front_default}
              alt={`${name} official artwork`}
            />
          )}
          <h1 className="text-3xl font-bold text-center mb-4 text-white capitalize">
            {name}
          </h1>
          <h2 className="text-center">
            {data?.types?.map((itemtype) => (
              <span
                key={itemtype.type.name}
                className="inline-block bg-black rounded-full px-4 py-2 text-lg font-semibold text-white mx-2 shadow-md"
              >
                {itemtype.type.name}
              </span>
            ))}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
