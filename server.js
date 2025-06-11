const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { connectDB } = require("./config/dbConfig");
const indexRoute = require('./routes/indexRoutes');
const setupSwagger = require('./config/swagger');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); 

connectDB();

setupSwagger(app);

indexRoute(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
