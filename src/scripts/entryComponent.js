//Purpose: This file creates each journal entry HTML component


//factory function to make HTML for journal entries
const entryHTML = {
makeJournalEntryHTML (journalEntries) {
    return `
    <section class="singleEntry">
    <h3>Date:</h3>
    <p>${journalEntries.date}</p> 
    <h3>Concept:</h3>
    <p>${journalEntries.concept}</p>
    <h3>Entry:</h3>
    <p>${journalEntries.entryText}</p>
    <h3>Mood:</h3>
    <p>${journalEntries.mood}</p>
    <button id="deleteButton--${journalEntries.id}">Delete</button>
    </section>
    `
  }
}
export default entryHTML
