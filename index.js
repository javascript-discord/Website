express = require("express")
bodyParser = require("body-parser")
fs = require("fs")
nodemailer = require("nodemailer")
app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static("public"))

app.get('/',(res,req)=>{
  fs.createReadStream("public/index.html")
})
app.get('/images/:name',(res,req)=>{
  name = res.params.name
  fs.exists(`images/${name}`,(exists)=>{
    if(exists == true){
      fs.createReadStream(`images/${name}`).pipe(req)
    }else{
      req.end("image not found ¯\_(ツ)_/¯")
    }
  })
})
app.listen(3000,()=>{
  console.log(`Listening on port 3000`)
})