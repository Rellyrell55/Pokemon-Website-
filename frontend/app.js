const main = document.querySelector("main");

var btn = document.getElementById('btn')

function Toggle(){
      if(btn.classList.contains()){
        btn.classList.remove('far');
        btn.classList.add("fas");
      }
}

fetch("http://localhost:3000/pokemon_cards")
  .then((response) => response.json())
  .then((cards) =>
    cards.map((card) => {
      //create
      const cardDiv = document.createElement("div");
      const name = document.createElement("h2");
      const cardImage = document.createElement("img");
      const likeIcon = document.createElement("i")

      //muniplate
      function Toggle(){
        if(btn.classList.contains()){
          btn.classList.remove('far');
          btn.classList.add("fas");
        }
  }
      cardDiv.className = "card";
      name.textContent = card.name;
      name.className = "pokemon";
      likeIcon.id = "btn"
      likeIcon.className = "far fa-heart"
      likeIcon.onclick = Toggle
      // like.type = "submit";
      // like.id = "pokemonLike";
      // like.value = likeIcon;
      cardImage.src = card.imageURLHiRes;
      cardImage.id = "image";

      //append
      main.append(cardDiv);
      cardDiv.append(name, likeIcon, cardImage);
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


// var btn = Document.getElementById('btn')
// function Toggle(){
//   if(btn.classList.contains()){
//     btn.classList.remove('far');
//     btn.classList.add("fas");
//   }
// }

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