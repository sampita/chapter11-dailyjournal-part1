/* const makeJournalHeading = (heading) => {
    return `
    <h1>Daily Journal</h1>
    `
} */

//factory function to make HTML for journal entries
const makeJournalEntryHTML = (journalEntries) => {
    return `
    <h3>Date:</h3>
    <p>${journalEntries.date}</p> 
    <h3>Concept:</h3>
    <p>${journalEntries.concept}</p>
    <h3>Entry:</h3>
    <p>${journalEntries.entryText}</p>
    <h3>Mood:</h3>
    <p>${journalEntries.mood}</p>
    `
}

let entryLog = document.querySelector("#entryLog")
let newJournalEntryHTML = ""

// console.log(newJournalEntryHTML)

//iterate through array of journal entries and add them to DOM
const renderJournalEntriesToDom = (entries) => {
    entries.forEach(entry => {
        newJournalEntryHTML += makeJournalEntryHTML(entry)
        entryLog.innerHTML = newJournalEntryHTML
    })
}

//get data from JSON and turn into usable information
const accessJournalEntries = () => {getDataFromAPI()
    .then(entries => {
        console.log(entries)
        //return entry information
       entries.forEach(entry => {
            const date = entry.date
            const concept = entry.concept
            const entryText = entry.entryText
            const mood = entry.mood
            renderJournalEntriesToDom(entry)
            })
    });
}
// console.log(accessJournalEntries)

accessJournalEntries()





// renderJournalEntries(journalEntries)

// console.log(newJournalEntryHTML)

