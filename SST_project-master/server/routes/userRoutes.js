const express = require("express");
const User = require("../models/userModel");

const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try{
        //this is how we handle the errors
        const user=await User.findOne({ email: req.body.email });
        if(user) {
            return res.status(400).json("User with this email already exists");
        }
        const salt=await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(req.body.password,salt);
        req.body.password=hashPassword;
        //this is how we hash the password it forms 10 rounds of hashing
        const newUser=new User(req.body);
        await newUser.save();
        

    } catch(err) {
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try{
        const user=await User.findOne({ email: req.body.email });
        if(!user) {
            return res.send({
                message : "User not found"
            });

        }
        const isValid=await bcrypt.compare(req.body.password,user.password)
        //bcrypt.compare compares the password entered by the user with the hashed password in the database
        //after 10 round of hashing it compares login.password with registered password
        //this how we compare the password using salt!
        if(!isValid) {
            return res.send({
                message : "Invalid password"
                
            });
        }
        res.send({
            message : "Login successful"
        });
    }
    catch(err) {
        res.status(500).json(err);
    }
  
});


module.exports = router;