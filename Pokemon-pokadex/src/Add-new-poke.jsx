
function AddNewPoke({ newID, isNumber }) {

    //this function checks if the form is completed and all the fields had been answered.
    // function formIsComplete(formData) {
    //     for (let i = 0; i < formData.length; i++) {
    //         if (formData[i].value == null)
    //     }
    // }

    console.log(newID);
    function addThePokemon(ev) {
        const evTarget = ev.target;
        if (isNumber(evTarget.pokemonName.value)) {
            ev.preventDefault();
            alert("name can not be number and must contain at least one non-numerical character!")
            // } else if (!formIsComplete(evTarget)) {
            //     ev.preventDefault();
            //     alert("please fill all the fields!")
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

            const types = evTarget.pokemonTypes.value.split(", ");
            const stats = [{ name: "hp", value: evTarget.pokemonHP.value },
            { name: "attack", value: evTarget.pokemonAttack.value },
            { name: "defense", value: evTarget.pokemonDefense.value },
            { name: "special-attack", value: evTarget.pokemonSpecialAttack.value },
            { name: "special-defense", value: evTarget.pokemonSpecialDefense.value },
            { name: "speed", value: evTarget.pokemonSpeed.value }]
            const addedPokemons = JSON.parse(localStorage.getItem("addedPokemons")) || [];
            addedPokemons.push({
                name: evTarget.pokemonName.value,
                id: Number(newID),
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
            console.log(addedPokemons);
            localStorage.setItem("addedPokemons", JSON.stringify(addedPokemons));
            alert(`the new pokemon was added with the ID of ${newID}`);
        }
    }
    return <form onSubmit={(ev) => addThePokemon(ev)}>
        <label htmlFor="pokemonName">pokemon name:</label>
        <input name="pokemonName" id="pokemonName" required /> <br />
        <label htmlFor="pokemonTypes">pokemon types:</label>
        <input name="pokemonTypes" id="pokemonTypes" required /> <br />
        <label htmlFor="pokemonBaseXP">pokemon base experience:</label>
        <input type="number" min={0} name="pokemonBaseXP" id="pokemonBaseXP" required /> <br />
        <label htmlFor="pokemonHeight">pokemon height:</label>
        <input type="number" min={0} name="pokemonHeight" id="pokemonHeight" required /> <br />
        <label htmlFor="pokemonWeight">pokemon weight:</label>
        <input type="number" min={0} name="pokemonWeight" id="pokemonWeight" required /> <br />
        <label htmlFor="pokemonHP">pokemon hp:</label>
        <input type="number" min={0} name="pokemonHP" id="pokemonHP" required /> <br />
        <label htmlFor="pokemonAttack">pokemon attack:</label>
        <input type="number" min={0} name="pokemonAttack" id="pokemonAttack" required /> <br />
        <label htmlFor="pokemonDefense">pokemon defense:</label>
        <input type="number" min={0} name="pokemonDefense" id="pokemonDefense" required /> <br />
        <label htmlFor="pokemonSpecialAttack">pokemon special attack:</label>
        <input type="number" min={0} name="pokemonSpecialAttack" id="pokemonSpecialAttack" required /> <br />
        <label htmlFor="pokemonSpecialDefense">pokemon special defense:</label>
        <input type="number" min={0} name="pokemonSpecialDefense" id="pokemonSpecialDefense" required /> <br />
        <label htmlFor="pokemonSpeed">pokemon speed</label>
        <input type="number" min={0} name="pokemonSpeed" id="pokemonSpeed" required /> <br />
        <button>save the new pokemon</button>
    </form>
}

export default AddNewPoke