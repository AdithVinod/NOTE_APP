import express from 'express'
import { addNotes, chatBot, deleteNote, getNotes, getNotesById, login, register, updateNote } from '../controllers/userController.js';
import { isLogin } from '../../middleware/userAuth.js';


const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.post('/addnote', isLogin, addNotes);
router.get('/getnote', isLogin, getNotes);
router.get('/getnotebyid/:id', getNotesById);
router.put('/updatenote/:id', updateNote);
router.delete('/deletenote/:id', deleteNote);
router.post('/chat', chatBot)


export default router;