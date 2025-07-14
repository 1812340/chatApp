import User from "../models/user.model.js"
import { asynceHandle } from "../utilities/asynceHandle.utility.js"
import { errorHandle } from "../utilities/errorHandle.utillity.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const Register = asynceHandle(async (res, req, next) => { 
      const { fullname, username, password, gender } = req.body
      console.log(`backend register FM ${fullname}`)
      console.log(`backend register UN ${username}`)
      console.log(`backend register P ${password}`)
      console.log(`backend register G ${gender}`)
      if (!fullname || !username || !password || !gender) {
        return next(new errorHandle("all field are required", 400))
      }

      const user= await User.findOne({username});
      if(user){
        return next(new errorHandle("User already exist", 400))
      }
      const hashedPaassword  = await bcrypt.hash(password,10)
      const avatartype = gender ==='male'? 'boy': 'girl'
      const avatar = `https://avatar.iran.liara.run/public/${avatartype}?username=${username}`
      const newUser= await  User.create({fullname, username, password: hashedPaassword ,gender, avatar})

      const dataToken ={
        _id : newUser?._id
      }

      const token = jwt.sign(dataToken, process.env.JWT_TOKEN, {expiresIn:process.env.JWT_EXPIRE })
      res.send(200)
      .cookie("token",token,{
        expires: new Date(
          Date.now()+ process.env.COOKIE_EXPIRE *24 *60* 60 *1000
        ),
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None "
      })
      .json({ 
        success: true,
        responseData:{newUser, token}
      })  
  }
)  

export const Login = asynceHandle(async (res, req, next) => { 
  const {username, password } = req.body
  if ( !username || !password) {
    return next(new errorHandle("all field are required", 400))
  }

  const user= await User.findOne({username});
  if(!user){
    return next(new errorHandle("enter valid usrname or password", 400))
  }
  const isValidPassword  = await bcrypt.compare(password, user.password)
  if(!isValidPassword){
    return next(new errorHandle("enter valid name or password", 400))
  }
  
  const dataToken ={
    _id : user?._id
  }
  const token = jwt.sign(dataToken, process.env.JWT_TOKEN, {expiresIn:process.env.JWT_EXPIRE })

  res.send(200)
  . cookie("token",token, {
    expires: new Date(
      Date.now()+ process.env.COOKIE_EXPIRE *24 *60* 60 *1000
    ),
    httpOnly:true,
    secure: true,
    // secure: process.env.NODE_ENV === "production",
    sameSite: "None "
  })
  .json({ 
    success: true,
    responseData:{user, token }
  })  
} 
)  

export const  Profile = asynceHandle(async(req,res,next)=>{
  const userId = req.user._id
  const profile = await User.findById(userId)
  res.status(200).json({
    success: true,
    response: profile
  })

})

export const Logout = asynceHandle(async(req,res,next)=>{
  res
  .status(200)
  .cookies("token","",{
    expires: new Date(Date.now()),
    httpOnly:true
  })
  .json({
    success: true,
    message: "logout successful!"
     
  })
})

export const getOtherUser = asynceHandle(async(req, res,next)=>{
  const otherUser = await User.find({_id:{$ne: req.user._id  }})

  res.status(200).json({
    success:true,
    response: otherUser 
  })
})