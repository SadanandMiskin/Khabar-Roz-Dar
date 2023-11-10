const express = require('express')
const ejs = require('ejs')
const axios = require('axios')
require('dotenv').config()


const app = express()
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))


const PORT = process.env.PORT
app.get('/',async (req,res)=>{
    try{
        const response = await axios.get('https://clear-bull-flannel-nightgown.cyclic.app/news')
        const responseData = response.data
        res.render('index' , {responseData})
    }
    catch(err){
        console.log(err)
    }
    
})

app.listen(PORT || 3000 , ()=>{
    console.log('Server listening')
})
