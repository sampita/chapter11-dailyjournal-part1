//Purpose: This file manages what appears on the DOM

let entryLog = document.querySelector("#entryLog")
let newJournalEntryHTML = ""

//iterate through array of journal entries and add them to DOM
const renderJournalEntriesToDom = (entries) => {
    entries.forEach(entry => {
        newJournalEntryHTML += makeJournalEntryHTML(entry)
        entryLog.innerHTML = newJournalEntryHTML
    })
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