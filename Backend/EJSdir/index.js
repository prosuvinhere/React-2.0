const express  = require("express")
const app = express()
const path =require("path")

const port = 8080
app.use(express.static(path.join(__dirname, "public/js")))
app.use(express.static(path.join(__dirname, "public/css")))
app.set("view engine" , "ejs")
app.set("views",path.join(__dirname, "/views"))
app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(port,() => {
    console.log("listening")
})

app.get("/rolldice", (req,res) => {
    let diceVal =Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{diceVal})
})

app.get("/ig/:username", (req,res) => {
    let {username} = req.params
    const instData = require("./data.json")
    let data = instData[username]
    if(data){
        res.render("insta.ejs",{data})
    }else{
        res.render("error.ejs")
    }
})