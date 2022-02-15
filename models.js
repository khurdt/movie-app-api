const mongoose = require('mongoose'),
  bcrypt = require('bcrypt');

let movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: {
    name: String,
    description: String
  },
  director: {
    name: String,
    description: String
  },
  actors: [String],
  imagePath: String,
  featured: Boolean
});

let userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birthday: Date,
  favoriteMovies: [{
    type: mongoose.Schema.Types.ObjectID, ref: 'Movie'
  }]
});

//hashes password from the users Schema
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
}

//Authenticates hashed password with provided hashed pasword from login
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;