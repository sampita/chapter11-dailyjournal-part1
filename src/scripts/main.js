const journalEntry = {
    dateOfEntry: "10/18/2019",
    conceptsCovered: "Review of Book 2",
    journalEntryText: "Today we reviewed what we learned throughout Book 2 and applied it towards making a recipe searching webpage. This was in preparation for our second group project, where we'll be doing something similar encompassing JavaScript objects, manipulating the DOM, connecting APIS, and more",
    mood: "Only a little confused"
}

const entryLog = []

const addEntryToLog = () => {
    entryLog.push(journalEntry)
    console.log(entryLog)
}

addEntryToLog();
