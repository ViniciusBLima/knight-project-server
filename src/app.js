require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knightsRoutes = require('./routes/knightRoutes');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const dbURI = process.env.DB_URI;

const app = express();

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use('/knights', knightsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
