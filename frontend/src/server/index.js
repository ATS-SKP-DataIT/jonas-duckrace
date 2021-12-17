const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//Middleware
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    key: "userId",
    secret: "skpdatait2021!",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))


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
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

//Check for account matching entered credentials on login page
app.post("/login1", async(req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        const results = await pool.query("SELECT * FROM accounts WHERE username = $1;",
        [username]) 
            console.log(results.rows[0].password)
        if (results){
            console.log("Found username..")
            bcrypt.compare(password, results.rows[0].password, (error, response) => {
                if (response) {
                    req.session.user = results.rows[0]
                    console.log(req.session.user)
                }else(
                    console.log("Wrong password...")
                )
            })
        }else{
            console.log("User does not exist!")
        }

    }catch(err){
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log("Server has started.. listening on port 5000!");
})