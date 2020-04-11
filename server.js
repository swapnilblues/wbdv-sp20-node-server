var PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


const CLOUD_RB_URI = 'mongodb+srv://root:rootroot@whiteboard-xifbs.mongodb.net/whiteboard-cs5610-sp20?retryWrites=true&w=majority'
const LOCAL_DB_URI = 'mongodb://localhost:27017/whiteboard-cs5610-sp20'

const mongoose = require('mongoose')
mongoose.connect(CLOUD_RB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log('Connected to DB')
})


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.get('/hello', (req,res) => {
    res.send('hello world!')
})

app.listen(PORT)