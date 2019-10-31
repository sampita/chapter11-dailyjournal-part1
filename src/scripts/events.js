import data from "./data.js"
import domEntries from "./entriesDOM.js"

const events = {
saveEntry() {    
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
        domEntries.renderJournalEntriesToDom(filterMood)
    })
        
        // (domEntries.renderJournalEntriesToDom)
    },

addRadioButtonEventListener() {
    {
        const radioButtons = document.getElementsByName("mood")
        radioButtons.forEach(radioButton => {
            radioButton.addEventListener("click", this.filterEventsByMood)
        }
    )}
    }   
  }

export default events