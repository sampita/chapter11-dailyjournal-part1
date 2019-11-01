import data from "./data.js"
import domEntries from "./entriesDOM.js"


const events = {
saveEntry() {
    event.preventDefault()    
    const date = document.getElementById("dateInput").value
    const concept = document.getElementById("conceptInput").value
    const entryText = document.getElementById("entryInput").value
    const mood = document.getElementById("moodInput").value

    data.saveEntryToApi({date, concept, entryText, mood}).then(data.getJournalData).then(domEntries.renderJournalEntriesToDom)
    .then(document.getElementById("journalForm").reset());},

filterEventsByMood() {
    let moodSelection = event.target.value
    //do api call for new array on click
    data.getJournalData().then((entries) => {
        // console.log(entries)
        const filterMood = entries.filter(entryObject => {
            //if mood matches up with moodSelection, return entry
            let moodMatch = false

            if (entryObject.mood === moodSelection) {
                moodMatch = true
            }
            return moodMatch
        })
        if (filterMood.length === 0) {
            const entryLog = document.querySelector("#entryLog")
            entryLog.innerHTML = `
            <section class="singleEntry">No entries found</section>
            `}
        else {
        domEntries.renderJournalEntriesToDom(filterMood)}
      })
    },

addRadioButtonEventListener() {
    {
        const radioButtons = document.getElementsByName("mood")
        radioButtons.forEach(radioButton => {
            radioButton.addEventListener("click", this.filterEventsByMood)
        }
    )}
    },

deleteButtonHandler() {
    const entryLog = document.querySelector("#entryLog")
    entryLog.addEventListener("click", event => {
        if (event.target.id.startsWith("deleteButton--")) {
        // Extract entry id from button id attribute
            const entryToDelete = event.target.id.split("--")[1]

        // Invoke the delete method, get all recipes 
            data.deleteEntry(entryToDelete)
                .then(data.getJournalData)
                .then(domEntries.renderJournalEntriesToDom)
        }
    })

},

editButtonHandler() {
    const entryLog = document.querySelector("#entryLog")
    entryLog.addEventListener("click", event => {
        if (event.target.id.startsWith("editButton--")) 
          {
            const entryToEdit = event.target.id.split("--")[1]

            //Get the specific entry from API and populate form fields
            data.updateFormFields(entryToEdit)
        }
    })
}

  }

export default events