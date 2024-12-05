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

    // defining states
    const [pokeID, setPokeID] = useState(props.pokeID); //can contain both the pokemon name or it's ID
    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // handle the local storage arrays
    const addedPokemons = JSON.parse(localStorage.getItem("addedPokemons")).sort((pokeA, pokeB) => { return pokeA.id - pokeB.id }) || []; // retrieve all the pokémons that was edded by the user
    const availablePokadexIDs = [];
    const maxID = addedPokemons[addedPokemons.length - 1]?.id || 999;
    console.log("maxID: ", maxID);
    if (addedPokemons.length === 0) {
        availablePokadexIDs.push(1000);
    } else {
        const idArray = addedPokemons.map(currenPoke => { return currenPoke.id }).sort((a, b) => (a - b));
        for (let id = 1000; id <= (maxID + 1); id++) {
            if (!idArray.includes(id)) {
                availablePokadexIDs.push(id)
            }
        }
    } // define an array of all the available IDs with the last item is the highest ever ID
    console.log("addedPokemons: ", addedPokemons);

    // this function checks if a given string is made only by numerical characters.
    function isNumber(str) {
        const NUMBERS = "1234567890";

        for (let i = 0; i < str.length; i++) {
            if (!NUMBERS.includes(str[i])) {
                return false;
            }
        }
        return true;
    }

    // this function return the pokemon number in a 3 digit form
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

    // this function will delete a pokemon from the memory.
    // again... YOU ARE NOT A POKÉMON GOD. YOU CAN NOT DELETE REGULAR POKÉMONS!!!!
    //  but i will alow you again to be the pokémon god and delete only the ones you created.
    function deletePokemon(id) {
        const indexOfPoke = addedPokemons.findIndex(pokemon => { return pokemon.id === id });
        const updatedAddedPokemons = addedPokemons.filter((_, index) => { return index !== indexOfPoke });
        localStorage.setItem("addedPokemons", JSON.stringify(updatedAddedPokemons));
        if (updatedAddedPokemons.length === 0) {
            setPokeID(999);
        } else {
            if (indexOfPoke === 0) {
                setPokeID(updatedAddedPokemons[0].id);
            } else {
                setPokeID(updatedAddedPokemons[indexOfPoke - 1].id);
            }
        }
        alert("pokemon was deleted!")
    }

    // this function handle the search pokemon functionality
    function searchForPoke(ev) {
        ev.preventDefault();
        let newID = ev.target.newPokeID.value;
        ev.target.newPokeID.value = "";
        let doesPokeExist = false;;
        if (isNumber(newID)) {
            newID = Number(newID);
            if ((newID < 1000) && (newID >= 0)) { //if newID in 1...999 (normal pokemon)
                doesPokeExist = true;
            } else if (newID > 999) { //if newID in 999... (should be an added pokemon)
                doesPokeExist = ((newID <= maxID) && (!availablePokadexIDs.includes(newID)));
            }
            if (!doesPokeExist) {
                setError("404.. probably you tried to search a pokemon that doesn't exist")
            } else {
                setPokeID(newID);
            }
        } else { //typeof newID === "string"
            setPokeID(newID.toLowerCase())
        }
    }

    function changePokemon(id, indicator) {
        if (id < 999) {
            setPokeID(id + indicator);
        } else if ((pokeID === 999) && (indicator > 0)) {
            setPokeID(addedPokemons[0].id);
        } else if ((pokeID === addedPokemons[0].id) && (indicator < 0)) {
            setPokeID(999);
        } else {
            const currentIndex = addedPokemons.findIndex(currentPoke => { return currentPoke.id === id })
            setPokeID(addedPokemons[currentIndex + indicator].id)
        }

    }

    // this useEffect function will be executed when either 
    // the component will be mounted for the first time or
    // when pokeID will be changed
    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
                if (response.data.id > 999) {
                    throw new Error("Request failed with status code 404");
                } else {
                    setPokemonData(response.data);
                    setLoading(false);
                }
            } catch (err) {
                let valuesToSet;
                const propertyName = (typeof pokeID === "string") ? "name" : "id";
                const responsePokemon = addedPokemons.find(currentPoke => { return currentPoke[propertyName] === pokeID });
                if (responsePokemon) {
                    valuesToSet = [true, responsePokemon];
                } else {
                    valuesToSet = [false, err.message];
                }

                setLoading(false);
                if (valuesToSet[0]) {
                    setPokemonData(valuesToSet[1]);
                } else {
                    setError(valuesToSet[1]);
                }
            }
        }

        if (pokeID !== 0) {
            getPokemonData();
        }
    }, [pokeID])

    if (loading) {
        return "loading..."
    }

    if (error || (pokemonData == null)) {
        if (error === "Request failed with status code 404") {
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

    let pokemon;
    if (typeof pokeID === "number") {
        const newPokemonIndex = addedPokemons.findIndex(currenPoke => {
            return currenPoke.id === pokeID;
        });
        // alert(pokeID > 999)
        // alert(newPokemonIndex !== -1)
        if ((pokeID > 999) && (newPokemonIndex !== -1)) { // handling a pokemon that was manually added
            // alert(newPokemonIndex)
            pokemon = addedPokemons[newPokemonIndex];
        } else if (pokeID === 0) {
            return (<AddNewPoke newID={availablePokadexIDs.shift()} isNumber={isNumber} />)
        } else if ((pokeID > 0) && (pokeID < 1000)) {
            pokemon = pokemonData;
        } else {
            return "404.. probably you tried to search a pokemon that doesn't exist";
        }
        console.log("pokemon: ", pokemon);

        // if (pokeID <= 999) {
        //     pokemon = pokemonData;
        // } else if (newPokemon) {
        //     pokemon = newPokemon;
        // } else {
        //     return "404.. probably you tried to search a pokemon that doesn't exist";
        // }
    } else {
        pokemon = pokemonData;
    }
    const haveNext = (pokemon.id < maxID);

    return (<>
        <div className='pokemon-card'>
            {/* <HeaderNav /> */}
            <div className='arrows-div'>
                {(pokemon.id !== 1) && <button className="prev-poke-btn arrow-btn" onClick={() => { changePokemon(pokemon.id, -1) }}>previous pokadex pokemon</button>}
                {(haveNext) && <button className="next-poke-btn arrow-btn" onClick={() => { changePokemon(pokemon.id, 1) }}>next pokadex pokemon</button>}
            </div>
            <form onSubmit={(ev) => {
                searchForPoke(ev);
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
                    <button className={pokemon.id > 999 ? "" : "hidden"} onClick={() => { deletePokemon(pokemon.id) }}>delete pokemon</button>
                </div>
            </main>
            <button onClick={() => setPokeID(0)}>add new pokemon</button>
        </div>
    </>
    )
}

export default PokemonBigCard;
