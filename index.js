express = require("express")
bodyParser = require("body-parser")
fs = require("fs")
nodemailer = require("nodemailer")
app = express()

app.listen(3000,()=>{
  console.log(`Listening on port 3000`)
})