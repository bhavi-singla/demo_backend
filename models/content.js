const mongoose = require("mongoose");

var contentSchema = new mongoose.Schema(
{
    title: String,
    data: String,
})

const contentModel = mongoose.model('content', contentSchema);

module.exports=contentModel;