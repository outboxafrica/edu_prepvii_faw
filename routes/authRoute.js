const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/authModel');
const request = require('request');


router.post('/auth/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            username: req.body.username,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.status(200).json({
                message: 'User added successfully!'
            })
        })
        .catch(error => {
            res.status(401).json({
                message: 'An error occured!'
            })
        })
    })
    console.log(request.body);
})

router.post('/auth/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user => {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.json({
                    error: err
                })
            }
            if (result) {
                let token = jwt.sign({name: username}, 'verySecretValue', {expiresIn: '1h'})
                res.status(200).json({
                    message: 'Login Successful!',
                    token
                })
            }else{
                res.status(403).json({
                    message: 'Password didnot match!'
                })
            }
        })
    })
    .catch(err => {
        res.status(401).json({
            error: err
        })
    })
})

module.exports = router