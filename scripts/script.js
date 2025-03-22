//notizen anzeigen lassen
//es braucht notizen
let notes = ['NISHANE','XERJOFF'];
let notesTitle = ['Bestellt', 'Watchlist'];

let trashNotes = [];
let trashNotesTitle = [];

let archiveNotes = [];
let archiveNotesTitles = [];

//ich muss definieren wo sie anzuzeigen sind
function renderNotes() {

    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }

}

function renderTrashNotes() {

    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        const note = trashNotes[indexTrashNote];
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);

        console.log(trashNotesTitle);
        console.log(trashNotes);
        
        
    }

}

function renderArchiveNotes() {

    let archiveContentRef = document.getElementById("archive_content");
    archiveContentRef.innerHTML = "";
    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        const note = archiveNotes[indexArchiveNote];
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }

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

    notes.push(noteInput);
    notesTitle.push(titleInput);

    saveToLocalStorage();
    renderNotes();

    noteInputRef.value = "";
    titleInputRef.value = "";
}   

//notizen zum papierkorb verschieben
function switchNoteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    let indexTrashNote = notesTitle.splice(indexNote, 1)
    trashNotes.push(trashNote);
    trashNotesTitle.push(indexTrashNote);
    renderNotes();
    renderTrashNotes();
    saveToLocalStorage();

}

//notizen ins archiv verschieben
function switchNoteToArchive(indexNote) {
    let archiveNote = notes.splice(indexNote, 1);
    let indexArchiveNote = notesTitle.splice(indexNote, 1)
    archiveNotes.push(archiveNote);
    archiveNotesTitles.push(indexArchiveNote);
    renderNotes();
    renderArchiveNotes();
    saveToLocalStorage();

}

//weitergegebenen values überprüfen!!!

function switchBackToNotes(indexTrashNote) {
    let returnNotes = trashNotes.splice(indexTrashNote, 1);
    returnNotes.push(notes);
    renderNotes();
    renderTrashNotes();
    saveToLocalStorage();

}

//weitergegebenen values überprüfen!!!

function switchArchiveToNote(indexArchiveNote) {
    let archiveNote = archiveNotes.splice(indexArchiveNote, 1);
    let archiveNoteTitles = archiveNotesTitles.splice(indexArchiveNote, 1);
    notes.push(archiveNote);
    notesTitle.push(archiveNoteTitles);

    renderNotes();
    renderArchiveNotes();
    saveToLocalStorage();

}

//notizen endgültig löschen
function deleteNote(index) {
    trashNotes.splice(index, 1);
    archiveNotes.splice(index, 1);

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
    localStorage.setItem('Notes', JSON.stringify(notes));
    localStorage.setItem('Notes Title', JSON.stringify(notesTitle));
    localStorage.setItem('Trash Notes', JSON.stringify(trashNotes));
    localStorage.setItem('Trash Title', JSON.stringify(trashNotesTitle));
    localStorage.setItem('Archive Notes', JSON.stringify(archiveNotes));
    localStorage.setItem('Archive Titles', JSON.stringify(archiveNotesTitles))
}

//notizen aus dem storage bei neu laden einblenden
function getFromLocalStorage() {
    const storedArray = JSON.parse(localStorage.getItem('trashNotes'));
    
    if (storedArray) {
        trashNotes = storedArray;
    }
    renderTrashNotes();
}
