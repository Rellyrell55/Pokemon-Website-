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
      name.textContent = `${card.name} (Pokedex #${card.pokedexNumber})`;
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
