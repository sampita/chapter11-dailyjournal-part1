//Purpose: This file generates the input form to make a new journal entry
import events from "./events.js"

export default function makeJournalEntryForm() {
    let journalEntryForm = document.querySelector("#journalEntryForm")
    let journalEntryFormHTML = /*html*/ `
    <form name="journalForm" action="" id="journalForm">
    <fieldset class="createEntryForm">
    <legend>Create new journal entry:</legend>
        <input type="hidden" id="entryID" value="">
        <div class="formFields">
        <label for="journalDate">Date:</label>
        <input type="date" name="journalDate" id="dateInput" required>
        </div>
        <div class="formFields">
        <label for="conceptscovered">Concepts Covered:</label>
        <input type="text" name="conceptsCovered" id="conceptInput" required>
        </div>
        <div class="formFields">
        <label for="journalEntry">Journal Entry:</label>
        <textarea name="journalEntry" rows="10" id="entryInput"
            placeholder="What's on your mind today? 💭" required></textarea>
        </div>
        <div class="formFields">
        <label for="mood">Mood:</label>
        <select name="mood" id="moodInput" required>
            <option value="" disabled selected hidden class="disabled">Select your mood</option>
            <option value="😎 Feeling confident">😎 Feeling confident</option>
            <option value="🙂 Decent level of understanding">🙂 Decent level of understanding</option>
            <option value="😐 A little confused">😐 A little confused</option>
            <option value="😫 Utterly lost">😫 Utterly lost</option>
            <option value="🔥 In a pit of despair">🔥 In a pit of despair</option>
        </select>
    </div>    
    </fieldset>
    <button id="submitButton">Record your thoughts</button>
</form>`
journalEntryForm.innerHTML = journalEntryFormHTML

}