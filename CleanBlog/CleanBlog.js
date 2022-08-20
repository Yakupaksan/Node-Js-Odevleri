const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const path = require('path')
const ejs = require('ejs')
const app = express();
app.use(express.static('public'))

const AddPost = require('./models/AddPost'); 



mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


  
//TEMPLATE ENGINE
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//MIDDLEWARES
app.get('/', async (req, res) => {
    const addposts = await AddPost.find({})
    res.render('index', {
        addposts})
    });

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/add_post', (req, res) => {
    res.render('add_post')
})

app.get('/post', (req, res) => {
    res.render('post')
})


app.post('/AddPost', async (req, res) => {
    await AddPost.create(req.body)            
    res.redirect('/')
  });




const post = 3000;
app.listen(post, () => {
    console.log(`${post} numarali post basarili bir sekilde acildi. `)
})