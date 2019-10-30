import data from "./data.js"
import domEntries from "./entriesDOM.js"

/* const makeJournalHeading = (heading) => {
    return `
    <h1>Daily Journal</h1>
    `
} */

data.getJournalData()
.then(entries => domEntries.renderJournalEntriesToDom(entries))

//submit button
const submitButton = document.getElementById("submitButton")

//input field values

//factory function for new journal entry
const createNewJournalEntry = (dateInput, conceptInput, entryInput, moodInput) => {
    return {
        date: dateInput,
        concept:conceptInput,
        entryText: entryInput,
        mood: moodInput
    }
}

// createNewJournalEntry()
//when submit button is clicked, create new journal entry
submitButton.addEventListener("click", ()=>{
    const dateInput = document.getElementById("dateInput").value
    const conceptInput = document.getElementById("conceptInput").value
    const entryInput = document.getElementById("entryInput").value
    const moodInput = document.getElementById("moodInput").value

    const newJournalEntry = createNewJournalEntry(dateInput, conceptInput, entryInput, moodInput)

    data.postToApi(newJournalEntry).then(data.getJournalData).then(domEntries.renderJournalEntriesToDom)
})




