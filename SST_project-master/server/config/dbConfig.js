const mongoose = require('mongoose')
const uri="mongodb+srv://sanjanaynvsdl:doqSfIqMlAOg7KAQ@cluster0.v1i1dhw.mongodb.net/?appName=Cluster0";

// const uri = process.env.MONGODB_URI;


mongoose.connect(uri).then(()=> {
    console.log('Connected to MongoDB');
})
.catch((error)=> {
    console.log('Error:',error);
}); 


