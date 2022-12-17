const mongoose = require("mongoose");
const uri = "mongodb+srv://Bhavit:bhavit08022002@cluster0.rf3qthh.mongodb.net/competition?retryWrites=true&w=majority";

// connecting database
mongoose.set('strictQuery', true);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// checking the connection
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected Successfully");
});