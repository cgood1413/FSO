// Modules under the models directory only define the Mongoose schema for entities
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

blogSchema.set("toJSON", {
  transform: (doc, returned) => {
    returned.id = returned._id.toString();
    delete returned._id;
    delete returned.__v;
  },
});

module.exports = mongoose.model("Blog", blogSchema);
