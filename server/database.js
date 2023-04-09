const sql = require('mysql');

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gyalpobites'
});

connection.connect((err)=>{
    if (err){
        console.log("Database connection failed");
    }
    else{
        console.log("Database connection Success!!!");
    }
})


module.exports = connection;