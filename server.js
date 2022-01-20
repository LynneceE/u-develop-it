const express = require('express');
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

// start express.js server on port 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




              