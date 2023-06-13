
var express = require('express')

var app = express()

app.get('/', (req,res)=>{
     res.send('Hey this is default page.')
})

app.get('/about', (req,res)=>{
    res.send('Hey this is about page.')
})
app.listen(9000, ()=> {console.log('server is running on port no : 9000')})

module.exports = app;
