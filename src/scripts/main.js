const journalEntry = {
    entry: "10/18/2019",
    conceptsCovered: "Review of Book 2", 
    journalEntryText: "Today we reviewed what we learned throughout Book 2 and applied it towards making a recipe searching webpage. This was in preparation for our second group project, where we'll be doing something similar encompassing JavaScript objects, manipulating the DOM, connecting APIS, and more",
    mood: "Confident"
}

const journalEntry2 = {
    entry: "10/21/2019",
    conceptsCovered: "Group Project 2", 
    journalEntryText: "Today we are going to start our second group project. I'm a little nervous.",
    mood: "Only a little confused"
}

const journalEntry3 = {
    entry: "10/28/2019",
    conceptsCovered: "JS Array Methods", 
    journalEntryText: "We covered array methods in JavaScript including .find, .map, and .reduce. We also covered importing/exporting JavaScript modules instead of linking to each one in the index.html. I actually got to preview this while watching my teammates do that very same thing during the NSS Hackathon this weekend! Getting to see it ahead of time definitely primed my brain, so now that Jisie went over it in class again I fully understand it",
    mood: "Decent level of understanding"
}

const entryLog = []

const addEntryToLog = (journalEntry) => {
    // for (let i=0; i < journalEntry.length; i++)
    entryLog.push(journalEntry)
    // console.log(entryLog)

    // entryLog += entryLog
}

console.log(entryLog)

// addEntryToLog();
