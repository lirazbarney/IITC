import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

interface Joke {
  id: String;
  baseline: String;
  punchline: String;
}

function App() {

  const [joke, setJoke] = useState<Joke>({
    id: "",
    baseline: "",
    punchline: "",
  })

  async function  fetchJoke() {
    const res = await axios.get("http://localhost:3000/api/v1/jokes/random");
    console.log(res.data);
    setJoke(res.data)
  }

  useEffect(() => {fetchJoke()}, [] )

  return (
    <>
    <div>
      <span>{joke.baseline}</span> <br />
      <span>{joke.punchline}</span> 
    </div> <br />
    <button onClick={fetchJoke}>Get Random Joke</button>
    </>
  )
}

export default App
