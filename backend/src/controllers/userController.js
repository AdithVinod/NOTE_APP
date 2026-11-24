import User from '../model/userModel.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';
import Notes from '../model/notesModel.js'
import {GoogleGenAI} from '@google/genai'

const ai = new GoogleGenAI({
    apiKey: process.env.GoogleGenAI
})

const register = async(req, res) =>{
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        if(user){
            res.json({user, message: "User Registered Successfully"});
        }

        else{
            res.status(400).json({
                message: 'Invalid user data'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error', error: error.message
        });
    }
};

const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        // console.log(user,"jhj")
        if(!user){
            return res.status(404).json({error:"User does not exist"});
        }    

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message: "Invalid user"})
        } 
            
            const token = generateToken(user.id);
            return res.json({
                token,
                message:"Login successful",
                user:{
                    id:user._id,
                    name:user.name
                }
            });
        }
    catch (error) {
        return res.status(500).json({error:'An error occurred. Please try again'})
    }
};

const addNotes = async (req, res) => {
  const { title, content } = req.body;
  try {  
    const user = req.user;
    console.log(user, 'userController')

    if (!title || !content) {
      return res.status(400).json({ message: "title and content are required" });
    }
    const newNote = new Notes({
      title,
      content,
      userId: req.user._id
       
    });
    await newNote.save();
    res.status(201).json({ message: "note added successfully", note: newNote });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

const getNotes = async(req, res)=>{
    try {
        const user = req.user;
        const notes = await Notes.find({userId: user._id}).exec();
        res.status(200).json({notes})
    } catch (error) {
        res.status(500).json({
            message: 'Error in fetching data'
        })
    }
}

const getNotesById = async (req,res)=>{
    try {
        const Id = req.params.id;
        const notes = await Notes.findById(Id).exec()
        res.status(200).json({notes})
    } catch (error) {
        res.status(500).json({
            message: 'Error in fetching data'
        })
    }
}

const updateNote = async (req,res)=>{
    try{
        const Id = req.params.id;
        const { title, content } = req.body;
        const note = await Notes.findById(Id);
        if(!note){
            return res.status(404),json({
                message: 'Invalid Id'
            })
        }

        note.title = title || Notes.title;
        note.content = content || Notes.content;
        await note.save();

        return res.status(200).json({
                message: 'Note updated successfully'
            })
    }
    catch(error){
        console.error();
        return res.status(500).json({
            message: "An error occurred"
        })
    }
}

const deleteNote = async (req,res) =>{
    try{
        const Id = req.params.id;
        const deletedItem = await Notes.findByIdAndDelete(Id);
        if(deletedItem){
            res.status(200).json({
                message:"Note deleted successfully"
            })
        }
        else{
            res.status(400).json({
                message: 'Note not found'
            })
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message:'Internal server error'
        })
    }
}

const chatBot = async (req, res)=>{
    try {
        const {message} = req.body;

        if(typeof message !== 'string' || !message.trim() || message.length > 2000){
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid message'
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-3.7-flash",
            contents: message.trim(),
            config: {
                systemInstruction: "You are a helpful AI chatbot." + "Answer questions in simple English.",
                maxOutputTokens: 500
            }
        })

        res.status(200).json({
            success: true,
            reply: response.text || "No response generated",
        });
    } catch (error) {
        console.error("Gemini API error: ", error);
        
        res.status(500).json({
            success: true,
            message: 'Failed to generate AI response'
        })
    }
}

export {register, login, addNotes, getNotes, getNotesById, updateNote, deleteNote, chatBot};