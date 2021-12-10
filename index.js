const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

app.use(express.static('public'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})
app.get('/contact',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact')
})
app.get('/post',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
})
app.get('/posts/new',(req,res)=>{
    res.render('create')
    })
app.listen(4000, ()=>{

    console.log('App listening on port 4000')
})