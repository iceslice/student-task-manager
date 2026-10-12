import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskStats from "./components/TaskStats.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const INITIAL_TASKS = [
  { id: 1, title: "Read the React components chapter", completed: true },
  { id: 2, title: "Build the Student Task Manager", completed: false },
];

const STORAGE_KEY = "student-task-manager:tasks";
const FILTER_KEY = "student-task-manager:filter";
const VALID_FILTERS = ["all", "pending", "completed"];

// Read saved tasks. Falls back to the starter tasks if nothing is saved
// or the saved data is missing, corrupted, or storage is unavailable.
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return INITIAL_TASKS;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : INITIAL_TASKS;
  } catch {
    return INITIAL_TASKS;
  }
}

// Read the saved filter, defaulting to "all" if it is missing or invalid.
function loadFilter() {
  try {
    const saved = localStorage.getItem(FILTER_KEY);
    return VALID_FILTERS.includes(saved) ? saved : "all";
  } catch {
    return "all";
  }
}

export default function App() {
  // Passing a function runs loadTasks only once, on the first render.
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState(loadFilter);

  // Save whenever the task list changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error("Could not save tasks:", err);
    }
  }, [tasks]);

  // Save whenever the filter changes.
  useEffect(() => {
    try {
      localStorage.setItem(FILTER_KEY, filter);
    } catch (err) {
      console.error("Could not save filter:", err);
    }
  }, [filter]);

  const addTask = (title) => {
    setTasks((prev) => [...prev, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const visibleTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <main className="app">
      <h1>Student Task Manager</h1>

      <Card title="Add a task">
        <TaskForm onAdd={addTask} />
      </Card>

      <Card title="Progress">
        <TaskStats
          total={tasks.length}
          completed={completedCount}
          remaining={tasks.length - completedCount}
        />
      </Card>

      <Card title="Your tasks">
        <FilterBar current={filter} onChange={setFilter} />
        <ErrorBoundary>
          <TaskList
            tasks={visibleTasks}
            totalTasks={tasks.length}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </ErrorBoundary>
      </Card>
    </main>
  );
}
