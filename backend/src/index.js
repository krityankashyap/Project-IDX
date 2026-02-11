import express from 'express';
import cors from 'cors';
import { serverConfig } from './config/serverConfig.js';
import apiRouter from './routes/router.js';

const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use('/apis', apiRouter);

app.get('/ping', (req, res)=>{
  res.json({
    message: 'pong',
  });
});

app.listen(serverConfig.PORT, ()=>{
  console.log('Server is running on PORT: ', serverConfig.PORT);
})
