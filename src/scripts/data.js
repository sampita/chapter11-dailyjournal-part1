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
    },

    updateFormFields(entryID) {
        const hiddenEntryID = document.querySelector("#entryID")
        const dateInput = document.querySelector("#dateInput")
        const conceptInput = document.querySelector("#conceptInput")
        const entryInput = document.querySelector("#entryInput")
        const moodInput = document.querySelector("#moodInput")

        fetch(`http://localhost:3000/entries/${entryID}`)
            .then(response => response.json())
            .then(entryObject => {
                hiddenEntryID.value = entryObject.id
                dateInput.value = entryObject.date
                conceptInput.value = entryObject.concept
                entryInput.value = entryObject.entryText
                moodInput.value = entryObject.mood
            })
    }

}

export default data