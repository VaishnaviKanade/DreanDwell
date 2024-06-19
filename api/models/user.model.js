import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://www.logolynx.com/images/logolynx/03/039b004617d1ef43cf1769aae45d6ea2.png" 
    },
},
{timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;