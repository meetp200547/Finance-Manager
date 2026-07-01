import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import ScanBill from "./pages/ScanBill";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const [darkMode, setDarkMode] = useState(
  JSON.parse(
    localStorage.getItem("darkMode")
  ) || false
);
useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);
  return (
    <div className={darkMode ? "dark" : ""}>
    <Routes>
      <Route path="/" element={<Login darkMode={darkMode}
      setDarkMode={setDarkMode}
/>} />

      <Route path="/register" element={<Register darkMode={darkMode}
      setDarkMode={setDarkMode}
 />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home darkMode={darkMode}
      setDarkMode={setDarkMode}
 />
          </ProtectedRoute>
        }
      />

      <Route
        path="/stats"
        element={
          <ProtectedRoute>
            <Statistics darkMode={darkMode}
      setDarkMode={setDarkMode}
 />
          </ProtectedRoute>
        }
      />

      <Route
        path="/scan-bill"
        element={
          <ProtectedRoute>
            <ScanBill darkMode={darkMode}
      setDarkMode={setDarkMode}
 />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </div>
  );
}

export default App;