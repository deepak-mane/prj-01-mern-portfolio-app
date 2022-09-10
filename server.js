const express = require('express');
require('dotenv').config({ debug: true})


const app = express();
const dbConfig = require("./config/dbConfig")

const portfolioRoute = require("./routes/portfolioRoute")
app.use(express.json())
app.use('/api/v1/portfolio', portfolioRoute)

const port = process.env.PORT || 5000;

const path = require("path");

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}



app.listen(port, ()=> {
    console.log(`[SUCCESS] Backend [${process.env.NODE_ENV}] Server running on port [${port}]`)
})