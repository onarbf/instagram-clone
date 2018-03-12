import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
})

const userModel = mongoose.model('User',userSchema);



export default userModel;
