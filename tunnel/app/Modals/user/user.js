import mongoose, { Mongoose } from 'mongoose';

const userSchema = mongoose.Schema({
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

const UserModal = mongoose.model('tunnelUser',userSchema)

export default UserModal;