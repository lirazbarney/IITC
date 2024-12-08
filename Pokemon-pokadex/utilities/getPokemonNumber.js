// this function return the pokemon number in a 3 digit form
export default function getPokemonNumber(num) {
    if (num < 10) {
        return `#00${num}`
    }
    if (num < 100) {
        return `#0${num}`
    } else {
        return `#${num}`
    }
}