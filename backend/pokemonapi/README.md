# README

# Pokemon Catch 'Em App

> Keep track of what Pokemon you are catching and what ones you have left to chatch!

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)


## General info

This Pokemon App allows you to search thourgh Pokemon cards and allows you to add them to your profile, so you can compare with your friends! You can also browse through all the base Pokemon cards.  

## Technologies

- Ruby
- ActiveRecord - version 6.0.1
- Sinatra - version 2.0.7
- Sinatra-activerecord - version 2.0.14
- SQLite3 - version 1.4.1
- pokemon_tcg_sdk
- HTML - version 5
- CSS - version 3 
- Vanilla JavaScript 
## Setup

To run this project, install it locally by cloning the GitHub repository and typing:
bundle install 
rails s (in the backend)
lite-server (in the frontend)

## Code Examples

JavaScript 

```
fetch(`http://localhost:3000/users/${id}`)
  .then((response) => response.json())
  .then( user => {
    const welcomediv = document.createElement('div')
    const ashQuote = document.createElement('p')

    welcomediv.id = "welcome"
    welcomediv.textContent = `Welcome ${user.username}`
    ashQuote.textContent = `"'Cause i always play to win!" -Ash Ketchum`
    ashQuote.id = "ashQuote"
    
    

    welcome.append(welcomediv)
    h1.append(ashQuote)

  })

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

```

## Features

- Creates user and adds to the database 
- Sign In and Sign Out
- User needs to have a correct password to long in
- Api for all of the Pokemon cards 
- A search function by name 
- Like tracker 
- Card animations (lift)
- Mutiple pages for navigation through the site 

## Status

Project is: finished with option to expand functionality and DRY out code.


## Contact

Created by [Terrell Cooper](https://www.linkedin.com/in/terrell-cooper-43252aaa/) and [Luis Garcia](https://www.linkedin.com/in/luis-garcia-83178b1b4/)
Feel free to contact us to talk music or talk code!!! 


