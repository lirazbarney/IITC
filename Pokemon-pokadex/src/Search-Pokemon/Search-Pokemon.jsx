import isNumber from "../../utilities/isNumber";

import { useNavigate } from "react-router-dom";

export default function SearchPokemon() {

    const navigate = useNavigate();

    // this function handle the search pokémon functionality
    function searchForPoke(ev) {
        ev.preventDefault();
        let newID = ev.target.newPokeID.value;
        ev.target.newPokeID.value = "";
        if (isNumber(newID)) { // typeof newID = number
            navigate(`/pokemon/${newID}`);
        } else { //typeof newID = "string"
            navigate(`/pokemon/${newID.toLowerCase()}`);
        }
    }

    return <>
        <form onSubmit={(ev) => searchForPoke(ev)}>
            <input name='newPokeID' placeholder='pokemon name or ID' required />
            <button>search Pokémon</button>
        </form>
    </>
}