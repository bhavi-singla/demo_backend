const Content = require("../../models/content");

exports.getData = async (req,res) =>{
    try{
        const value = await Content.find({});
        res.status(200).json({value});
    }
    catch(err)
    {
        res.status(500).json({error: err});
    }
}

exports.updateData = async (req, res) =>{
    try{
        let data = new Content({"title":"hello","data":"I am Bhavit"});
        data = await data.save();
        res.status(200).json({data: data});
    }
    catch(err)
    {
        res.status(500).json({error: err});
    }
}