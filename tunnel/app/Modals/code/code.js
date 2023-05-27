import { Schema,model,models } from "mongoose";

const CodeSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    notes:{
        type:String,
    }
},  {
    timestamps:{}
}
)

const CodeModal = models.tunnelcode || model("tunnelcode",CodeSchema)

export default CodeModal;