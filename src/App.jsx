
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './componants/HomePage'
import PokemonCard from './componants/PokemonCard'
import PokemonInfo from './componants/PokemonInfo'

const App = () => {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path='/pokemon/:name' element={<PokemonInfo/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
