import express from 'express';
import router from './routes/web.js';

const app=express();
const port=process.env.PORT || 3000;


app.use('/',router);


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})