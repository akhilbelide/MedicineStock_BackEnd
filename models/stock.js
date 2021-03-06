const mongoose=require('mongoose')

const Schema=mongoose.Schema

const stockSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    units:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    newStock:{
        type:Number
    }
})

module.exports=mongoose.model('Stock',stockSchema)