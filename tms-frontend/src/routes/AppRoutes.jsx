import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import ProtectedRoute from "../components/ProtectedRoute";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          // <ProtectedRoute roles={["admin", "manager", "user"]}>
            <Dashboard />
          // </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          // <ProtectedRoute roles={["admin", "manager", "user"]}>
            <Tasks />
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
}
