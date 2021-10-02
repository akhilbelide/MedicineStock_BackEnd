const { mapReduce } = require('../models/stock')
const Stock=require('../models/stock')
const async = require('async')

exports.postStock=(req, res, next) => {
    const name=req.body.name
    const units=req.body.units
    const price=req.body.price;
    const stock=new Stock({
        name:name,
        units:units,
        price:price,
        newStock:0
    })
    stock.save()
    .then(result => {
        res.status(200).json({message:'S'})
        console.log('Saved!!')
    })
    .catch(err => console.log(err))
}


exports.getStock=(req, res, next)=>{
    Stock.find().select({"name":1, "units":1,"_id":0, "newStock":1, "price":1}).then(resp => {
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
    ).then(resp => res.status(200).json({message:'SUCCESSFULLY UPDATED ALL'}))
}


exports.searchStock=(req,res,next)=>{
    let searchStr=req.body.data
    searchStr='/'+searchStr+'/'
    
    var re = new RegExp(req.body.data, 'i');

    console.log(re)
    console.log(searchStr)
    Stock.find({"name": {$regex: re}}).select({"name":1, "units":1, "_id":0}).then(resp => {
        console.log(resp)
        res.status(200).json({data:resp})
    })
}