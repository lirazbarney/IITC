import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getPokemonNumber from "../../utilities/getPokemonNumber";

import "./Pokemon-view-card.css"

function PokemonViewCard(props) {

    const [pokeData, setPokeData] = useState({});
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const getPokeData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
                setLoading(false);
                setPokeData(response.data);
            } catch (err) {
                setError(error)
                setLoading(false);
            }
        }
        getPokeData()
    }, [])

    if (Loading) {
        return "loading";
    }

    if (error) {
        return props.name;
    }
    return <>
        <Link to={`/pokemon/${props.name}`} className="card">
            <div className={`${pokeData.types[0].type.name} poke-card`}>
                <h1>{getPokemonNumber(pokeData.id)} {pokeData.name.split("-").join(" ")}</h1>
                <div className="poke-info">

                    <div className="types-div">
                        {pokeData.types.map((currentType) => {
                            const typeName = currentType.type.name;
                            return <img src={`../../public/names/${typeName}.png`} alt={`${typeName} type`} key={typeName} />
                        })}
                    </div>
                    <img className="poke-img" src={pokeData.sprites.front_default || null} alt={`${pokeData.name} photo`} />
                </div>
            </div>

        </Link >
    </>
}

export default PokemonViewCard;