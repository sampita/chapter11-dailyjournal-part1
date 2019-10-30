//Purpose: This file manages API requests

//fetch request to JSON server
const data = {
    getJournalData() {
        return fetch("http://localhost:3000/entries")
            .then(results => results.json())
    },

    postToApi(newJournalEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    }
}

export default data