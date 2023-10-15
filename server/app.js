const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = 'mongodb+srv://rahul:rahul123@cluster0.afakb9j.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(DB,{

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}).then(()=>{
    console.log(`Connected`);
}).catch((err)=>console.log(`Not connected`));


//middleware
const middleware = (req,res,next)=>{
    console.log(`This is Middleware`);
    //next();
}


app.get('/',(req, res) =>{
    res.send(`Hello World from server`);
});

app.get('/about', middleware, (req,res) =>{
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