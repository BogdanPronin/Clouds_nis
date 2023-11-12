import express from 'express';
import mongoose from 'mongoose';
import mongoRouter from './mongoRouter';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const ip = req.ip;
    const path = req.path;
    const query = req.query;
    const requestBody = req.body;
    console.log(JSON.stringify({ timestamp, ip, path, query, requestBody }));
    next();
  });

app.use(express.json());
app.use('/api', mongoRouter);



app.listen(port, async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log('Server running on port ' + port);
});

