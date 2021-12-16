const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
const bcrypt = require("bcrypt");

//Middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get("/signup", async(req, res) => {
    res.json({
        status: "success",
        data: {
            user: ["username", "phone"]
        }
    })
    console.log("Test");
    res.send("skrt");
})

//Create user
app.post("/create", async(req,res) => {
    const saltRounds = 10;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, async (err, hash) => {
    try {
        const results = await pool.query("INSERT INTO accounts (username, password, phone) VALUES ($1, $2, $3) returning *",
        [req.body.username, hash, req.body.phone]);
        console.log(results);
    } catch (err) {
        console.error(err.message);
    }
})
})
//Get user
app.get("/login1", async(req,res) => {
    try{
        const results = await pool.query("SELECT * FROM accounts WHERE username = $1 AND password = $2 returning *",
        [req.body.username, req.body.password])
        console.log("success")
    }catch(err){
        console.log(err)
    }
    res.send("login")
})

app.listen(5000, () => {
    console.log("Server has started.. listening on port 5000!");
})