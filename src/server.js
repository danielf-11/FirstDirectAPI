require('dotenv').config();
//const https = require('https');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;
const usersRouter = require('./users/users.routes');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());
app.use(usersRouter);
app.use(express.json);

app.post('/login', (req, res) => {
  const uID = req.body.uID;
  const token = jwt.sign(uID, process.env.ACCES_TOKEN_SECRET);
  res.json({ accessToken: token });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//https.createServer(app).listen(port);
