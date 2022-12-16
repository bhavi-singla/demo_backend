const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 8000;

const uri = "mongodb+srv://Bhavit:<password>@cluster0.rf3qthh.mongodb.net/competition?retryWrites=true&w=majority";

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

var contentSchema = new mongoose.Schema(
    {
      title: String,
      data: String,
    })

contentModel = mongoose.model('content', contentSchema);



app.get('/value',async (req,res) => {
    const value = await contentModel.find({});
    console.log(value);
    res.send(value);
});
app.post('/send',async(req,res)=>{
    let data = new contentModel({"title":"hello","data":"I am Bhavit"});
    data = await data.save();
    res.status(200).json({
        status: 200,
        data: data,
      });
})
app.listen(port, () => {
  console.log("Server running on " + port);
});

module.exports=app;
