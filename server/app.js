import express from 'express';
import { serverPort } from '../server/server';
import appe from '../server/appe';


const app = express();

app.get('/', (req, res) =>{
   res.send(appe);
});

const server = app.listen(serverPort, () =>{
   console.log('Server is up port 8080');
});