const express = require("express");
const app = express();

let port =8080

app.listen(port,() => {
    console.log("listening")
})

// app.use((req,res) => {
//     console.log("recieved")
//     let code = "<h1> hi hello </h1>"
//     res.send(code)
// })

app.get("/",(req,res) => {
    res.send("hello their")
})

app.get("/apple",(req,res) => {
    res.send("you contacted apple")
})

app.get("/moon",(req,res) => {
    res.send("you contacted moon")
})

// app.get("*",(req,res) => {
//     res.send("this page is put of scope")
// })

app.post("/",(req,res) => {
    res.send("you contacted post")
})

app.get("/:username/:id",(req,res)=>{
    let {username ,id} = req.params; 
    res.send(`hello their @${username}.`)
} )

app.get("/search", (req,res) => {
    let {q}= (req.query)
    if(!q){
        res.send("nothing much")
    }
    res.send(`no results for ${q}`)
})