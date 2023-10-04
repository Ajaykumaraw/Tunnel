require('dotenv').config();
import mongoose from 'mongoose';

//const mongoUrl = 'mongodb://127.0.0.1:27017/tunnel';
const mongoUrl = `mongodb+srv://${process.env.MONGO_DB}:${process.env.MONGO_PASS}@cluster0.vfwwp1d.mongodb.net/${process.env.DBN}`

export const dbConnect = async () =>{
    return mongoose.connect(mongoUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}


mongoose.connection.on('connected',()=>{
    console.log('db connected');
})

mongoose.connection.on('disconnected',()=>{
    console.log('db disconnected');
})

