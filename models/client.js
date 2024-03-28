const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    clientEmail:{
        type: String,
        required: [true, "Please add Email"]
    },
    clientPassword:{
        type: String,
        required:[true, "Please add Passwrord"]
    }
})

module.exports = mongoose.model('Client', clientSchema)