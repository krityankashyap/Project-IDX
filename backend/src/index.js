import express from 'express';
import cors from 'cors';
import { serverConfig } from './config/serverConfig.js';

const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());


app.get('/ping', (req, res)=>{
  res.json({
    message: 'pong',
  });
});

app.listen(serverConfig.PORT, ()=>{
  console.log('Server is running on PORT: ', serverConfig.PORT);
})
