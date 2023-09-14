const express = require('express');
const mongodb = require('./db');
const app = express();
const cors = require('cors');
mongodb();
app.use(cors())
/*const mongoose = require('mongoose');
const {Schema} = mongoose;
const mongodb = async()=>{
    await mongoose.connect('mongodb://localhost:27017/wheather');


const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})
const ProductModel = mongoose.model('login',userSchema);
let data = new ProductModel({name:'sandeep',location:"hnadia",email:"sandeepkg8756@gmail.com",password:"123456789"});
let result = await data.save();
console.log(result);
}
mongodb();
const app = express();
*/
app.use(express.json());
app.use('/api',require('./Routers/createuser'));
app.use('/api',require('./Routers/loginuser'));

app.listen(5000,()=>{
    console.log("Listening on port 3000");
})