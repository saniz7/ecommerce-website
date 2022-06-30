const express = require('express');
const User = require('../model/user')
const route = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'Mernproject'
// create a user
route.post('/createuser', async (req, res) => {
    try{
    let user = await User.findOne({ email: req.body.email });
    if (user) {
       return res.send('Already exist')
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        email: req.body.email,
        password: secPass,

    });
    const data = {
        user: {
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    res.json({ authtoken })
    // res.json('data saved succesfully')
}
catch(error){
    console.log(error);
}
})
//login a user
route.post('/login', async (req, res) => {
    let success = false;
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            success = false;
            return res.send('No user found')
            
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.send('Password Incorrect');
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    }
    catch (error) {
        res.send('Server error')
    }
})

module.exports = route