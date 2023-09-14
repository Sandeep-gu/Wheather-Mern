const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/wheather'
const mongodb = async()=>{
    await mongoose.connect(mongoURI)
   
}
module.exports = mongodb;
