const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knightsRoutes = require('./routes/knightRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const dbURI = "mongodb://localhost:27017/knight-project";

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use('/knights', knightsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
