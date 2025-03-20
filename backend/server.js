const express =require('express')
const app=express()
var cors =require('cors')
app.use(cors())
const mysql=require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    port:3307,
    database:'felveteli',
    user:'root',
    password:''

});

/*lekerdezeshelye*/

app.listen(3001, ()=>{
    console.log('Megy a server a 3001 porton')
})