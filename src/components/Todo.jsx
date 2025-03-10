import { useState } from "react";

function Todo({ todo, dispatch }) {
  const { title, completed, id } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(title);

  return (
    <div style={styles}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "toggle_todo", payload: id })}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <h2>{title}</h2>
      )}

      {isEditing ? (
        <button
          onClick={() => {
            dispatch({ type: "edit_todo", payload: { id, newTitle: editText } });
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button
            onClick={() => dispatch({ type: "delete_todo", payload: id })}
            disabled={!completed}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px",
};

export default Todo;
