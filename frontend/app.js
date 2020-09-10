const main = document.querySelector("main");

fetch("http://localhost:3000/pokemon_cards")
  .then((response) => response.json())
  .then((cards) =>
    cards.map((card) => {
      //create
      const cardDiv = document.createElement("div");
      const name = document.createElement("h2");
      const cardImage = document.createElement("img");
      const iconDiv = document.createElement("div");

      //muniplate

      cardDiv.className = "card";
      name.textContent = card.name;
      name.className = "pokemon";
      iconDiv.innerHTML = `<i onclick="toggle()" class="far fa-heart" id="bttn"></i>`;
      cardImage.src = card.imageURLHiRes;
      cardImage.id = "image";

      //append
      main.append(cardDiv);
      cardDiv.appendChild(iconDiv);
      cardDiv.append(name, cardImage);
    })
  );

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

//Like Function

// document.querySelector("input#pokemonLike").addEventListener("click", function(){
//   console.log("hello")
//   fetch(`http://localhost:3000/pokemon_cards/${id}`)
//   // .then(response => response.json())
//   // .then(card => {
//     // pokemonh2= document.querySelector(".pokemon")

//   //   const like = document.createElement("input");

//   //   like.value = "♥️";
//   //   like.type = "submit";
//   //   like.id = "pokemonLike";

//   //   h2.pokemon.append(like)

//   // })
// })
