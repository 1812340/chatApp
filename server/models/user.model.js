import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
  fullname:{
    type:String,
    require:true
  },
  username:{
    type: String,
    require: true,
    unique: true
  },
  password:{
    type:String,
    require: true
  },
  gender:{
    type: String,
    require: true,
  },
  avatar:{
    type:String,
    require: true
  }
}, {timestamps:true})

const User = mongoose.model("User", userScheme)
export default User;