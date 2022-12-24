const mongoose = require('mongoose');

const countUser = mongoose.model('countUser', {
    id: String,
    seq: Number
});

module.exports = countUser;