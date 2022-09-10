const mongoose = require('mongoose');

console.log(`Mongodburi: ${process.env.MONGODB_URI}`)

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

const connection = mongoose.connection;

connection.on('error',()=>{
    console.log(`[ERROR  ] Connecting to Database [${process.env.MONGODB_URI}]`)
})
connection.on('connected',()=>{
    console.log(`[SUCCESS] Connecting to Database [${process.env.MONGODB_URI}]`)    
})

module.exports = mongoose;