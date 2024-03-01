const express = require('express');
const bodyParser=require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//const path = require('path');
const static =express.static("static");
// Serve static files from the 'static' directory
//app.use(express.static(path.join(__dirname, 'static')));
app.use("/",static);
// Define a route for /hi
//app.get('/hi', (req, res) =>{//without action and method=post
app.post('/hi', (req, res) => {
    console.log(req.body);
    res.json({
        name:req.body.name,
        description:req.body.description,
        date:req.body.date,
        amount:req.body.amount
    })
});
    // Extract phone parameter from req.query
    //const phone = req.query.phone;

    // Send a JSON response with extracted phone number
   


// Start the server
app.listen(3000, () => {
    console.log("app running on port 3000");
});
