import { useTheme } from "../context/ThemeContext";

export default function Card({ title, children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg p-6 shadow-md mb-4 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-700 text-gray-100 shadow-gray-900/50"
          : "bg-white text-gray-900 shadow-gray-300"
      }`}
    >
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}

