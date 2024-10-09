function uploadCharacter(name, imgSrc) {
  console.log(name, imgSrc);
  const firstAPI = document.querySelector(".rick-morty");
  firstAPI.querySelector("span").textContent = name;
  firstAPI.querySelector("img").setAttribute("src", imgSrc);
}

fetch("https://rickandmortyapi.com/api/character/693")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    uploadCharacter(data.name, data.image);
  });

function uploadingJoke(joke) {
  console.log(joke);
  const secondAPI = document.querySelector(".chuck-norris");
  secondAPI.querySelector("span").textContent = joke;
}

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    uploadingJoke(data.value);
  });
