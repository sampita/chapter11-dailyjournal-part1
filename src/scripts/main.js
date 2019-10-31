import data from "./data.js"
import domEntries from "./entriesDOM.js"
import events from "./events.js"

data.getJournalData()
.then(entries => domEntries.renderJournalEntriesToDom(entries))

//submit button
const submitButton = document.getElementById("submitButton")

//when submit button is clicked, create new journal entry
submitButton.addEventListener("click", events.saveEntry)


