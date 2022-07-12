//In controllers, all routes are now defined for the router object. The router is in fact a middleware, that can be used for defining "related routes" in a single place, that is typically placed in its own module. Router objects must only define the relative parts of the routes, as the start of the URL for requests is handled in app.js
const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", (req, res) => {
  Blog.find({}).then((blogs) => {
    res.json(blogs);
  });
});

blogsRouter.post("/", (req, res) => {
  const blog = new Blog(req.body);

  blog.save().then((response) => {
    res.status(201).json(response);
  });
});

module.exports = blogsRouter;