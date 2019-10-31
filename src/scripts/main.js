import data from "./data.js"
import domEntries from "./entriesDOM.js"

data.getJournalData()
.then(entries => domEntries.renderJournalEntriesToDom(entries))

//submit button
const submitButton = document.getElementById("submitButton")


//factory function for new journal entry
const createNewJournalEntry = (dateInput, conceptInput, entryInput, moodInput) => {
    return {
        date: dateInput,
        concept:conceptInput,
        entryText: entryInput,
        mood: moodInput
    }
}

//when submit button is clicked, create new journal entry
submitButton.addEventListener("click", ()=>{
    const dateInput = document.getElementById("dateInput").value
    const conceptInput = document.getElementById("conceptInput").value
    const entryInput = document.getElementById("entryInput").value
    const moodInput = document.getElementById("moodInput").value

    if(dateInput !== "" && conceptInput !== "" && entryInput !== "" && moodInput !== "") {

    const newJournalEntry = createNewJournalEntry(dateInput, conceptInput, entryInput, moodInput)

    data.saveEntryToApi(newJournalEntry).then(data.getJournalData).then(domEntries.renderJournalEntriesToDom)
    .then(document.getElementById("journalForm").reset());}

    else {window.alert("Please fill out the form completely")}

  }
)


