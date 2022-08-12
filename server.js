const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
const {respone} = require('express');
const mongoose = require('mongoose');
const Pebbles = require('./models/pebbles');
const methodOverride = require('method-override');
const menuData = require('./utilities/menuData');
const pebbles = require('./models/pebbles');


// DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//middleware
app.use((req, res, next) => {
    next();
});
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))

//Views Engine
app.set('view engine', 'jsx') //Setting up HTML template
app.engine('jsx', require('express-react-views').createEngine()) //Initializing view engine

//Seed Route
app.get('/pebbles/seed', (req, res) => {   //app. get('/pebbles/seed', async (req,res) =>{)
    // await pebbles.deleteMany({//prop: //})
    // await Pebbles.create(menuData);
    Pebbles.create(menuData);
    res.redirect('/pebbles');
})

//Landing Page
app.get('/', (req, res) => {
    res.send('Welcome to Pebbles Kitchen!');
});

//Index Page
app.get('/pebbles', (req, res) => {
    //res.send("Index") //first step to check route
    //res.render('Index') --> displays index file w/o passing any props to index
    Pebbles.find({},(err, allPebbles)=>{
        console.log(allPebbles)
        res.render('Index', {
            pebbles: allPebbles  
        })
    })
});

 //New Page
 app.get('/pebbles/new', (req, res) => {
    res.render('New')
})

//Post route
app.post('/pebbles/', (req, res) => {
    Pebbles.create(req.body, (err, createPebbles) => {
        res.redirect('/pebbles')
    })
})

//Show route
app.get('/pebbles/:id', (req, res) => {
    Pebbles.findById(req.params.id,(err,foundPebbles) => {
         res.render('Show', {
             pebbles: foundPebbles
         })
     })
 });



//Edit Page
app.get('/pebbles/:id/edit', (req,res)=> {
    Pebbles.findById(req.params.id, (err, foundPebbles) => {
        if(!err){
            res.render('Edit', {
                pebbles: foundPebbles
            })
        } else {
            res.send({ 
                msg: err.message
            })
        }
    })
})

//Put route
app.put('/pebbles/:id', (req,res) => {
    Pebbles.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (err, foundPebbles) => {
            res.redirect(`/pebbles/${req.params.id}`)
        })
})

// Tell the app to listen on port 3000
app.listen(port, function() {
    console.log('Listening on port', port);
   });