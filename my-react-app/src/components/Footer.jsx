import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-4 mt-6 text-center transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-700"
      }`}
    >
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      
    </footer>
  );
}

