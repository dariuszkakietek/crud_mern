const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  const notes = await Note.find();

  res.json({
    notes: notes,
  });
};

const fetchNote = async (req, res) => {
  const noteId = req.params.id;
  const note = await Note.findById(noteId);

  res.json({
    note: note,
  });
};

const createNote = async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  const note = await Note.create({
    title: title,
    body: body,
  });

  res.json({ note: note });
};

const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const title = req.body.title;
  const body = req.body.body;

  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  const note = await Note.findById(noteId);

  res.json({
    note: note,
  });
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;

  const note = await Note.findByIdAndDelete(noteId);

  res.json({
    success: "Record deleted",
  });
};

module.exports = {
  fetchNotes: fetchNotes,
  fetchNote: fetchNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
