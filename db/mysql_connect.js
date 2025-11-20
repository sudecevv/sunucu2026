const mysql=require("mysql2")
require("dotenv/config")
const dbConn=mysql.createPool({
    user:"root",
    password:"",
    database:"kampus",
    host:"localhost",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

module.exports=dbConn.promise()