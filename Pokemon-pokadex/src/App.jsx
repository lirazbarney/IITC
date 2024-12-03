import { useState, useEffect } from 'react'
import "./App.css"
import PokemonBigCard from './Pokemon-big-card'


function App() {
  const [isInPokadex, setIsInPokadex] = useState(false);
  if (isInPokadex) {
    return (<></>);
  }
  else {
    return (<>
      <PokemonBigCard pokeID={1} />
    </>);
  }
}

export default App
