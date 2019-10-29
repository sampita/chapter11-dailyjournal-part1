const journalEntries = [
    {
    date: "10/18/2019",
    concept: "Review of Book 2", 
    entryText: "Today we reviewed what we learned throughout Book 2 and applied it towards making a recipe-searching webpage. This was in preparation for our second group project, where we'll be doing something similar encompassing JavaScript objects, manipulating the DOM, connecting APIS, and more",
    mood: "Feeling confident"
},
    {
    date: "10/21/2019",
    concept: "Group Project 2", 
    entryText: "Today we are going to start our second group project. I'm a little nervous. We were given no template for standard workflow when creating something from scratch, so hopefully my team will figure things out!",
    mood: "A little confused"
},
    {
    date: "10/28/2019",
    concept: "JS Array Methods", 
    entryText: "We covered array methods in JavaScript including .find, .map, and .reduce. We also covered importing/exporting JavaScript modules instead of linking to each one in the index.html. I actually got to preview this while watching my teammates do that very same thing during the NSS Hackathon this weekend! Getting to see it ahead of time definitely primed my brain, so now that Jisie went over it in class again I fully understand it",
    mood: "Decent level of understanding"
}]

let entryLog = document.querySelector("#entryLog")

const makeJournalHeading = (heading) => {
    return `
    <h1>Daily Journal</h1>
    `
}

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

// console.log(makeJournalEntryHTML)

// const entryLog = []

//iterate through array of journal entries and add them to DOM
let newJournalEntryHTML = ""

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        newJournalEntryHTML += makeJournalEntryHTML(entry)
        entryLog.innerHTML = newJournalEntryHTML
    })
}

renderJournalEntries(journalEntries)

console.log(newJournalEntryHTML)

/* const addEntryToLog = (journalEntries) => {
    for (let i=0; i < journalEntries.length; i++)
    entryLog.push(journalEntry)
    console.log(entryLog)

    entryLog += entryLog
} */

// console.log(entryLog)

// addEntryToLog();
