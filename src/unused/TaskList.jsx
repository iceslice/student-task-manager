import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, totalTasks, onToggle, onDelete }) {
  if (totalTasks === 0) {
    return <p className="empty">No tasks available</p>;
  }

  if (tasks.length === 0) {
    return <p className="empty">No tasks match this filter.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
