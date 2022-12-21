import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
});


const user =  mongoose.model('user', userSchema);
export default user;