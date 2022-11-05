// glitch set up
let port = pricess.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("listening at", port);
})

// basic set up the localhost port and defining the framework to be express (which we installed with npm express)
const express = require("express")
const app = express()
const port = 3000

// basic set up for neDB storage
const Datastore = require("nedb")
// going to look for a secrets.db and make/load that version of the database
const db = new Datastore("secrets.db")
db.loadDatabase()

// let's us read the text submitted by the form
app.use(express.urlencoded({extended:false}))

app.get("/getSecret", (req, res)=> {
    db.find({}, function(err, docs){
        let obj = {data: docs}
        res.json(obj)
    })
})

// placeholder for our data to test things
const secrets = [{secret: "I hate matcha"}]

// read stuff from the "public" folder
app.use("/", express.static("public"))

// someone will submit data, and I want that data to show up in the json
app.post("/submitted", (req,res)=> {
    let obj = {
        // key: object
        secret: req.body.name_field,
    }
    // data that doesn't go away
    db.insert(obj)
})

// make sure the send and response is working
// `${_______}` a variable for the string, rather than hard coding the port number
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
