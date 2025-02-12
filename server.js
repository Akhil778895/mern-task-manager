const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();

// Middleware to parse JSON first
app.use(express.json());

// Then apply CORS
const corsOptions = {
    origin: "http://localhost:5173",  // Your React app URL
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  };
  app.use(cors(corsOptions));
  

// Importing routes
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

// Using routes
app.use("/api/auth", userRoutes);
app.use("/api/tasks", taskRoutes);

// Connect to DB and start server
const connectDB = require("./config/db");
connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
});
