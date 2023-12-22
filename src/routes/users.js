const express = require('express');
const userSchema = require('../models/user');
const user = require('../models/user');
const router = express.Router();

//Create User
router.post('/users',(req,res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get all users
router.get('/users',(req,res)=>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema.findById(id)
      .then((data) => {
        if (!data) { // Si no se encuentra el usuario, data será null
          res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
          res.json(data); // Si se encuentra el usuario, respondemos con los datos del usuario
        }
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });

//Update user
router.put('/users/:id',(req,res)=>{
    const {id}=req.params;
    const {name,age,email,companyId,status}=req.body;
    userSchema
    .updateOne({_id:id},{$set:{name,age,email,companyId,status}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete user
router.delete('/users/:id',(req,res)=>{
    const {id}=req.params;
    userSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports= router;