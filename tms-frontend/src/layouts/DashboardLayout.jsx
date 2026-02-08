import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
