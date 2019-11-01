import data from "./data.js"
import domEntries from "./entriesDOM.js"
import events from "./events.js"
import makeJournalEntryForm from "./formMaker.js"

//TODO: if no journal matches are returned, return N/A

makeJournalEntryForm()
events.saveButtonHandler()

data.getJournalData()
    .then(entries => domEntries.renderJournalEntriesToDom(entries))
    .then(events.addRadioButtonEventListener())
    .then(events.editButtonHandler())
    .then(events.deleteButtonHandler())




