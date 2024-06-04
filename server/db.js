const Pool= require('pg').Pool
require("dotenv").config()


const pool = new Pool({
    connectionString:process.env.POSTGRES_URL_NO_SSL
})

module.exports=pool