const { json } = require('body-parser');
var generator = require('../util/generator');
var memStorage = require('../util/memory.storage');
var model = require('../moodel/note.model');




exports.getAllNotes = (req, res) => {
    var notes = [];
    notes = memStorage.getValues(memStorage.store);

    return res.status(200).send(notes);
}


exports.saveNote = (req, res) => {
    var seq_id   = generator.generate(); 
    var title = req.body.title;
    var content = req.body.content;
    var author = req.body.author;
    var createdOn = new Date();

    if(!title || !content || !author){
        return res.status(500).send({error: 'title, content, and author fields are required'})
    }

    var Note = model.Note;
    var noteObj = new Note(seq_id, title, content, author, createdOn);
    memStorage.store.setItem(seq_id, noteObj);

    return res.status(201).send({message: 'Note created successfully...', data: [memStorage.store.getItem(seq_id)]});
}

exports.updateNote = (req, res) => {
    var noteId   = req.body.noteId; 
    var title = req.body.title;
    var content = req.body.content;
    var author = req.body.author;
    var createdOn = new Date();

    if(!noteId || !title || !content || !author){
        return res.status(500).send({error: 'noteId, title, content, and author fields are required'})
    }

    if(!memStorage.store.getItem(noteId)){
        return res.status(500).send({error: 'Note id not found'})
    }

    var Note = model.Note;
    var noteObj = new Note(noteId, title, content, author, createdOn);
    memStorage.store.setItem(noteId, noteObj);

    return res.status(200).send({message: 'Note created successfully...', data: [memStorage.store.getItem(noteId)]});
}

exports.deleteNote = (req, res) => {
    var noteId = req.params.noteId;
    if(!noteId){
        return res.status(500).send({error: 'noteId fields is required'})
    }

    if(!memStorage.store.getItem(noteId)){
        return res.status(500).send({error: 'note does not exist'})
        
    }

    memStorage.store.removeItem(noteId)
    return res.status(200).send('Note has been deleted successfully')
}