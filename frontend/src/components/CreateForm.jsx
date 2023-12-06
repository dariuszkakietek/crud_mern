import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  return (
    <div>
      <h2>Create note</h2>
      <form onSubmit={store.createNote}>
        <input
          type="text"
          name="title"
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
        />
        <textarea
          name="body"
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
