// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
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
     res.status(201).json({menssage : "Created"})
})
// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

