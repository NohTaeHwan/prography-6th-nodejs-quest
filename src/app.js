import express from 'express';
import bodyParser from 'body-parser';
import router from './route/router';

const app = express();

//bodyParser 미들웨어 추가
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/hello-world', (req, res) => {
  res.send('hello world');
})

app.use('/todos',router);

export default app;
