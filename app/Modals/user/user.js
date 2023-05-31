import { Schema,model,models } from "mongoose";

const userSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    email:{
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

const UserModal = models.tunnelUser || model("tunnelUser",userSchema)

export default UserModal;