// The logger utility helps to ensure uniformity in logging to the console. It also ensures that if we wanted to start writing logs to a file or send them to an external logging service we would only have to make changes in one place
const info = (...params) => {
  console.log(...params);
};

const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info,
  error,
};