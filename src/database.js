const mongoose = require("mongoose");
const config = require("./config");

const MONGODB_URI = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

mongoose
  .connect('mongodb+srv://gonzaloUser:rocanroles092@cluster0.z2hxo.mongodb.net/notes-app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));
