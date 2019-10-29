//Purpose: This file manages what appears on the DOM
import entryHTML from "./entryComponent.js"



//iterate through array of journal entries and add them to DOM
const domEntries = {
    renderJournalEntriesToDom (entries) {
    let entryLog = document.querySelector("#entryLog")
    let newJournalEntryHTML = ""
    entries.forEach(entry => {
        newJournalEntryHTML += entryHTML.makeJournalEntryHTML(entry)
        entryLog.innerHTML = newJournalEntryHTML
    })
  }
}


//take JSON data and turn into usable information
/* const accessJournalEntries = () => {getJournalData()
    .then(entries => {
        // console.log(entries)
       entries.forEach(entry => {
            renderJournalEntriesToDom(entry)
            })
    });
} */

export default domEntries