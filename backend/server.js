// entry point for backend application
import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';

dotenv.config();
const DB_URL = process.env.DB_URL;
const app = express();
const PORT = process.env.port || 5000;

app.get('/api/products/:id', (req,res) => {
  const product = data.products.find((product) => product._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({message: 'Product Not Found'})
  }
});

app.get('/api/products', (req,res) => {
  res.send(data.products);
});
app.use('/api/users', userRouter);

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
