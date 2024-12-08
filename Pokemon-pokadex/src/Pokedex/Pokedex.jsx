// https://pokeapi.co/api/v2/pokemon?limit=_&offset=_$type=eelec
import axios from 'axios';

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import PokemonViewCard from "../Pokemon-view-card/Pokemon-view-card.jsx";

import "./Pokedex.css"
import PagesBtns from '../Pages-btns/Pages-btns.jsx';
import SearchPokemon from '../Search-Pokemon/Search-Pokemon.jsx';
import HeaderNav from '../HeaderNav/HeaderNav.jsx';

const LIMIT = 50;

function Pokedex() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(Number(queryParams.get("page")) || 1);
    const [pokedexData, setPokedexData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const page = Number(queryParams.get("page")) || 1;
    console.log(page);
    const limit = (page === 20) ? LIMIT - 1 : LIMIT;
    const offset = (page - 1) * LIMIT;

    if (page > 20) {
        navigate("/error/404");
    }

    useEffect(() => {
        const queryPage = Number(searchParams.get("page"));
        if (queryPage && queryPage !== page) {
            setPage(queryPage);
        }
    }, [searchParams, page])

    useEffect(() => {
        const getPokedexData = async () => {
            try {

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                console.log(response.data.results);
                setPokedexData(response.data.results);
                setLoading(false);
                setPage(page)
            } catch (err) {
                setLoading(false);
                setError(err);
            }

        }
        getPokedexData();
    }, [page])

    if (loading) {
        return "loading..."
    }

    return (<>
        <HeaderNav pathEndPoint="/" />
        <PagesBtns currentPage={page} />
        <div className='pokedex-div'>
            {pokedexData.map(poke => <PokemonViewCard name={poke.name} key={poke.name} />)}
        </div>
        <PagesBtns currentPage={page} /> </>);

}
export default Pokedex;
