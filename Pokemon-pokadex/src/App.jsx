import { useState, useEffect } from 'react'
import "./App.css"
import PokemonBigCard from './Pokemon-big-card'
import axios from 'axios';


function App() {
  const [isInPokadex, setIsInPokadex] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //https://pokeapi.co/api/v2/pokemon?limit=_&offset=_

  // useEffect(() => {
  //   const fetchPokadex = async () => {
  //     try {
  //       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`);
  //       console.log(response.data.results);
  //       // setPokemonData(response.data);
  //       // setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   }

  //   fetchPokadex()
  // }, [])
  // if (loading) {
  //   return "loading..."
  // }

  // if (error) {
  //   return error
  // }
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
