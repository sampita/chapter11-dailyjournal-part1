//Purpose: This file manages API requests

//fetch request to JSON server
const data = {
    getJournalData () {
        return fetch("http://localhost:3000/entries")
        .then(results => results.json())
  }
}
  export default data
