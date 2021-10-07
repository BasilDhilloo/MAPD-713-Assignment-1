const mongoose = require('mongoose')


//Images Schema 
const Image = mongoose.model('Image',{
    imageId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
})

module.exports = {Image}