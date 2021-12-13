const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

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
    try {
        const results = await pool.query("INSERT INTO accounts (username, password, phone) VALUES ($1, $2, $3) returning *",
        [req.body.username, req.body.password, req.body.phone]);
        console.log(results);
    } catch (err) {
        console.error(err.message);
    }
})
//Get user
app.get("")

app.listen(5000, () => {
    console.log("Server has started.. listening on port 5000!");
})