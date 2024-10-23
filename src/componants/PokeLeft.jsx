

const PokeLeft = ({pokemonData,name }) => {

  return (
     <div className="md:w-1/2 flex flex-col items-left mb-6 md:mb-0 ">
       <h1 className="text-6xl font-bold text-center mt-4 capitalize">{name}</h1>
        {pokemonData.sprites && (
          <img
            className="w-full h-auto max-h-[400px] object-contain" 
            src={pokemonData.sprites.other['official-artwork'].front_default}
            alt={`${name} official artwork`}
          />
        )}
       
        
        
        <img
          className="w-[200px]  mt-16 "
          src="https://www.pngmart.com/files/12/Ash-Ketchum-PNG-Background-Image.png"
          alt="Pokéball"
        />

      
      </div>
  )
}

export default PokeLeft;