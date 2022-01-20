const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();



               // MAKING EXPRESS.JS CONNECTION

// express middleware code

app.use(express.urlencoded({ extend: false }));
app.use(express.json());


// DEFAULT RESONSE FOR ANY OTHER REQUEST (NOT FOUND)
         
app.use((req, res) => {
    res,status(404).end();
});        

               
            // CONNECT TO  MYSQL DATABASE

 const db = mysql.createConnection(
     {
         host: 'localhost',
         // mysql username
         user: 'root',
         // password
         password: '',
         database: 'election'
     },
     console.log('Connected to the election database.')
 );           


 // CODE TO RETURN DATA FOR SQL CANDIDATES TABLE
               
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});



// start express.js server on port 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




              