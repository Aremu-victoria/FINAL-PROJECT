const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
const accounts = require('./models/UsersModel')
const port = process.env.port   || 5000;
const URI = process.env.uri || undefined;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

app.get('/',(req,res)=>{
    res.send('Hello from the server!')
})


app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const newUser = new accounts({ name, email, password });
      await newUser.save();
      res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' });
    }
  });

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
