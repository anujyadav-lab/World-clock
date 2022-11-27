const express = require('express')
const app = express()
const port = 7000
const path = require('path')

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"/templates/index.html"));
})
app.listen(port,(req,res)=>{
    console.log(`listening to the port ${port}`);
})

