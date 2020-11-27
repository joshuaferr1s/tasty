function Notes({ notes }) {
  return (
    <>
      <h2 className="list-title">Notes</h2>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={`note-${index}`}>
            {note}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Notes;
