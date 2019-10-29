//Purpose: This file creates each journal entry HTML component


//factory function to make HTML for journal entries
const entryHTML = {
makeJournalEntryHTML (journalEntries) {
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
}
export default entryHTML
