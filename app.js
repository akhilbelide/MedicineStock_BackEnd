const express=require('express')

const app=express()

const adminRoutes=require('./routes/admin')

app.use('/admin', adminRoutes)

app.listen(8080)

