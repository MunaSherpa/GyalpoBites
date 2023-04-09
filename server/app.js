const httpServer = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./database');
const server = httpServer.createServer(app);


app.use(express.json());
app.use(cors());





// Routing pages and sign up log in form validation from here


app.post('/signup', (req,res)=>{

    const { email, username, address, password } = req.body;
    console.log(email);
    console.log(password);

    try {
        connection.query("SELECT * FROM user_table WHERE email =?", [email], function (err, data) {
            if (err) {
                console.log(err);
                res.send("An error occured")
                res.status(404);
            }
            else if (data.length > 0) { //checking if user with same email exits or not in the database
                console.log("User alredy exists");
                console.log(`${data.length}`);
                res.send("User alredy exists");
                res.status(404);

            }
        else if(!email || !password){
                res.send('Please fill all the fields')
                console.log("Please fill all the fields");

        }
        else {

            connection.query("INSERT INTO user_table (email, password) VALUES(?,?)", [email, password], function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("User Registered Successfully");
                        res.send("User Registration Successfully")
                    }
                });

            }
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }


})

app.post('/login', (req,resp)=>{

    const { email, password } = req.body;
    console.log(email);
    console.log(password);



    try {
  
        connection.query("SELECT * FROM user_table WHERE email=? && password =?", [email, password], function (err, data) {
            if (err) {
                console.log(err);
                resp.send("An error occured")
            }
            else if (!email || !password){
                resp.send('Please Fill all the fields');
                console.log("Please Fill all the fields");

            }
            else if (data.length > 0) { //checking if user with same email exits or not in the database
                console.log("Log in Successful");


                resp.send("Log in Successful");
            }
            else 
            {
                console.log("User doesn't Exist Please register first")
                resp.send("User doesn't exist");


            }
        })

    } catch (error) {

    }

})






server.listen(3001, ()=>{
    console.log("Server is running of port 5000 Successfully");
})