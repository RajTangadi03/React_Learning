import { useEffect, useState } from "react";
import axios from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/user").then((res) => setUsers(res.data));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-mono text-primary mb-6">
        $ USERS
      </h1>

      {users.map((u) => (
        <div key={u.id} className="bg-white/10 p-4 rounded mb-4">
          {u.name} - {u.email}
        </div>
      ))}
    </DashboardLayout>
  );
}
