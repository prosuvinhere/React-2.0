const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then((res) => {
    console.log("connected")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        form : "neha",
        to: "priya",
        msg : "send",
        created_at : new Date()
    },
    {
        form : "alpha",
        to: "rom",
        msg : "listen",
        created_at : new Date() 
    },
    {
        form : "lax",
        to: "tex",
        msg : "write",
        created_at : new Date() 
    },
]

Chat.insertMany(allChats)