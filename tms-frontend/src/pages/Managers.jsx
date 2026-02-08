import { useEffect, useState } from "react";
import axios from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Managers() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    axios.get("/manager").then((res) => setManagers(res.data));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-mono text-primary mb-6">
        $ MANAGERS
      </h1>

      {managers.map((m) => (
        <div key={m.id} className="bg-white/10 p-4 rounded mb-4">
          {m.name} - {m.email}
        </div>
      ))}
    </DashboardLayout>
  );
}
