const mongoose =require('mongoose');    

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    companyId:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

module.exports =mongoose.model ('User',userSchema);