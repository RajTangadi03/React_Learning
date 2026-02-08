import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-mono text-primary mb-6">
        $ PROFILE
      </h1>

      <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
        <p>Name: {user?.name}</p>
        <p>Role: {user?.role}</p>
        <p>ID: {user?.id}</p>
      </div>
    </DashboardLayout>
  );
}
