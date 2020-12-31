// entry point for backend application
import express from 'express';
import data from './data.js';

const app = express();
const PORT = process.env.port || 5000;


app.get('/api/products', (req,res) => {
  res.send(data.products);
});

app.get('/', (req,res) => {
  res.send('Server is Ready...');
});

app.listen(PORT, () => console.log(`Served at: http://localhost:${PORT}`));