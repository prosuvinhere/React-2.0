const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express")
const app = express();
const path = require("path")
const methodOverride = require("method-override")
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '7738897939'
});



app.get("/" , (req,res) => {
    let q = "select count(*) from user;";

    try{
    connection.query(q,(err,result) => {
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs",{count});
    })
    }catch(err){
        console.log(err)
        res.send("some error in data")
    }

})

app.listen("8080", () => {
    console.log("port Working")
})

app.get("/users",(req,res) => {
    let q = "select * from user";

    try{
        connection.query(q,(err,users) => {
            if(err) throw err;
            res.render("showusers.ejs",{users})
        })
        }catch(err){
            console.log(err)
            res.send("some error in data")
        }
})

app.get("/user/new", (req,res) => {
    res.render("new.ejs")    
})

app.post("/users", (req,res) => {
    let id = uuidv4();
    let  {username , email , password} = req.body;
    let q3 = `INSERT INTO user (id, username, email, password) VALUES ("${id}","${username}","${email}","${password}");`
    try{
        connection.query(q3,(err,result) => {
            if(err) throw err;

        });
        }catch(err){
            console.log(err)
            res.send("some error in data")
        }
    res.redirect("/users")
})

app.get("/user/:id/delete", (req,res) => {
    let {id} = req.params;
    let q5 = `select * from user where id = "${id}"`
    try{
        connection.query(q5,(err,result) => {
            if(err) throw err;
            let user = result[0];
            res.render("delete.ejs",{user})
        })
        }catch(err){
            console.log(err)
            res.send("some error in data")
        }
})

app.delete("/user/:id", (req,res) => {
    let {id}  = req.params;
    let {password, email} = req.body
    let q = `select * from user where id = "${id}"`;
    try{
        connection.query(q,(err,result) => {
            if(err) throw err;
            let user = result[0];
            if(email != user.email || password != user.password){
                res.send("incorrect")
            }
            else{
                let q2 = `delete from user where id = "${id}"`;
                connection.query(q2, (err,result) => {
                    if(err) throw err;
                    res.redirect("/users")
                })
            }
        });
        }catch(err){
            console.log(err)
            res.send("some error in data")
        }
})

app.get("/user/:id/edit", (req,res) => {
    let {id}  = req.params;
    let q = `select * from user where id = "${id}"`;
    try{
        connection.query(q,(err,result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs",{user})
        })
        }catch(err){
            console.log(err)
            res.send("some error in data")
        }
})

app.patch("/user/:id", (req,res) => {
    let {id}  = req.params;
    let {password : formPass , username : newUsername} = req.body
    let q = `select * from user where id = "${id}"`;
    try{
        connection.query(q,(err,result) => {
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("password incorrect")
            } else{
                let q2 = `update user SET username= "${newUsername}" where id = "${id}"`;
                connection.query(q2, (err,result) => {
                    if(err) throw err;
                    res.redirect("/users")
                })
            }
        });
        }catch(err){
            console.log(err)
            res.send("some error in data")
        }
})