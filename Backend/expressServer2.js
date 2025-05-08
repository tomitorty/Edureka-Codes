const express=require('express');

const mongoose=require('mongoose');

const app=express();

app.use(express.json());

mongoose.connect('mongodb+srv://moid:Moid@123@mongo.z7zbnj8.mongodb.net/?retryWrites=true&w=majority&appName=Mongo')

.then(()=>{

    console.log("Connected to MongoDb");

    }).catch((err)=>console.error("MongoDb connection failed",err));

// Define Schema

const userSchema=new mongoose.Schema({

    name:String,

    email:String

});

// Create Model

const user=mongoose.model("user",userSchema);

// Create User (POST)

app.post('/users',async(req,res)=>{

    const users=await User.find();

    res.send(users);

})

// Read all User(Get)

app.get('/users',async(req,res)=>{

    const users=await user.find();

    res.send(users);

});

app.listen(3000,()=>console.log("Server is running on 3000"));