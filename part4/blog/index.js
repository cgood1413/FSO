// The index.js file only imports the actual application from the app.js file and then starts the application.

// const http = require("http");
const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");

// const server = http.createServer(app);

// server.listen(config.PORT, () => {
//   logger.info(`Server listening on port ${config.PORT}`);
// });

app.listen(config.PORT, () => {
    logger.info(`Server listening on port ${config.PORT}`);
})