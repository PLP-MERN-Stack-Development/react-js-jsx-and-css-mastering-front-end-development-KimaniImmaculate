import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext"; 
import Layout from "./components/Layout";
import Card from "./components/Card";
import Button from "./components/Button";
import TaskManager from "./components/TaskManager";
import APIPage from "./components/APIPage";

function App() {
  const { theme } = useTheme(); 

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="max-w-md mx-auto text-center mt-10">
                  <Card title="Welcome!">
                    <p className="mb-4 text-lg">
                      This is your reusable component setup in action 🎉
                    </p>
                    <Button variant="primary" className="text-lg">
                      Get Started
                    </Button>
                  </Card>
                </div>
              }
            />

            {/* Task Manager Page */}
            <Route path="/tasks" element={<TaskManager />} />

            {/* API Page */}
            <Route path="/api" element={<APIPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
