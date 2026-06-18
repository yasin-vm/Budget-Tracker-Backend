import express from 'express'
import router from './router/router.js'
import {log}  from 'node:console'
import cors from 'cors'
import connectDB from './db/Db.js'

const app=express()
const PORT=3000
connectDB()

app.use(cors())
app.use(express.json())

app.use('/api',router)
app.get('/api',(req,res)=>{
     res.send('accound api')

})
app.listen(PORT,()=>{
    console.log('runiing at http://localhost:'+PORT+'/api');
    

})
export default app;