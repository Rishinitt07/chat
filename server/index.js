const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//change ur local connection string
mongoose.connect("mongodb://localhost:27017/ecom", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);


app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;
  const form = new Form({ name, email, message });
  await form.save();
  res.status(201).json({ message: "Form data saved successfully!" });
});


app.get("/submissions", async (req, res) => {
  const submissions = await Form.find();
  res.json(submissions);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
