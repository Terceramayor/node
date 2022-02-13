const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
var fs = require('fs');

dotenv.config()

const app = express();
app.use(cors());

const host = process.env.SERVER_IP
const port = process.env.PORT

const index = fs.readFileSync('./../basicWebpage/index.html')
const styles = fs.readFileSync('./../basicWebpage/style.css')
const script = fs.readFileSync('./../basicWebpage/dist/index.dist.js')


app.get('/index',(request,response)=>{
    console.log(request.url)
    response.writeHead(200,{'Content-Type': 'text/html'})
    response.end(index)
})

app.get('/style.css',(request,response)=>{
    console.log(request.url)
    response.writeHead(200,{'Content-Type': 'text/css'})
    response.end(styles)
})

app.get('/index.dist.js',(request,response)=>{
    console.log(request.url)
    response.writeHead(200,{'Content-Type': 'text/javascript'})
    response.end(script)
})

app.listen(port)