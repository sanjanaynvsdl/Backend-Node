const fs = require("fs");

// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.appendFileSync("./file.txt","\nclass is going on")

// how to make directory
// fs.mkdir('dir1', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir is formed');
// })

// how to remove directory
// fs.rmdir('dir1', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir is removed');
// })

// how to rename directory
// fs.mkdir('dir2', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir is formed');
// })

// fs.rename('dir2','dirrr', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir is renamed');
// })

// const p = '/home/kohantika/Documents/Node-Practice/file.txt';
// const path = require("path"); 
// const dirname = path.dirname(p); 
// const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);

// get the path of the folder
// get the path of the file
// copy the file from a source to dst
// const p = '/home/kohantika/Documents/Node-Practice/file.txt';
// const path = require("path");

// console.log(path.dirname(p));
// console.log(path.extname(p));

// fs.copyFile("file.txt", "dirrr/copied_file.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file copied!");
// });

const http = require('http');
const server = http.createServer((req, res) =>{
  res.setHeader('const-Type', 'text/html');
  if(req.url === '/login'){
    res.write('<html> <head> <title> node js class </title> </head> <body>');
    res.write('<h1> Helo, Login!</h1>');
    res.write('</body></html>');
  }else{
    const data = fs.readFileSync("index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
    res.write(data);
  }
  res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port, host, () =>{
  console.log(`Server is listening on http://${host}:${port}`);
});