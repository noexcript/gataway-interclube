const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        text: {
            type: String,
            reuired: [
                true,
                'Please add a text value'
            ]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true, ref: 'User'
        }

    },
    { timestamps: true }
)

module.exports = mongoose.model('Task', schema)