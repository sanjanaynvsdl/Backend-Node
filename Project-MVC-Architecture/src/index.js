
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const productRoute=require('./routes/productRoute');
require('dotenv').config();
const uri = "mongodb+srv://sanjanaynvsdl:doqSfIqMlAOg7KAQ@cluster0.v1i1dhw.mongodb.net/?appName=Cluster0";

app.use(express.json()); //middleware
mongoose
.connect(uri).then(()=> {
    console.log('Connected to MongoDB');
})
.catch((error)=> {
    console.log('Error:',error);
});

app.use('/api/products',productRoute);
//here we said /api/products are common

app.listen(8002,()=> {
    console.log('Server is running at http://localhost:8002');
});






