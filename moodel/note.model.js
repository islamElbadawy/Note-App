exports.Note = class Note {

    constructor(noteId, title, content, author, createdOn){
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdOn = createdOn;
    }
}