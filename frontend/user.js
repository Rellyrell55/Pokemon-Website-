const main = document.querySelector("main");
const topNav = document.querySelector("div.topNav")
const sortbtn = document.querySelector("button.sortBtn")
const h1 = document.querySelector('h1')
const welcome = document.querySelector("div.welcome")
console.log(welcome)



function byPokedexNumber(a, b) {
  return a.pokedexNumber - b.pokedexNumber
}

function sortedCards(cards){
  cards.sort(byPokedexNumber)
}

fetch("http://localhost:3000/pokemon_cards")
  .then((response) => response.json())
  .then((cards) =>
    cards.forEach((card) => {
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
const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/users/${id}`)
  .then((response) => response.json())
  .then( user => {
    const welcomediv = document.createElement('div')
    const ashQuote = document.createElement('p')

    welcomediv.id = "welcome"
    welcomediv.textContent = `Welcome ${user.username}`
    ashQuote.textContent = `"'Cause I always play to win!" -Ash Ketchum`
    ashQuote.id = "ashQuote"
    
    

    welcome.append(welcomediv)
    h1.append(ashQuote)

  })
