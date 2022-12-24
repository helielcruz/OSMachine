const mongoose = require('mongoose');

const orderService = mongoose.model('orderService', {
    id: String,
    description: String
});

module.exports = orderService;