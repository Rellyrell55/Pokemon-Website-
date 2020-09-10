const main = document.querySelector("main");

function dynamicsort(property, order) {
  let sort_order = 1;
  if (order === "desc") {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  };
}

fetch("http://localhost:3000/pokemon_cards")
  .then((response) => response.json())
  .then((cards) => cards.sort(dynamicsort("pokedexNumber", "desc")));

fetch("http://localhost:3000/pokemon_cards")
  .then((response) => response.json())
  .then((cards) =>
    cards.map((card) => {
      //create
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
    })
  );

//   let btn = document.getElementById('btn')
//   console.log(btn)
//     function Toggle(){
//       if(btn.classList.contains('far')){
//         btn.classList.remove('far');
//         btn.classList.add('fas');
//       }else{
//         btn.className.remove('fas')
//           btn.className.add('fas')
//       }
// }

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
