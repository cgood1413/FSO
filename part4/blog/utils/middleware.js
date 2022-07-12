// This module exists for custome middleware functions
const logger = require("./logger");

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:  ", req.path);
  logger.info("Body:  ", req.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (req, res, next) => {
  res.status(404).send({ error: "Unknown endpoint" });
};

const errHandler = (err, req, res, next) => {
    logger.error(err.message);
    res.status(400).send({error: err.message}); 
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errHandler
}