const main = document.querySelector('main')

fetch('http://localhost:3000/pokemon_cards')
    .then(response => response.json())
    .then(cards => cards.map(card =>{
        // //create 
        // const cardDiv = document.createElement('div')
        // const name = document.createElement('h2')
        // const cardImage = document.createElement('img')
        
        // //muniplate 
        // name.textContent = `${card.name} (Pokedex #${card.pokedexNumber})`
        // cardImage.src = card.imageURLHiRes

        // //append 
        // main.append(cardDiv)
        // cardDiv.append(name, cardImage)
        
    }))