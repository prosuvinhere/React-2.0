const express = require("express")
const app = express()
const ExpressError = require("./ExpressError")

const check = (req,res,next) => {
    let {token} =req.query;
    if(token === "giveaccess"){
        next()
    }
    throw new ExpressError(401,"access denied")
};

app.get("/api",check,(req,res) => {
    res.send("data")
})

app.get("/",(req,res) => {
    res.send("hi, I a am Root")
})

app.get("/err",(req,res) => [
    abcd=abcd
])

app.get("/admin",(req,res) =>{
    throw new ExpressError(403,"access is not allowed")
})

app.use((err,req,res,next) => {
    let { status=500, message="some error"} = err;
    res.status(status).send(message)
})


app.listen(8080,() => {
    console.log("serever is working")
})