const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/User');
const JWT_SECRET = 'your_jwt_secret';

const signupn = async (req, res) => {
    try{
        const {email,password } =req.body;
        if(!email  ||password){
            return res.status(400).json({ message: 'email and password are required'});
          }
        if(await User.findone({ email })){
            return res.status(400).json({ message: 'user already exists'});
        }
const hashedpassword = await bcrypt.hash(password,10);
const user = new user({email,password:handshedpassword});
await user.save();

res.status(201).json({ message: 'User created' });
    }catch (error){
        res.status(500).json({message:' Internal server error'});
    }
};
const signin = async (req,res) => {
    try{
        const {email,password }=req.body;
        if(!email  ||password){
            return res.status(400).json({ message: 'Invalid credentials'});
          }
          const token = jwt.sign({email},JWT_SECRET, {expiresIn : '1h'});
            res.json({token });
    }catch (error){
        res.status(500).json({ message: 'Internal server error'});

}};
module.export = {sigup,signin};