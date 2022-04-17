
const express = require('express')
const app = express()

let notes = [
    {
        "id":1
    },
    {
        "id":2
    },
    {
        "id":3
    }
]

// const app = http.createServer((request, response) => {

//         response.writeHead(200, { 'Content-Type': 'text/plain' })
//         response.end(JSON.stringify(notes))
//     }
// )

app.get('/',(request,response) => {
    
    response.send('<h1>hola caracola</h1>')
})

app.get('/api/notes',(request,response) => {
    
    response.json(notes)
})

app.get('/api/notes/:id',(request,response) => {
    
    const id = Number(request.params.id)
          
    const note = notes.find(note => note.id == id)

    response.json(note)
})

app.delete('/api/notes/:id',(request,response)=>{

    const id = Number(request.params.id)

    notes = notes.filter(note => note.id == id)

})

const PORT = 3001
app.listen(PORT, () => {

    console.log(`Servidor funcionando en el puerto ${PORT}`)
})


