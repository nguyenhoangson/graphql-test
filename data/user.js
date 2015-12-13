import mongoose from 'mongoose';

// declare schema
var UserSchema = new mongoose.Schema({
  _id: {
  	type: Number
  },
  name: {
    type: String
  },
  age: {
  	type: Number
  },
  email: {
  	type: String
  },
  courses: {
  	type: [String]
  }
});

// create model and its collection
var User = mongoose.model('users', UserSchema);

export default User;