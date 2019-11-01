import data from "./data.js"
import domEntries from "./entriesDOM.js"
import events from "./events.js"
import makeJournalEntryForm from "./formMaker.js"

makeJournalEntryForm()

data.getJournalData()
.then(entries => domEntries.renderJournalEntriesToDom(entries))

events.addRadioButtonEventListener()




