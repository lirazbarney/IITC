import { useState, useEffect } from 'react'
import axios from 'axios';
import HeaderNav from './HeaderNav';
import "./Pokemon-big-card.css"

const BASE_URL = "https://pokeapi.co/api/v2/"
//https://pokeapi.co/api/v2/pokemon?limit=_&offset=_

function PokemonBigCard(props) {
    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/25/${props.pokeID}`);
                setPokemonData(response.data); // Store the fetched data in state
                setLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                setError(err.message); // Handle errors
                setLoading(false);
            }
        }

        getPokemonData();
    }, [])

    if (loading) {
        return "loading..."
    }

    if (error) {
        return error
    }
    const pokemonImgSrc = pokemonData.sprites.front_default;

    if (pokemonData == null) {
        return "bad :("
    }
    console.log(pokemonData)

    return (
        <>
            <div className='pokemon-card'>
                <HeaderNav />
                <header>
                    <div className='pokemon-info-div'>
                        <h1 className='pokemon-name'>{pokemonData.name}</h1>
                        <ul className='pokemon-types-ul'>
                            {pokemonData.types.map(pokeType => {
                                return <li key={pokeType.type.name}>{pokeType.type.name}</li>
                            })}
                        </ul>
                    </div>
                    <div className='pokemon-number-div'>#{getPokemonNumber(pokemonData.id)}</div>
                </header>
                <main>
                    <img src={pokemonImgSrc} alt={pokemonData.name} />
                    <div className='stats-div'>
                        <ul>
                            <li>base experience: {pokemonData.base_experience}</li>
                            <li>height: {pokemonData.height * 10}cm</li>
                            <li>weight: {pokemonData.weight / 10}kg</li>
                            {pokemonData.stats.map(currentStat => {
                                return <li key={currentStat.stat.name}>{currentStat.base_stat} {currentStat.stat.name}</li>
                            })}
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}

export default PokemonBigCard
