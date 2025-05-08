const fs = require('fs');
// require express
const express = require('express');
const app = express();
const port = 6500;

// Define default route with express
app.get('/',(req,res)=> {
    res.send('<h1> Welcome to express server</h1>')
})
app.get('/getMovies',(req,res) => {
    fs.readFile('./data/db.json',(err,result) =>{
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(result))
        }
    })

})

//create server to listen on port
app.listen(port,(err)=> {
    console.log('server is running on 6500');
})