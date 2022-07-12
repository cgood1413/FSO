const testRouter = require("express").Router();

testRouter.get("/", (req, res) => {
  res.send("GET request to test works!");
});

testRouter.post('/', (req, res) => {
    res.send('POST request to test works!');
})

module.exports = testRouter;