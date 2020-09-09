const main = document.querySelector("main");

fetch("http://localhost:3000/pokemon_cards")
  .then((response) => response.json())
  .then((cards) =>
    cards.map((card) => {
      //create
      const cardDiv = document.createElement("div");
      const name = document.createElement("h2");
      const cardImage = document.createElement("img");
      const like = document.createElement("input");

      //muniplate
      cardDiv.className = "card";
      name.textContent = card.name;
      name.className = "pokemon";
      like.value = "♥️";
      like.type = "submit";
      like.id = "pokemonLike";
      cardImage.src = card.imageURLHiRes;
      cardImage.id = "image";

      //append
      main.append(cardDiv);
      cardDiv.append(name, like, cardImage);
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
