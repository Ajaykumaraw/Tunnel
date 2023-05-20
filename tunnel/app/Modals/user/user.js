import mongoose, { Mongoose } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},  {
    timestamps:{}
}
)

UserModal = mongoose.model('user',userSchema)

export default UserModal;