const express = require('express');  // Require Express
const app = express();               // Create an Express application instance

let courses=[
    {id: 1, name:"java"},
    {id: 2, name:"Node"},
    {id: 3, name:"Express"},
];

app.get('/courses',(req,res)=>{
    res.json(courses);
});

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});
