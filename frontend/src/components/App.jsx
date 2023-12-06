import { useState, useEffect } from "react";
import notesStore from "../stores/notesStore";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

function App() {
  const store = notesStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="App">
      <Notes />
      {store.updateForm._id && <UpdateForm />}
      {!store.updateForm._id && <CreateForm />}
    </div>
  );
}

export default App;
