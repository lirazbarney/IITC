import SearchPokemon from "../Search-Pokemon/Search-Pokemon";
import "./HeaderNav.css"

import { Link } from "react-router-dom"

export default function HeaderNav({ pathEndPoint }) {

    let isHome = false;
    let isAddNew = false;

    switch (pathEndPoint) {
        case "/":
            isHome = true;
            break;
        case "/add-pokemon":
            isAddNew = true;
            break
    }

    return (<>
        <header className="header-nav">
            <div>
                <Link to="/"><span className={`${isHome ? "active" : "clickable-span"} span-style`}>Pokédex</span></Link>
                <span className="span-style"> | </span>
                <Link to="/add-pokemon"><span className={`${isAddNew ? "active" : "clickable-span"} span-style`}> add new Pokémon</span></Link>
            </div>
            <SearchPokemon />
        </header >
    </>)
}