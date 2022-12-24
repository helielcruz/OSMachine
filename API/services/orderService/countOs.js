const mongoose = require('mongoose');

const countOs = mongoose.model('countOs', {
    id: String,
    seq: Number
});

module.exports = countOs;