import "./Add-new-poke.css"

import { useNavigate } from "react-router-dom";

import isNumber from "../../utilities/isNumber";
import HeaderNav from "../HeaderNav/HeaderNav";
import { useEffect, useState } from "react";

export default function AddNewPoke() {

    // YOU ARE NOT THE POKÉMON GOD. 
    // YOU CAN NOT ADD NEW POKÉMONS JUST BECAUSE YOU WANT TO.
    // but for the CRUD sh*t... i will allow you to be the Pokémon god.
    // but just for now. 

    const navigate = useNavigate();
    const availibleIDs = JSON.parse(localStorage.getItem("availablePokadexIDs")) || [1000];
    const newID = availibleIDs.shift();
    console.log("newID: ", newID);


    const [formData, setFormData] = useState({
        pokeName: "",
        type1: "",
        type2: "",
        baseXP: 0,
        height: 0,
        weight: 0,
        hp: 0,
        attack: 0,
        defense: 0,
        specialA: 0,
        specialD: 0,
        speed: 0
    });

    function addThePokemon(ev) {
        ev.preventDefault();
        const evTarget = ev.target;
        if (isNumber(evTarget.pokemonName.value)) {
            alert("name can not be number and must contain at least one non-numerical character!");
        } else {

            // console.log("name: ", evTarget.pokemonName.value);
            // console.log("id: ", newID);
            // console.log("types: ", evTarget.pokemonTypes.value);
            // console.log("base xp: ", evTarget.pokemonBaseXP.value);
            // console.log("height: ", evTarget.pokemonHeight.value);
            // console.log("weight: ", evTarget.pokemonWeight.value);
            // console.log("hp: ", evTarget.pokemonHP.value);
            // console.log("attack: ", evTarget.pokemonAttack.value);
            // console.log("defense: ", evTarget.pokemonDefense.value);
            // console.log("special-defense: ", evTarget.pokemonSpecialAttack.value);
            // console.log("special-defense: ", evTarget.pokemonSpecialDefense.value);
            // console.log("speed: ", evTarget.pokemonSpeed.value);

            // inserting the new pokémon
            const types = [evTarget.pokemonType1.value];
            if ((evTarget.pokemonType2.value !== "") && (evTarget.pokemonType2.value !== types[0])) {
                types.push(evTarget.pokemonType2.value);
            }
            const stats = [
                { name: "hp", value: evTarget.pokemonHP.value },
                { name: "attack", value: evTarget.pokemonAttack.value },
                { name: "defense", value: evTarget.pokemonDefense.value },
                { name: "special-attack", value: evTarget.pokemonSpecialAttack.value },
                { name: "special-defense", value: evTarget.pokemonSpecialDefense.value },
                { name: "speed", value: evTarget.pokemonSpeed.value }];
            const addedPokemons = JSON.parse(localStorage.getItem("addedPokemons")) || [];
            addedPokemons.push({
                name: evTarget.pokemonName.value,
                id: +newID,
                types: types.map((currentType, index) => {
                    return {
                        slot: (index + 1),
                        type: { name: currentType, url: null },
                    }
                }),
                base_experience: evTarget.pokemonBaseXP.value,
                height: (evTarget.pokemonHeight.value / 10),
                weight: (evTarget.pokemonWeight.value * 10),
                stats: stats.map(currentStat => {
                    return {
                        base_stat: currentStat.value,
                        effort: 0,
                        stat: {
                            name: currentStat.name,
                            url: null,
                        },
                    }
                })
            });
            console.log("addedPokemons: ", addedPokemons);
            localStorage.setItem("addedPokemons", JSON.stringify(addedPokemons));

            //handling the availibleIDs 
            if (availibleIDs.length === 0) {
                localStorage.setItem("availablePokadexIDs", JSON.stringify([(newID + 1)]));
            } else {
                localStorage.setItem("availablePokadexIDs", JSON.stringify(availibleIDs));
            }

            //get to the new pokemon page
            alert(`the new pokemon was added with the ID of ${newID}`);
            navigate(`/pokemon/${newID}`);
        }
    }

    function hanleTypeChange(ev) {
        const inputs = document.querySelectorAll("input");
        console.log(ev.target.value);

        setFormData({
            pokeName: document.querySelector("#pokemonName").value,
            type1: ev.target.value,
            type2: "",
            baseXP: document.querySelector("#pokemonBaseXP").value,
            height: document.querySelector("#pokemonHeight").value,
            weight: document.querySelector("#pokemonWeight").value,
            hp: document.querySelector("#pokemonHP").value,
            attack: document.querySelector("#pokemonAttack").value,
            defense: document.querySelector("#pokemonDefense").value,
            specialA: document.querySelector("#pokemonSpecialAttack").value,
            specialD: document.querySelector("#pokemonSpecialDefense").value,
            speed: document.querySelector("#pokemonSpeed").value,
        })
    }

    return (<>
        <HeaderNav pathEndPoint="/add-pokemon" />
        <form onSubmit={(ev) => addThePokemon(ev)}>
            <label htmlFor="pokemonName">pokemon name:</label>
            <input name="pokemonName" id="pokemonName" value={formData.pokeName} required /> <br />

            <label htmlFor="pokemonType1">pokemon type (first slot):</label>
            <select name="pokemonType1" id="pokemonType1" value={formData.type1} onChange={(ev) => { hanleTypeChange(ev) }} required>
                <option value="" disabled selected>Select a type</option>
                <option value="normal">Normal</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="ice">Ice</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="flying">Flying</option>
                <option value="psychic">Psychic</option>
                <option value="bug">Bug</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
            </select> <br />

            <label htmlFor="pokemonType2">pokemon type (second slot):</label>
            <select name="pokemonType2" id="pokemonType2" value={formData.type2}>
                <option value="" disabled selected>Select a type</option>
                <option value="normal">Normal</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="ice">Ice</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="flying">Flying</option>
                <option value="psychic">Psychic</option>
                <option value="bug">Bug</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
            </select> <br />

            <label htmlFor="pokemonBaseXP">pokemon base experience:</label>
            <input type="number" min={0} name="pokemonBaseXP" id="pokemonBaseXP" value={formData.baseXP} required /> <br />

            <label htmlFor="pokemonHeight">pokemon height:</label>
            <input type="number" min={0} name="pokemonHeight" id="pokemonHeight" value={formData.height} required /> <br />

            <label htmlFor="pokemonWeight">pokemon weight:</label>
            <input type="number" min={0} name="pokemonWeight" id="pokemonWeight" value={formData.weight} required /> <br />

            <label htmlFor="pokemonHP">pokemon hp:</label>
            <input type="number" min={0} name="pokemonHP" id="pokemonHP" value={formData.hp} required /> <br />

            <label htmlFor="pokemonAttack">pokemon attack:</label>
            <input type="number" min={0} name="pokemonAttack" id="pokemonAttack" value={formData.attack} required /> <br />

            <label htmlFor="pokemonDefense">pokemon defense:</label>
            <input type="number" min={0} name="pokemonDefense" id="pokemonDefense" value={formData.defense} required /> <br />

            <label htmlFor="pokemonSpecialAttack">pokemon special attack:</label>
            <input type="number" min={0} name="pokemonSpecialAttack" id="pokemonSpecialAttack" value={formData.specialA} required /> <br />

            <label htmlFor="pokemonSpecialDefense">pokemon special defense:</label>
            <input type="number" min={0} name="pokemonSpecialDefense" id="pokemonSpecialDefense" value={formData.specialD} required /> <br />

            <label htmlFor="pokemonSpeed">pokemon speed</label>
            <input type="number" min={0} name="pokemonSpeed" id="pokemonSpeed" value={formData.speed} required /> <br />

            <img src={`../../public/symbols/${formData.type1}` || null} alt="" />

            <button>save the new pokemon</button>
        </form > </>)
}