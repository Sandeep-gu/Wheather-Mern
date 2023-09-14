const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/UserResisters");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecrete = 'dsfdsa35trey65323rd57fg113r34thgfjsfdgf';

router.post('/loginuser',
[
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ],
async (req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).json({errors:error.array()});
    }


    try{
        const email = req.body.email;
        const data = await User.findOne({email});
        console.log(data)
        if(!data){
            res.json({success:false});
        }else{
            const pwdCompare = await bcrypt.compare(req.body.password,data.password);
            if(!pwdCompare){
                return res.status(400).json({error:"Try with correct credentials"})

            }else{
                const id_data = {
                    user:{
                        id:data.id
                    }
                }
                const authToken = jwt.sign(id_data,jwtSecrete);

                res.json({success:true,authToken})
            }
        }
    }catch(err){
        res.json({success:false,err:err.message});
    }
}
);
module.exports= router;