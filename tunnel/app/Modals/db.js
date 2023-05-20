import mongoose from 'mongoose';

const mongoUrl = 'mongodb://127.0.0.1:27017/tunnel'

const dbConnect = () =>{
    return mongoose.connect(mongoUrl);
}


mongoose.connection.on('connected',()=>{
    console.log('db connected');
})

mongoose.connection.on('disconnected',()=>{
    console.log('db disconnected');
})


export default dbConnect;