const mongoose = require('mongoose');

main().then((res) =>{
    console.log("Success")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age  : Number
})

const User = mongoose.model("User",userSchema)

// User.deleteOne({name : "Vruce"})
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

User.findByIdAndDelete("6528d2e5a28ff71e4cab9005")
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// User.findOneAndUpdate({name : "Vruce"} ,{age : 30},{new : true})
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })