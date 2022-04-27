const express = require("express")
const app = express()

const port=3000
app.get('/',(req,res)=>{
    res.send("Hello word")
})

app.get('/lauchx',(req,res)=>{
    res.send("Yo soy la otra ruta")
})
app.get('/miInformacion',(req,res)=>{
    const objecto = {name : "Alexis", edad:28}
    res.send(objecto)
})
app.get('/explorers/:explorerName',(req,res)=>{
    res.send(req.params)
})

app.listen(port, ()=>{
    console.log(`Mi puerto esta en el ${port}`)
})