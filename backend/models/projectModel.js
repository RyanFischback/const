const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        imageUrl: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Project', projectSchema)
