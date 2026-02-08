import { useEffect, useState, useContext } from "react";
import axios from "../api/axios";
import { validTransition } from "../utils/taskWorkflow";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const { user } = useContext(AuthContext);

  const fetchTasks = async () => {
    const res = await axios.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateStatus = async (task) => {
    const next =
      task.status === "Pending"
        ? "In Progress"
        : task.status === "In Progress"
        ? "Completed"
        : null;

    if (user.role === "user" && !validTransition(task.status, next)) {
      toast.error("Invalid workflow transition");
      return;
    }

    await axios.put(`/centralControl/update-task/${task.id}`, {
      status: next
    });

    toast.success("Task Updated");
    fetchTasks();
  };

  const filtered = filter
    ? tasks.filter((t) => t.status === filter)
    : tasks;

  return (
    <div className="p-6">
      <h1 className="font-mono text-3xl mb-6 text-primary">
        $ TASKS
      </h1>

      <select
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 bg-black border p-2 rounded"
      >
        <option value="">All</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-gray-300">{task.description}</p>
            <p className="mt-2 text-primary">{task.status}</p>

            {task.status !== "Completed" && (
              <button
                onClick={() => updateStatus(task)}
                className="mt-4 bg-primary text-black px-4 py-2 rounded"
              >
                Advance
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
