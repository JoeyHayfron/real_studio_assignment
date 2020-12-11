const mongoose = require('mongoose')

const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    votedFor: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
})


const Vote = mongoose.model('vote', voteSchema)

module.exports.Vote = Vote
