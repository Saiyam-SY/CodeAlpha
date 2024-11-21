const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

app.listen(5000, () => console.log('Server running on port 5000'));
