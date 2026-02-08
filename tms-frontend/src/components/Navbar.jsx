import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center px-8 py-4 border-b border-white/10">
      <h1 className="font-mono text-primary">Welcome, {user?.name}</h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Logout
      </button>
    </div>
  );
}
