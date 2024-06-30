const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path")
const Chat = require("./models/chat.js")
const methodOverride = require("method-override")
const ExpressError = require("./ExpressError")

app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended : true}))
app.use(methodOverride("_method"));

main()
.then((res) => {
    console.log("connected")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/",(req,res) => {
    res.send("working")
})



app.get("/chats",asyncWrap (async (req,res) => {
    let chats = await Chat.find()
    // console.log(chats);
    res.render("index.ejs",{chats})
}))

app.get("/chats/new", (req,res) => {
    // throw new ExpressError(404,"page not found")
    res.render("new.ejs")
})



app.get("/chats/:id/edit",asyncWrap (async (req,res) => {
    let {id} = req.params
    let chat  = await Chat.findById(id);
    res.render("edit.ejs",{chat})
}))

app.put("/chats/:id", asyncWrap (async (req,res) => {
    let { id } =req.params
    let { msg } =req.body
    let updatedChat = await Chat.findByIdAndUpdate(
        id , 
        {msg : msg},
        {runValidators:true, new: true}
    );
    console.log(updatedChat)
    res.redirect('/chats')
}))

app.delete("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let chat  = await Chat.findByIdAndDelete(id);
    console.log(chat);
    res.redirect("/chats")
})



app.post("/chats",asyncWrap (async (req,res,next) => {

    try{
        let {from, to ,msg} = req.body;
        let newChat = new Chat({
            form : from,
            to: to,
            msg : msg,
            created_at : new Date()
        });

        await newChat.save()
        res.redirect("/chats");
        }catch(err){
        next(err)
        }
}))

app.get("/chats/:id", asyncWrap(async (req,res,next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat){
        next(new ExpressError(404,"chat not found"))
    }
    res.render('edit.ejs',{chat});
}))

const handleValidationErr = (err) =>{
    console.log("this was wrong")
    console.dir(err.message)
    return err;
}

app.use((err,req,res,next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err)
    }
    next(err)
})

app.use((err,req,res,next) => {
    let {status = 500 , message = " some kind of error"} = err
    res.status(status).send(message)
})


//Handels all th error
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err))
    }
}

app.listen( 8080, () => {
    console.log("server is listening")
})