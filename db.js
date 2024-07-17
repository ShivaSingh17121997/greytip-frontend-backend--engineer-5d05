const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://shiva:singh@cluster0.qffjyga.mongodb.net/graytip?retryWrites=true&w=majority&appName=Cluster0")

module.exports = connection;