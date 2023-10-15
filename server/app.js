const express = require('express')
const app = express();

app.get('/',(req, res) =>{
    res.send(`Hello World from server`);
});

app.get('/about',(req,res) =>{
    res.send(`About`);
});

app.get('/signup',(req, res) =>{
    res.send(`Hello SignUp from server`);
});

app.get('/login',(req, res) =>{
    res.send(`Hello Login from server`);
});


app.listen(3000, ()=>{
    console.log(`Server is running at port no 3000`);
})