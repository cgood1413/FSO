// The app.js file creates the actual application and takes the router objects and middleware from other modules into use as shown below. App.js is also responsible for connecting to the DB.
const logger = require("./utils/logger");
const config = require("./utils/config");
const blogsRouter = require("./controllers/blogs");
const testRouter = require("./controllers/test");
const middleware = require("./utils/middleware");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(config.MONGODB_URI)
  .then((res) => {
    logger.info("Connected to MongoDB");
  })
  .catch((err) => {
    logger.error("Error connecting to MongoDB:", err.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);
app.use("/api/test", testRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errHandler);

module.exports = app;