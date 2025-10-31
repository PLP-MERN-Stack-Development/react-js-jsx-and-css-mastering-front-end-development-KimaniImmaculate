import { useTheme } from "../context/ThemeContext";

export default function Button({ variant = "primary", children, className }) {
  const { theme } = useTheme();

  const baseClasses =
    "px-4 py-2 rounded font-semibold transition-colors duration-300";

  const variants = {
    primary:
      theme === "dark"
        ? "bg-indigo-600 text-white hover:bg-indigo-500"
        : "bg-blue-600 text-white hover:bg-blue-500",
    secondary:
      theme === "dark"
        ? "bg-gray-600 text-white hover:bg-gray-500"
        : "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger:
      theme === "dark"
        ? "bg-red-600 text-white hover:bg-red-500"
        : "bg-red-500 text-white hover:bg-red-400",
  };

  return <button className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</button>;
}

