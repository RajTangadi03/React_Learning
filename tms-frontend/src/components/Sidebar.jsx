import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 bg-black/40 backdrop-blur-lg border-r border-white/10 p-6">
      <h2 className="text-primary font-mono text-xl mb-8">$ TMS</h2>

      <nav className="flex flex-col gap-4 text-gray-300">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>

        {(user?.role === "admin" || user?.role === "manager") && (
          <>
            <Link to="/create-task">Create Task</Link>
            <Link to="/users">Users</Link>
          </>
        )}

        {user?.role === "admin" && (
          <Link to="/managers">Managers</Link>
        )}

        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}
