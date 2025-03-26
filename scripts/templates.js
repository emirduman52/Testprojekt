function getNoteTemplate(indexNote) {
    return `
    <div>
    <h3>${allNotes.notesTitle[indexNote]}</h3>
    <p>${allNotes.notes[indexNote]}</p>
        <div class="notes_btn">
        <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">X</button>
        <button onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')">A</button>
        </div>
    </div>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
    <div>
    <h3>${allNotes.trashNotesTitle[indexTrashNote]}</h3>
    <p>${allNotes.trashNotes[indexTrashNote]}</p>
        <div class="notes_btn">
        <button onclick="deleteNote(${indexTrashNote})">X</button>
        <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">N</button>
        </div>`;
    
} 

function getArchiveNoteTemplate(indexArchiveNote) {
    return `
    <div>
    <h3>${allNotes.archiveNotesTitle[indexArchiveNote]}</h3>
    <p>${allNotes.archiveNotes[indexArchiveNote]}</p>
        <div class="notes_btn">
        <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'trashNotes')">X</button>
        <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')">N</button>
        </div>`;
}