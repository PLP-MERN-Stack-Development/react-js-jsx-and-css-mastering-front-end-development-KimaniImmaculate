import { useTheme } from "../context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
}

