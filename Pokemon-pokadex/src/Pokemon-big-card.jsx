import { useState, useEffect } from 'react'
import axios from 'axios';
import "./Pokemon-big-card.css"
import HeaderNav from './HeaderNav';
import AddNewPoke from './Add-new-poke';

// const BASE_URL = "https://pokeapi.co/api/v2/"
// https://pokeapi.co/api/v2/pokemon?limit=_&offset=_

function PokemonBigCard(props) {
    console.log("");
    // localStorage.clear();

    //defining states
    const [pokeID, setPokeID] = useState(props.pokeID); //can contain both the pokemon name or it's ID
    console.log(pokeID, typeof pokeID)
    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addedPokemons = JSON.parse(localStorage.getItem("addedPokemons")) || [];

    const minIndex = 1;
    let maxIndex = 999 + addedPokemons.length;

    //this function checks if a given string is made only by numerical characters.
    function isNumber(str) {
        const NUMBERS = "1234567890";

        for (let i = 0; i < str.length; i++) {
            if (!NUMBERS.includes(str[i])) {
                return false;
            }
        }
        return true;
    }

    //this function return the pokemon number in a 3 digit form
    function getPokemonNumber(num) {
        if (num < 10) {
            return `00${num}`
        }
        if (num < 100) {
            return `0${num}`
        } else {
            return `${num}`
        }
    }

    // this useEffect function will be executed when either 
    // the component will be mounted for the first time or
    // when pokeID will be changed
    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
                setPokemonData(response.data);
                setLoading(false);
            } catch (err) {
                let valuesToSet;
                alert(typeof pokeID)
                if (typeof pokeID === "string") {
                    const responsePokemon = addedPokemons.find(currentPoke => {
                        return currentPoke.name === pokeID
                    })
                    console.log(responsePokemon);
                    if (responsePokemon) {
                        valuesToSet = [true, responsePokemon];
                        // setPokemonData(responsePokemon);
                        // setLoading(false)
                    } else {
                        valuesToSet = [false, err.message];
                        // setError(err.message);
                        // setLoading(false);
                    }
                } else {
                    alert("hello world")
                    valuesToSet = [false, err.message];
                }
                console.log(valuesToSet);
                setLoading(false);
                if (valuesToSet[0]) {
                    setPokemonData(valuesToSet[1]);
                } else {
                    setError(valuesToSet[1]);
                }
            }
        }
        alert(pokeID)
        if (pokeID !== 0) {
            getPokemonData();
        }

        // if (typeof pokeID === "number") {
        //     if ((pokeID > 0) && (pokeID < maxIndex)) {
        //         getPokemonData();
        //     } else {
        //         if (pokeID > 999) {
        //             const index = pokeID - 1000;
        //             console.log(addedPokemons[index]);
        //         }
        //     }
        // } else {
        //     getPokemonData();
        // }
    }, [pokeID])

    console.log(loading, error);

    if (loading) {
        return "loading..."
    }

    if (error || (pokemonData.id > maxIndex) || (pokemonData == null)) {
        if ((error === "Request failed with status code 404") || pokemonData.id > maxIndex) {
            return "404.. probably you tried to search a pokemon that doesn't exist";
        }
        return error || "pokemonData is empty"
    }

    // add a new pokémon for some reason. 
    {// YOU ARE NOT THE POKÉMON GOD. 
        // YOU CAN NOT ADD NEW POKÉMONS JUST BECAUSE YOU WANT TO.
        // but for the CRUD sh*t... i will allow you to be pokémon god.
        // but just for now. 
    }
    if (pokeID === 0) {
        return (<AddNewPoke newID={maxIndex + 1} isNumber={isNumber} />)
    }

    let pokemon;
    if (typeof pokeID === "number") {
        pokemon = (pokeID <= 999) ? pokemonData : addedPokemons[pokeID - 1000];
    } else {
        pokemon = pokemonData;
        console.log(pokemon);
    }
    return (
        <>
            <div className='pokemon-card'>
                {/* <HeaderNav /> */}
                <div className='arrows-div'>
                    {(pokemon.id !== minIndex) && <button className="prev-poke-btn arrow-btn" onClick={() => { setPokeID(pokemon.id - 1) }}>previous pokadex pokemon</button>}
                    {(pokemon.id !== maxIndex) && <button className="next-poke-btn arrow-btn" onClick={() => { setPokeID(pokemon.id + 1) }}>next pokadex pokemon</button>}
                </div>
                <form onSubmit={(ev) => {
                    ev.preventDefault();
                    let newID = ev.target.newPokeID.value;
                    ev.target.newPokeID.value = "";
                    if (isNumber(newID)) {
                        newID = Number(newID);
                    }
                    setPokeID(newID);
                }}>
                    <input name='newPokeID' placeholder='pokemon name or ID' required />
                    <button>search pokemon</button>
                </form>
                <header>
                    <div className='pokemon-info-div'>
                        <h1 className='pokemon-name'>{pokemon.name}</h1>
                        <ul className='pokemon-types-ul'>
                            {pokemon.types.map(pokeType => {
                                return <li key={pokeType.type.name}>{pokeType.type.name}</li>
                            })}
                        </ul>
                    </div>
                    <div className='pokemon-number-div'>#{getPokemonNumber(pokemon.id)}</div>
                </header>
                <main>
                    <img src={pokemon.sprites?.front_default || null} alt={pokemon.name} />
                    <div className='stats-div'>
                        <ul>
                            <li>base experience: {pokemon.base_experience}</li>
                            <li>height: {pokemon.height * 10}cm</li>
                            <li>weight: {pokemon.weight / 10}kg</li>
                            {pokemon.stats.map(currentStat => {
                                return <li key={currentStat.stat.name}>{currentStat.base_stat} {currentStat.stat.name}</li>
                            })}
                        </ul>
                    </div>
                </main>
                <button onClick={() => setPokeID(0)}>add new pokemon</button>
            </div>
        </>
    )
}

export default PokemonBigCard;
