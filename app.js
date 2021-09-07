const express=require('express')
const cors = require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const adminRoutes=require('./routes/admin.js')
const userRoutes=require('./routes/user.js')

const app=express()

app.use(cors())

app.use(bodyParser.json())


const MONGO_URI=`mongodb+srv://akhil:akhil007@cluster0.qc72n.mongodb.net/firsttest?retryWrites=true&w=majority`

app.use('/user',userRoutes)
app.use('/admin', adminRoutes)

mongoose
.connect(MONGO_URI)
 .then(result => {
 app.listen(process.env.PORT || 8080)
 }).catch(err => {
   console.log(err)
 })

