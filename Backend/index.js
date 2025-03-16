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
app.post("/login", async (req, res) => {
    const { userName, password } = req.body;
    
    try {
      const userDetails = await signup.findOne({ userName });
      
      if (!userDetails) {
        console.log('User does not exist');
        return res.status(400).json({ message: "User not found" });
      }
  
      const match = await bcrypt.compare(password, userDetails.password);
      
      if (match) {
        res.status(200).json({ 
          message: "logged in !", 
          username: userDetails.userName 
        });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Server error" });
    }
  });

// Add exam routes
const examSchema = new mdb.Schema({
    username: String,
    name: String,
    date: Date,
    time: String,
    notes: String
  });
  
  const Exam = mdb.model("Exam", examSchema);
  
  // Get exams for user
  app.get("/exams/:username", async (req, res) => {
    try {
      const exams = await Exam.find({ username: req.params.username });
      res.status(200).json(exams);
    } catch (error) {
      res.status(500).json({ message: "Error fetching exams" });
    }
  });
  
  // Add new exam
  app.post("/exams", async (req, res) => {
    try {
      const newExam = new Exam(req.body);
      await newExam.save();
      res.status(201).json(newExam);
    } catch (error) {
      res.status(500).json({ message: "Error saving exam" });
    }
  });


app.listen(PORT, () => {
    console.log(`Server started successfully on https://localhost:${PORT}`)
});