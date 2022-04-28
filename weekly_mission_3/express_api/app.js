const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/v1/explorers',(req, res)=>{
    console.log(`Información del usuario explore ${new Date()}`)
    const explorer1 = {id:1,name:"Alexis"}
    const explorer2 = {id:2,name:"Alexis.."}
    const explorer3 = {id:3,name:"Alexis..."}
    const explorer4 = {id:4,name:"Alexis.."}
    const explorers  =  [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)

})


app.get('/v1/explorers/:id',(req, res)=>{
    console.log('Este es una funcion que recibe un parametro')
    const explorer = {id:1, name :"ExplorerName"}
    res.status(200).json(explorer)
})
app.post('/v1/explorers',(req, res)=>{
     console.log(`Fecha del parametro ${new Date()}`)
     const explorer = req.body
     res.status(201).json({menssage : `Created ${explorer.name}` })
})
app.put('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explorer PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({menssage : "Update"})
})
app.delete('/v1/exolorers/:id',(req, res)=>{
    console.log(`Api exploreres delete  request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({menssage: "Delete"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

