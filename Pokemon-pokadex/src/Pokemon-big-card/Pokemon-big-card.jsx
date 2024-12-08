import axios from 'axios';

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import "./Pokemon-big-card.css"

import Loading from '../Loading/Loading.jsx'

import isNumber from '../../utilities/isNumber.js';
import getPokemonNumber from '../../utilities/getPokemonNumber.js';
import SearchPokemon from '../Search-Pokemon/Search-Pokemon.jsx';
import HeaderNav from '../HeaderNav/HeaderNav.jsx';

export default function PokemonBigCard() {

    console.log("");

    // variables, constants and state configuration
    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    let pokemon;

    // id
    let { id } = useParams();
    let isString = true;
    if (isNumber(id)) {
        //isNumber() is a function that check if all the characters in a given string are digits
        id = +id;
        isString = false;
    }
    console.log("id: ", id);

    // added Pokémons
    let addedPokemons = JSON.parse(localStorage.getItem("addedPokemons")) || []; // retrieve all the Pokémons that was added by the user (or an empty array as default)
    if (addedPokemons.length > 1) { //sorting it by id
        addedPokemons = addedPokemons.sort((pokeA, pokeB) => { return pokeA.id - pokeB.id })
    }
    console.log("addedPokemons: ", addedPokemons);


    //max ID
    const maxID = addedPokemons[addedPokemons.length - 1]?.id || 999; // the highest ID of any available pokémon at the movement
    console.log("maxID: ", maxID);

    // this function will delete a pokemon from the memory.
    // again... YOU ARE NOT A POKÉMON GOD, SO YOU CAN NOT DELETE REGULAR POKÉMONS!!!!
    //  but i will alow you (again) to be the Pokémon god and to delete some... BUT only the ones you created.
    function deletePokemonHandler(currentID) {
        const indexOfPoke = addedPokemons.findIndex(pokemon => { return pokemon.id === currentID });
        const availablePokadexIDs = JSON.parse(localStorage.getItem("availablePokadexIDs")) || [];
        console.log("availablePokadexIDs: ", availablePokadexIDs);

        addedPokemons.splice(indexOfPoke, 1); //remove the current Pokémon
        localStorage.setItem("addedPokemons", JSON.stringify(addedPokemons));


        availablePokadexIDs.push(currentID)
        if (availablePokadexIDs.length > 1) {
            availablePokadexIDs.sort((a, b) => (a - b));
            const lastIndex = availablePokadexIDs.length - 1;
            if ((availablePokadexIDs[lastIndex] - availablePokadexIDs[lastIndex - 1]) === 1) {
                availablePokadexIDs.pop();
            }
        }
        console.log("availablePokadexIDs: ", availablePokadexIDs);
        localStorage.setItem("availablePokadexIDs", JSON.stringify(availablePokadexIDs));

        alert("pokemon was deleted!")
        if (indexOfPoke === 0) {
            navigate(`/pokemon/999`);
        } else {
            navigate(`/pokemon/${addedPokemons[indexOfPoke - 1].id}`)
        }
    }

    function changePokemon(currentID, indicator) {
        let newID;
        if (currentID < 999) {
            newID = currentID + indicator;
        } else if (currentID === 999) {
            if (indicator > 0) {
                newID = addedPokemons[0].id;
            } else {
                newID = 998
            }
        } else if ((currentID === addedPokemons[0].id) && (indicator < 0)) {
            newID = 999;
        } else {
            const currentIndex = addedPokemons.findIndex(currentPoke => { return currentPoke.id === currentID });
            newID = addedPokemons[currentIndex + indicator].id
        }
        navigate(`/pokemon/${newID}`);
    }

    // this useEffect function will be executed when either 
    // the component will be mounted for the first time or
    // when pokeID will be changed
    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemonData(response.data);
                setLoading(false);
            } catch (err) {
                const propertyName = isString ? "name" : "id";
                const newPokemon = addedPokemons.find(currentPoke => { return currentPoke[propertyName] === id })
                if (newPokemon) {
                    setPokemonData(newPokemon);
                } else {
                    navigate(`/error/404`);
                }
                setLoading(false);
            }



        }
        getPokemonData();
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (error || (pokemonData == null)) {
        navigate(`/error/500`);
    }

    // determine the fate of the "pokemon" variable - rather the object return from the API or the Pokémon object you built
    if (!isString) { // id is number

        const newPokemonIndex = addedPokemons.findIndex(currenPoke => {
            return currenPoke.id === id;
        });

        if ((id > 999) && (newPokemonIndex !== -1)) { // handling a Pokémon that was manually added (id is in 1000... and can be found on a Pokémon at that time)
            pokemon = addedPokemons[newPokemonIndex];
        } else if ((id > 0) && (id < 1000)) { // handling a normal Pokémon (id is in 1...999)
            pokemon = pokemonData;
        } else { // invalid id
            navigate(`/error/404`);
        }
        console.log("pokemon: ", pokemon);

    } else { // id is string
        pokemon = pokemonData;
    }

    return (<>

        <HeaderNav />
        <div className={`pokemon-card ${pokemon.types[0].type.name}-type`}>
            <Link to="/"><button>return to pokedex</button></Link >

            {/* the conditional rendering of the previous and the next Pokadex Pokémons buttons */}
            <div className='arrows-div' >
                {(pokemon.id > 1) && <button className="prev-poke-btn arrow-btn" onClick={() => { changePokemon(pokemon.id, -1) }}>previous Pokadex Pokémon</button>
                }
                {(pokemon.id < maxID) && <button className="next-poke-btn arrow-btn" onClick={() => { changePokemon(pokemon.id, 1) }}>next Pokadex Pokémon</button>}
            </div >

            <SearchPokemon />

            <header>
                <div className='pokemon-info-div'>
                    <h1 className='pokemon-name'>{pokemon.name}</h1>
                    <div className='pokemon-types-div'>
                        {pokemon.types.map(pokeType => {
                            const typeName = pokeType.type.name;
                            return <img className="type-img" src={`../../public/names/${typeName}.png`} alt={`${typeName} type`} key={typeName} />
                        })}
                    </div>
                </div>
                <span className='pokemon-number-span'>{getPokemonNumber(pokemon.id)}</span>
            </header>

            {/* all the pokemon stats and image */}
            <main>
                <img className='poke-img' src={pokemon.sprites?.front_default || null} alt={`the pokemon of ${pokemon.name}`} />
                <div className='stats-div'>
                    <ul>
                        <li>base experience: {pokemon.base_experience}</li>
                        <li>height: {pokemon.height * 10}cm</li>
                        <li>weight: {pokemon.weight / 10}kg</li>
                        {pokemon.stats.map(currentStat => {
                            return <li key={currentStat.stat.name}>{currentStat.base_stat} {currentStat.stat.name}</li>
                        })}
                    </ul>
                    <button className={pokemon.id > 999 ? "" : "hidden"} onClick={() => {
                        deletePokemonHandler(pokemon.id);
                    }}>delete pokemon</button>
                </div>
            </main>

            <Link to="/add-pokemon">
                <button>add new pokemon</button>
            </Link>
        </div >
    </>
    )
}
