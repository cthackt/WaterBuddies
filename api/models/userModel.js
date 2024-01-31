const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please add a name']
   },
   email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
   },
   password: {
      type: String,
      required: [true, 'Please add a password']
   }
}, {
   timestamps: true
})

// Schema is exported as the mongoose 'User' model which gives it CRUD functions
module.exports = mongoose.model('User', userSchema)

