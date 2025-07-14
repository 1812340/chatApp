import jwt from "jsonwebtoken";
import { asynceHandle } from "../utilities/asynceHandle.utility.js ";
import { errorHandle } from "../utilities/errorHandle.utillity.js";

export const isAuthenticated   = asynceHandle(async(req,res,next)=>{
const token = req.cookies.token || req.headers["authorization"]?.replace("bearer","")
if(!token){
    return next(new errorHandle("invalid token", 400))
}
const tokenData = jwt.verify(token, process.env.JWR_SECRET )
req.user = tokenData 
next()
}) 