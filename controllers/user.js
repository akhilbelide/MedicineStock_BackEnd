const { mapReduce } = require('../models/stock')
const Stock=require('../models/stock')

exports.getStock=(req, res, next)=>{
   
    Stock.find().select({"name":1, "units":1, "_id":0}).then(resp => {
        console.log(resp)
        res.status(200).json({data:resp})
    })
}

exports.updateStock=(req, res, next)=>{

    const data=req.body.data

    Promise.all(
        data.map((i)=>{
            Stock.updateOne({name:i.name},{units:i.units})
            .then(result => console.log(result))
            .catch(err => console.log(err))
        })
    ).then(resp => res.status(200).json({mnessage:'SUCCESSFULLY UPDATED ALL'}))
}


exports.searchStock=(req,res,next)=>{
    let searchStr=req.body.data
    searchStr='/'+searchStr+'/'
    
    var re = new RegExp(req.body.data, 'i');
    Stock.find({"name": {$regex: re}}).select({"name":1, "units":1, "_id":0}).then(resp => {
        console.log(resp)
        res.status(200).json({data:resp})
    })
}