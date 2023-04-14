var generator = require('../util/generator')




exports.getAllNotes = (req, res) => {
    var new_id_1   = generator.generate();
    res.send(new_id_1);
}


exports.saveNote = (req, res) => {
    res.send('Save note');
}

exports.updateNote = (req, res) => {
    res.send('Update note');
}

exports.deleteNote = (req, res) => {
    res.send('Delete note');
}