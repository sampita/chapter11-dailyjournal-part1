//Purpose: This file manages API requests

//fetch request to JSON server
const data = {
    getJournalData() {
        return fetch("http://localhost:3000/entries")
            .then(results => results.json())
    },

    saveEntryToApi(newJournalEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    },

    deleteEntry(entryID) {
        // console.log(entryID)
        return fetch(`http://localhost:3000/entries/${entryID}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

}

export default data