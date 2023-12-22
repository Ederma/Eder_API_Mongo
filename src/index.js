const express = require ('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes =require('./routes/users');
const app = express();
const port = process.env.port || 9000;

//middlewares
app.use(express.json()); 
app.use('/api',userRoutes);
   

//routes
app.get('/', (req,res)=>{
    res.send('Bienvenido a mi API');
});


//conexion a BD
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('DB connected'))
    .catch((error) => console.error('Error connecting to DB', error));

app.listen(port,()=>console.log('Server listening on port',port));