
let allNotes = {
    'notes' : ['Nishane', 'Xerjoff'],
    'notesTitle' : ['Bestellt', 'Watchlist'],
    'trashNotes' : [],
    'trashNotesTitle' : [],
    'archiveNotes' : [],
    'archiveNotesTitle' : []
}

//ich muss definieren wo sie anzuzeigen sind
function renderNotes() {

    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        const note = allNotes.notes[indexNote];
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }

}

function renderTrashNotes() {

    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        const note = allNotes.trashNotes[indexTrashNote];
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);

        
        
    }

}

function renderArchiveNotes() {

    let archiveContentRef = document.getElementById("archive_content");
    archiveContentRef.innerHTML = "";
    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        const note = allNotes.archiveNotes[indexArchiveNote];
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }

}


function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    let notesTitle = allNotes[startKey + "Title"].splice(indexNote, 1);
    allNotes[destinationKey + "Title"].push(notesTitle[0]);

    renderAll();
}

function renderAll() {
    renderNotes();
    renderTrashNotes();
    saveToLocalStorage();
    renderArchiveNotes();
}

//notizen hinzufügen
function addNote() {
    let noteInputRef = document.getElementById('note_Input');
    let noteInput = noteInputRef.value;
    let titleInputRef = document.getElementById('note_Input2');
    let titleInput = titleInputRef.value;

    if (titleInput === '') {
        alert("Bitte einen Titel angeben!");
        return;
    }

    allNotes.notes.push(noteInput);
    allNotes.notesTitle.push(titleInput);

    saveToLocalStorage();
    renderNotes();

    noteInputRef.value = "";
    titleInputRef.value = "";
}   



//notizen endgültig löschen
function deleteNote(index) {
    allNotes.trashNotes.splice(index, 1);
    allNotes.trashNotesTitle.splice(index, 1);

    renderTrashNotes();
    renderArchiveNotes();
}

function checkEnter(event) {
    if (event.key === "Enter") {
        addNote();
    }

}


//notizen archivieren
function saveToLocalStorage() {
    localStorage.setItem('Notes', JSON.stringify(allNotes.notes));
    localStorage.setItem('Notes Title', JSON.stringify(allNotes.notesTitle));
    localStorage.setItem('Trash Notes', JSON.stringify(allNotes.trashNotes));
    localStorage.setItem('Trash Title', JSON.stringify(allNotes.trashNotesTitle));
    localStorage.setItem('Archive Notes', JSON.stringify(allNotes.archiveNotes));
    localStorage.setItem('Archive Titles', JSON.stringify(allNotes.archiveNotesTitle))
}

//notizen aus dem storage bei neu laden einblenden
function getFromLocalStorage() {
    const storedArray = JSON.parse(localStorage.getItem('trashNotes'));
    
    if (storedArray) {
        trashNotes = storedArray;
    }
    renderTrashNotes();
}
