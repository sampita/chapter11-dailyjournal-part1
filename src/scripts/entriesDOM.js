//Purpose: This file manages what appears on the DOM
import entryHTML from "./entryComponent.js"


const entryLog = document.querySelector("#entryLog")

//iterate through array of journal entries and add them to DOM
const domEntries = {
    renderJournalEntriesToDom (entries) {
    let newJournalEntryHTML = ""
    entries.forEach(entry => {
        newJournalEntryHTML += entryHTML.makeJournalEntryHTML(entry)
        entryLog.innerHTML = newJournalEntryHTML
    })
  }
}


export default domEntries