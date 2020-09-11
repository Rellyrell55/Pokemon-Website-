const main = document.querySelector("main");
const topNav = document.querySelector("div.topNav");
const sortbtn = document.getElementById("sortBtn");
const h1 = document.querySelector("h1");
console.log(sortbtn);

//Adding search on page
const searchP = new URLSearchParams(window.location.search);
const search = searchP.get("search");

const baseURL = "http://localhost:3000";
let pokemonURL = `${baseURL}/pokemon_cards`;
if (search) {
  pokemonURL = `${pokemonURL}?search=${search}`;
}

//Gives back array of pokemon cards
fetch(pokemonURL).then(parseJSON).then(displayCards);

//iterates through each card in array
//use if/else to switch between sort if they press sort button
function displayCards(cards) {
  cards.forEach(showCard);
}

function byPokedexNumber(a, b) {
  return a.pokedexNumber - b.pokedexNumber;
}

//Appends each card to HTML file
function showCard(card) {
  const cardDiv = document.createElement("div");
  const name = document.createElement("h2");
  const cardImage = document.createElement("img");
  const likeIcon = document.createElement("i");

  //muniplate
  cardDiv.className = "card";
  name.textContent = card.name;
  name.className = "pokemon";
  likeIcon.className = "far fa-heart";
  likeIcon.id = "btn";
  likeIcon.tagName = "btn";
  likeIcon.onclick = function () {
    if (likeIcon.classList.contains("far")) {
      likeIcon.classList.remove("far");
      likeIcon.classList.add("fas");
    } else {
      likeIcon.className.remove("fas");
      likeIcon.className.add("far");
    }
  };
  cardImage.src = card.imageURLHiRes;
  cardImage.id = "image";

  //append
  main.append(cardDiv);
  cardDiv.appendChild(likeIcon);
  cardDiv.append(name, cardImage);
}

//Pop-up for user sign in
document.getElementById("signIn").addEventListener("click", function () {
  document.querySelector(".signIn-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".signIn-modal").style.display = "none";
});

//Pop-up to create user
document.getElementById("create").addEventListener("click", function () {
  document.querySelector(".create-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".create-modal").style.display = "none";
});

function parseJSON(response) {
  return response.json();
}
