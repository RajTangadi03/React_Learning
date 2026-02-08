import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const user = await login(email, password);

    toast.success("Login successful");

    if (user.role === "admin" || user.role === "manager") {
      navigate("/dashboard");
    } else {
      navigate("/tasks");
    }

  } catch (err) {
    toast.error("Invalid credentials");
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 w-96"
      >
        <h2 className="text-2xl font-mono text-primary mb-6">
          $ LOGIN
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 bg-black text-white placeholder-gray-400 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 bg-black text-white placeholder-gray-400 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-primary text-black py-3 rounded-lg hover:scale-105 transition">
          Login
        </button>
      </form>
    </div>
  );
}
