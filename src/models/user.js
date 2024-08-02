
const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {

        username: {
            type: String,
            reuired: [true, 'Username is required']
        },
        email: {
            type: String,
            required: [true, 'E-mail is required'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', schema)