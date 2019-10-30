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


//when submit button is clicked, create new journal entry
submitButton.addEventListener("click", ()=>{
    const dateInput = document.getElementById("dateInput").value
    const conceptInput = document.getElementById("conceptInput").value
    const entryInput = document.getElementById("entryInput").value
    const moodInput = document.getElementById("moodInput").value

    if(dateInput !== "" && conceptInput !== "" && entryInput !== "" && moodInput !== "") {

    const newJournalEntry = createNewJournalEntry(dateInput, conceptInput, entryInput, moodInput)

    data.postToApi(newJournalEntry).then(data.getJournalData).then(domEntries.renderJournalEntriesToDom)
    }

    else {window.alert("Please fill out the form completely")}
  }
)
//form validation
/* function validateForm(dateInput, conceptInput, entryInput, moodInput) {
    if (dateInput == "") {
        alert("Please enter the date");
        return false;
    } else if (conceptInput == "") {
        alert("Please enter the concept you covered"); return false;}
    else if (entryInput == "") {
        alert("Please input your journal entry"); return false;}
    else if (moodInput == "") {
        alert("Please enter your mood");
        return false;
    }
} */


