const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/authModel');
const request = require('request');
const { token } = require('morgan');

// signing in a single user into the application
router.post('/signup', (req, res, next) => {
    User.find({email: req.body.email})
     .exec()
     .then(user => {
         if (user.length >= 1) {
             return res.status(409).json({
                 message: 'Mail exists'
             });
         } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    })
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    });
                    user
                      .save()
                      .then(result => {
                          console.log(result);
                          res.status(201).json({
                              message: 'User created'
                          });
                      })
                      .catch(err => {
                          console.log(err);
                          res.status(500).json({
                              error: err
                          });
                      })
                }
                })
         }
     })
    
    })

// logging in a single user in the application
router.post('/login', (req, res, next) => {
    User.find({email: req.body.email})
      .exec()
      .then(user => {
          if (user.length < 1) {
              return res.status(401).json({
                  message: 'Wrong email'
              });
          }
          bcrypt.compare(req.body.password, user[0].password, (err, result) => {
              if (err) {
                  return res.status(401).json({
                    message: 'Login failed'
                });
              }
              if (result) {
                  const token = jwt.sign({
                      email: user[0].email,
                      userId: user[0]._id
                  },
                  "secret",
                  {
                      expiresIn: '1h'
                  }
                  );
                  return res.status(200).json({
                      message: 'Login successful',
                      token: token
                  });
              }
              return res.status(401).json({
                message: 'Password didnot match'
            });
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })


})

// delete data if user has mistakenly signed up more than once
router.delete('/:userId', (req, res, next) => {
    User.remove({ _id: req.params.userId})
      .exec()
      .then(result => {
          res.status(200).json({
              message: 'User deleted'
          })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
})

module.exports = router;