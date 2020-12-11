const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        maxLength: [10, 'Phone number has to be 10 numbers'],
    },
    status: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    }
})


const User = mongoose.model('user', userSchema)

module.exports.User = User
