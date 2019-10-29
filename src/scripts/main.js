/* const makeJournalHeading = (heading) => {
    return `
    <h1>Daily Journal</h1>
    `
} */

//fetch data and sent to HTML factory
getJournalData()
.then(entries => renderJournalEntriesToDom(entries))
//take new HTML and render to dom
// renderJournalEntriesToDom(entries)

// console.log(newJournalEntryHTML)

