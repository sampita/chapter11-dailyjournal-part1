import data from "./data.js"
import domEntries from "./entriesDOM.js"

const events = {
saveEntry() {    
    const date = document.getElementById("dateInput").value
    const concept = document.getElementById("conceptInput").value
    const entryText = document.getElementById("entryInput").value
    const mood = document.getElementById("moodInput").value

    if(dateInput !== "" && conceptInput !== "" && entryInput !== "" && moodInput !== "") {

    data.saveEntryToApi({date, concept, entryText, mood}).then(data.getJournalData).then(domEntries.renderJournalEntriesToDom)
    .then(document.getElementById("journalForm").reset());}

    else {window.alert("Please fill out the form completely")}
    }
}    

export default events