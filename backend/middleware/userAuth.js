import jwt from 'jsonwebtoken'
import User from "../src/model/userModel.js"


export const isLogin = async (req,res,next)=>{
    try{
        const authorizationHeader = req.headers.authorization;
        //console.log(authorizationHeder, '..aaaaaaaaaaaa')
        if(!authorizationHeader){
            return res.status(401).json({
                error: "unauthorised"
            })
        }
        const token = authorizationHeader.split(" ")[1];
            // console.log(token, 'from userAuth')
        if(!token){
            return res.status(401).json({
                error:'unauthorised'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.user_id);
        // console.log(user, "User")

        if(!user){
            return res.status(401).json({
                error:'unauthorised'
            })
        }
        req.user = user;
        next();
    }
    catch(error){
        console.error('Error in middleware', error);
        return res.status(500).json({
            error:'internal server error'
        })
    }
}