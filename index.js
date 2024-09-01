import express from 'express';
import { errorhandler, validateMiddleWare } from './validateMiddleWare.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.post('/user',validateMiddleWare,(req,res)=>{
    console.log(req.body); 
    console.log("user created");
    res.send(`user created`);
     
})


app.listen(1000,()=>{
    console.log('Server is running on port 1000');
})
app.use(errorhandler)