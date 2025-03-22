function getNoteTemplate(indexNote) {
    return `
    <div>
    <h3>${notesTitle[indexNote]}</h3>
    <p>${notes[indexNote]}</p>
        <div class="notes_btn">
        <button onclick="switchNoteToTrash(${indexNote})">X</button>
        <button onclick="switchNoteToArchive(${indexNote})">A</button>
        <div>
    </div>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div>
    <h3>${trashNotesTitle[indexTrashNote]}</h3>
    <p>${trashNotes[indexTrashNote]}</p>
        <div class="notes_btn">
        <button onclick="deleteNote(${indexTrashNote})">X</button>
        <button onclick="switchBackToNotes(${indexTrashNote})">N</button>
        </div>`;
    
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `
    <div>
    <h3>${archiveNotesTitles[indexArchiveNote]}</h3>
    <p>${archiveNotes[indexArchiveNote]}</p>
        <div class="notes_btn">
        <button onclick="deleteNote(${indexArchiveNote})">X</button>
        <button onclick="switchArchiveToNote(${indexArchiveNote})">N</button>
        </div>`;
}