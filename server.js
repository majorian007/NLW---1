const express = require('express')
const server = express()
 

const db = require("./database/db") 

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um dia sai esse projeto"})
})

server.get("/create-point2", (req, res) => {

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão seus registros:")
        console.log(rows)
    return res.render("create-point2.html", {places: "rows"})
    })

    


})

server.get("/search", (req, res) => {
    return res.render("search-ressults.html")
})


server.listen(3000)