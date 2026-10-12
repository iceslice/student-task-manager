import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();

    if (!trimmed) {
      setError("Task title can't be empty.");
      return;
    }

    onAdd(trimmed);
    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <input
          type="text"
          value={title}
          placeholder="What do you need to do?"
          aria-label="Task title"
          aria-invalid={Boolean(error)}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
        />
        <button type="submit">Add task</button>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
    </form>
  );
}
