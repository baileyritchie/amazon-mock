// entry point for backend application
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();
const DB_URL = process.env.DB_URL;
const app = express();
app.use(express.json()); // parsing json data middleware
app.use(express.urlencoded({extended:true}));
const PORT = process.env.port || 5000;

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders',orderRouter);
app.get('/api/config/paypal', (req,res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.get('/', (req,res) => {
  res.send('Server is Ready...');
});

app.use((err,req,res,next) => {
  // error catching middleware
  res.status(500).send({message: err.message});
})

mongoose
  .connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
  })
  .then(
    app.listen(PORT, () => console.log(`DB Connected & server running at: http://localhost:${PORT}`))
  ) 
  .catch((error) => console.log('ERROR: ', error.message));
