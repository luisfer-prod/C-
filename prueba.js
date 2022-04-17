const http = require('http')

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

const app = http.createServer( (request,response) => {

        response.writeHead(200,{'Content-Type':'text/plain'})
        response.end(JSON.stringify(notes))
    }
)

const PORT = 3001
app.listen(PORT)
console.log(`Servidor funcionando en el puerto ${PORT}`)