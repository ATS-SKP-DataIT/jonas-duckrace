const pg = require("pg");
require('dotenv').config();

const pool = new pg.Pool({
    user: process.env.USER,
    password: process.env.PASSCODE,
    host: process.env.SERVER,
    port: 5432,
    database: process.env.DB
});

module.exports = pool;