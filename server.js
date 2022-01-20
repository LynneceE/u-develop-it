const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();


             // STEP 1 MAKE EXPRESS JS AND DATABASE CONNECTION



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
         password: '', // ADD PASSWORD ONLY WHEN NEEDING TO PULL DATA
         database: 'election'
     },
     console.log('Connected to the election database.')
 );           


 // CODE TO RETURN DATA FOR SQL CANDIDATES TABLE
               
//db.query(`SELECT * FROM candidates`, (err, rows) => {
    //console.log(rows);
//});


                    // END STEP 1


                    // STEP 2 CREATE MYSQL QUERIES TO READ, DELETE AND CREATE OPERATIONS
                    
 // QUERY TO RETURN ( READ) 1 CANDIDATE
 //db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
     //if (err) {
     //console.log(err);
     //}
    // console.log(row);
// });                   


 // QUERY TO DELETE A A CANDIDATE (is prepared statement usng '?' as a place holder, also requires WHERE id)
//db.query(`DELETE FROM candidates WHERE id = ?` , 1, (err, result) => {
    //if (err) {
        //console.log(err);
    //}
    //console.log(result);
//});

// QUERY TO CREATE OPERATION

// CREATE CANDIDATE

//const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
              //VALUES (?,?,?,?)`;
//const params = [1, 'Ronald', 'Firbank', 1];

//db.query(sql, params, (err, result) => {
    //if (err) {
        //console.log(err);
    //}
    //console.log(result);
//});


// start express.js server on port 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




              