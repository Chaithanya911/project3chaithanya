const mongooes = require('mongoose');

const userSchema = new mongooes.Schema({
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true }
});

module.exports = mongooes.model('User',userSchema);