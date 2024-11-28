const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const tutorialRoutes = require("./routes/tutorialRoutes");
app.use("/api/tutorials", tutorialRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
