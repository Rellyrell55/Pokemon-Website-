    fetch ("http://localhost:3000/users")
        .then (response => response.json())
        .then (users => users.find( user => {
            const username = window.prompt('enter username')
        }))