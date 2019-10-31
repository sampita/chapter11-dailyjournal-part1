import data from "./data.js"
import domEntries from "./entriesDOM.js"

const events = {
saveEntry() {    
    const date = document.getElementById("dateInput").value
    const concept = document.getElementById("conceptInput").value
    const entryText = document.getElementById("entryInput").value
    const mood = document.getElementById("moodInput").value

    data.saveEntryToApi({date, concept, entryText, mood}).then(data.getJournalData).then(domEntries.renderJournalEntriesToDom)
    .then(document.getElementById("journalForm").reset());}

    }

/* addFilterEvent () 
    {const radioButtons = document.getElementsByName("mood")
        radioButtons.forEach addEventListener("click", event => {
        const mood = event.target.value
        //do api call for new array
    })
    } */
   

export default events