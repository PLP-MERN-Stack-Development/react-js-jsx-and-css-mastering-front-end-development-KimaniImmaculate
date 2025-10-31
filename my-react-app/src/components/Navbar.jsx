import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Task Manager App</h1>

      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:underline text-lg">
          Home
        </Link>
        <Link to="/tasks" className="hover:underline text-lg">
          Tasks
        </Link>
        <Link to="/api" className="hover:underline text-lg">
          API
        </Link>
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200 transition text-lg"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
