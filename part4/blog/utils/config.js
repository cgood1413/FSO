// The handling of environment variables is extracted into a separate file and other parts of the application can access the environment variables by importing the configuration module
require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = { PORT, MONGODB_URI };