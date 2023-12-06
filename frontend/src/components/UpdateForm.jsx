import notesStore from "../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();

  return (
    <div>
      <h2>Update note</h2>
      <form onSubmit={store.updateNote}>
        <input
          type="text"
          name="title"
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.title}
        />
        <textarea
          name="body"
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.body}
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
