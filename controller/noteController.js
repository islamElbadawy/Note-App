const { json } = require('body-parser');
var generator = require('../util/generator');
var memStorage = require('../util/memory.storage')




exports.getAllNotes = (req, res) => {
    var seq_id_1   = generator.generate();
    memStorage.store.setItem(seq_id_1, '1st key' );
    var seq_id_2   = generator.generate();
    memStorage.store.setItem(seq_id_2, '2nd key' );
    var keys = memStorage.getKeys(memStorage.store);
    var values = memStorage.getValues(memStorage.store);
    console.log(values);
    res.send('Get all keys .... Keys...' + JSON.stringify(keys));
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