import data from "./data.js"
import domEntries from "./entriesDOM.js"

/* const makeJournalHeading = (heading) => {
    return `
    <h1>Daily Journal</h1>
    `
} */

data.getJournalData()
.then(entries => domEntries.renderJournalEntriesToDom(entries))


