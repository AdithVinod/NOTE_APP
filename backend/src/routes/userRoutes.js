import express from 'express'
import { addNotes, deleteNote, getNotes, getNotesById, login, register, updateNote } from '../controllers/userController.js';

const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.post('/addnote', addNotes);
router.get('/getnote', getNotes);
router.get('/getnotebyid/:id', getNotesById);
router.put('/updatenote/:id', updateNote);
router.delete('/deletenote/:id', deleteNote);


export default router;