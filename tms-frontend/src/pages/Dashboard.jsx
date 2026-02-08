import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-mono text-primary mb-6">
        $ DASHBOARD
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <h2>Total Tasks</h2>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <h2>Users</h2>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <h2>Managers</h2>
        </div>
      </div>
    </DashboardLayout>
  );
}
