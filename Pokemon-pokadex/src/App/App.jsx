import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import PokemonBigCard from '../Pokemon-big-card/Pokemon-big-card.jsx';
import Pokedex from '../Pokedex/Pokedex.jsx';
import AddNewPoke from '../Add-new-poke/Add-new-poke.jsx';
import Error from '../Error/Error.jsx';

function App() {
  // localStorage.clear()
  return (<Router>
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonBigCard />} />
      <Route path="/add-pokemon" element={<AddNewPoke />} />
      <Route path='/error/:errCode' element={<Error />} />
    </Routes>
  </Router>)
}

export default App
