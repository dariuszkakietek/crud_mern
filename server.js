// Load env
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies

const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");

// Create an express app
const app = express();

//Configure express app
app.use(express.json());

// Connect to database
connectToDb();

// Routing

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

// Start server
app.listen(process.env.PORT || 3000);
