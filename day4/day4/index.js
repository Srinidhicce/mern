/*const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of numbers in the array
console.log(numbers.reduce((sum, num) => (sum += num), 0));

//const path = require('path');
//console.log(path);
// Getting the directory name of the specified path
//console.log(path.dirname('C:/Users/Administrator/Desktop/day4/index.js'));

   
