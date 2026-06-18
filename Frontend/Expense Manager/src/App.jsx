import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import ScanBill from "./pages/ScanBill";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/stats"
        element={
          <ProtectedRoute>
            <Statistics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/scan-bill"
        element={
          <ProtectedRoute>
            <ScanBill />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;