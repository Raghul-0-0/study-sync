const express = require('express');
const app = express();
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt")
const PORT = 5000;
const signup = require("./models/SignupSchema")
dotenv.config()
app.use(express.json())

mdb
    .connect("mongodb://localhost:27017/users")
    .then(()=> {
        console.log("MDB Connection Succesful");
    })
    .catch((err) => {
        console.log("check your connection string ",err);
    })

app.post("/signup",async(req,res) => {
    try{
        const{userName,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newSignup = new signup({
            userName:userName,
            password:hashedPassword
        })
        await newSignup.save();
        console.log("Signup Success!!! :O ")
        res.status(200).json(newSignup);
    }
    catch(error){
        console.log("Signup error", error);
        res.status(400).json({message:"Signup Unsuccesful" , isSignup:false});
    }
})

app.listen(PORT, () => {
    console.log(`Server started successfully on https://localhost:${PORT}`)
});
