const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    },
    password:{
        type: 'string',
        required: true,
    },
    location:{
        type:'string',
        required: true,
    }
});
module.exports = mongoose.model('user',userSchema);
