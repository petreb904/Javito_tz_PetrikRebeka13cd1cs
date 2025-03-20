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


app.get('tagozatok', (req, res) => {
    const sqlParancsok = "Select * FROM tagozatok ";
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})




app.listen(3001, ()=>{
    console.log('Megy a server a 3001 porton')
})