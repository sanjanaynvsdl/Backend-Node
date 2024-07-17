const path = require('path');
const fs = require('fs');

// // Specify the path to the file
// const filePath = path.join(__dirname, 'file.txt');

// // Read the file
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }
//     console.log(data);
// });
const data=fs.readFileSync('file.txt');
console.log(data.toString());