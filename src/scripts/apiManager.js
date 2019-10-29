//Purpose: This file manages API requests

const getDataFromAPI = () => {
    return fetch("http://localhost:3000/entries")
    .then(results => results.json())
}
