import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use('/hello-world', (req, res) => {
  res.send('hello world');
})

export default app;
