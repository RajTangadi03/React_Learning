import { useState } from "react";
import axios from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";
import toast from "react-hot-toast";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/centralControl/create-task/", {
        title,
        description,
        status: "Pending"
      });

      toast.success("Task created");
      setTitle("");
      setDescription("");
    } catch {
      toast.error("Error creating task");
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-mono text-primary mb-6">
        $ CREATE TASK
      </h1>

      <form onSubmit={handleSubmit} className="max-w-lg">
        <input
          className="w-full mb-4 p-3 bg-black rounded"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full mb-4 p-3 bg-black rounded"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-primary text-black px-6 py-3 rounded-lg">
          Create
        </button>
      </form>
    </DashboardLayout>
  );
}
