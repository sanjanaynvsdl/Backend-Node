const express = require('express');  // Require Express
const app = express();               // Create an Express application instance
app.use(express.json());             // function to parse JSON to  js object
app.use(logger);                     // function to log the request
//error : Cannot read properties of undefined (reading 'name');
//To resolve this we use express.json() middleware -->(in post function)

let courses=[
    {id: 1, 
    name:"java"},
    {id: 2, 
    name:"Node"},
    {id: 3, 
    name:"Express"},
];

app.get('/courses',(req,res)=>{
    res.json(courses);
});

app.post('/courses',(req,res)=> {
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});
//put -> To update
app.put('/course/:id',(req,res)=> {
    try{
        let course=courses.find((course) => {
            return course.id ===+ req.params.id;
        });
        if(!course){
            res.status(404).send("The course with the given id was not found");
        }
        course.name=req.body.name;
        res.send(courses);
    }
    catch(err){
        console.log(err);
    }
});
//delete
app.delete('/course/:id',(req,res)=> {
    try{
        let course=courses.find(course=>course.id===+req.params.id);
        if(!course){
            res.status(404).send("The course with the given id was not found");
        }
        let index=courses.indexOf(course);
        courses.splice(index,1);
        res.send(courses);
    }
    catch(err){
        console.log(err);
    }
});


app.listen(3000,()=>{
    console.log("Server started on port 3000");
});

//Implementing Middle-ware
function log(req,res,next){
    console.log("Logging...");
    next();
}
// app.use(log);
//Implement custom middle-ware
//date, ip, method, url
function logger(req,res,next) {
    console.log(req.method,req.url,new Date(),req.ip);
    next();
    
}




