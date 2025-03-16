const express = require('express');
const app = express();
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt")
const PORT = 5002;
const signup = require("./models/SignupSchema")
const cors = require("cors");
app.use(cors());

dotenv.config()
app.use(express.json())

mdb
    .connect(process.env.MONGODB_URL)
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

app.post("/login",async(req,res) => {
    const{userName,password} = req.body;   
    try{
        const userDetails = await signup.findOne({userName});
        console.log(userName,password);
        // User Exists (now check password):
        if(userDetails!=null){
            const storedPw = userDetails.password; 
            bcrypt.compare(password,storedPw , (err,result) =>{
                if(err){
                    console.log("bro error : ",err);
                }
                if(result){
                    res.status(200).json({message:"logged in !"})
                    console.log("bro password matched!!!!");
                }
                else{
                    console.log("bro password worng!!!!");
                    res.status(400).json({message:"password mismatch"})
                }
            } )
        }
        // User does not Exist:
        else{
            console.log('user does not exist!!!!')
        }
        
    }
    catch(err){
        console.log("bruh error : ",err);
        res.status(400).json({message:"failed"});
    } 
})

app.listen(PORT, () => {
    console.log(`Server started successfully on https://localhost:${PORT}`)
});