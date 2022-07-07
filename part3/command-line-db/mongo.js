const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://fullstack:${password}@fso-mongo.tn3sya9.mongodb.net/?retryWrites=true&w=majority`;

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});
const Contact = mongoose.model("Contact", contactSchema);

if (process.argv.length === 3) {
  mongoose
    .connect(url)
    .then((response) => {
      console.log("Connected to MongoDB");
      console.log("Phonebook: \n");
      Contact.find({}).then((response) => {
        response.forEach((contact) => {
          console.log(contact.name, contact.number);
        });
        mongoose.connection.close();
      });
    })
    .catch((err) => console.log(err));
} else {
  mongoose
    .connect(url)
    .then((response) => {
      console.log("Connected to MongoDB");
      const contact = new Contact({
        name: process.argv[3],
        number: process.argv[4],
      });
      return contact.save();
    })
    .then((response) => {
      console.log(
        `Added ${response.name} with the number ${response.number} to the phonebook`
      );
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}
