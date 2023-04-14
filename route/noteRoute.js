var expreess = require('express');
var noteController = require('../controller/noteController')
const router = expreess.Router();


router.get('/notes', noteController.getAllNotes);

router.post('/notes/create', noteController.saveNote);

router.put('/notes/update', noteController.updateNote);

router.delete('/notes/delete', noteController.deleteNote);


module.exports =  router;