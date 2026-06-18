import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name:{ type:String , required : true},
    dob:{ type:Date, required: true},
    phone:{ type:Number, required: true,unique:true,minlength:10,  maxlength:10},
    email: { type:String, unique:true},
    username:{type:String, unique:true},
    password:{ type:String, required :true, minlength:8},

    budgetLimit:{
        type:Number,
        default:20000
    }
})

const User =mongoose.model('users',userSchema)

export default User;

