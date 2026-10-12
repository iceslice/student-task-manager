export default function TaskItem({ task, onToggle, onDelete }) {
  const handleDelete = () => {
    if (window.confirm(`Delete "${task.title}"?`)) {
      onDelete(task.id);
    }
  };

  return (
    <li className={task.completed ? "task done" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="title">{task.title}</span>
      </label>
      <span className="status">{task.completed ? "Completed" : "Pending"}</span>
      <button className="danger" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
