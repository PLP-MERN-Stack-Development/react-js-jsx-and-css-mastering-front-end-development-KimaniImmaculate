import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : filter === "Active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Task Manager
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
          type="text"
          placeholder="New task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button variant="primary" onClick={addTask}>
          Add
        </Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["All", "Active", "Completed"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.length === 0 && (
          <li className="text-gray-500 dark:text-gray-300">No tasks found</li>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border rounded dark:border-gray-700"
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-900 dark:text-white"
              }`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTask(task.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
