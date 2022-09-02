const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:admin@cluster0.ayj7s.mongodb.net/?retryWrites=true&w=majority', {
    dbName:"vishnu"
}).then(() => console.log("COnnected")).catch((e) => console.log(e));