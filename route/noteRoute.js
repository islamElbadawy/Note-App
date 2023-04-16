var expreess = require('express');
var noteController = require('../controller/noteController')
const router = expreess.Router();


router.get('/notes', noteController.getAllNotes);

router.post('/note/create', noteController.saveNote);

router.put('/note/update', noteController.updateNote);

router.delete('/note/delete/:noteId', noteController.deleteNote);


module.exports =  router;