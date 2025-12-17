import { useState, useMemo } from "react";
import { Download, RefreshCw, Eye, X } from "lucide-react";

/* ---------------- DUMMY DATA (9 ENTRIES) ---------------- */
const DUMMY_ENQUIRIES = [
  {
    _id: "1",
    name: "Test User",
    email: "test@gmail.com",
    mobile: "918340202627",
    subject: "Test Email Configuration",
    message: "Testing email and dashboard UI",
    status: "new",
    createdAt: "17/12/2025, 09:43:50",
  },
  {
    _id: "2",
    name: "Krishna Kumar",
    email: "krishnakumar.snm004@gmail.com",
    mobile: "8340202627",
    subject: "Why Choose Us?",
    message: "I want to know more about your services",
    status: "new",
    createdAt: "17/12/2025, 09:30:21",
  },
  {
    _id: "3",
    name: "Krishna Kumar",
    email: "krishna.22jics139@jietjodhpur.ac.in",
    mobile: "8340202627",
    subject: "Enquiry about Aaklan Nexus Kit",
    message: "Please share details about Nexus Kit",
    status: "contacted",
    createdAt: "16/12/2025, 23:45:43",
  },
  {
    _id: "4",
    name: "Krishna Kumar",
    email: "krishnakumar.snm004@gmail.com",
    mobile: "+918340202627",
    subject: "All configurations updated successfully!",
    message: "Everything is working perfectly now",
    status: "contacted",
    createdAt: "16/12/2025, 22:30:57",
  },
  {
    _id: "5",
    name: "Krishna Kumar",
    email: "krishna.22jics139@jietjodhpur.ac.in",
    mobile: "+918340202627",
    subject: "Order for Leela Arduino Board",
    message: "I want to place an order",
    status: "new",
    createdAt: "16/12/2025, 22:28:28",
  },
  {
    _id: "6",
    name: "Krishna Kumar",
    email: "krishna.22jics139@jietjodhpur.ac.in",
    mobile: "+918340202627",
    subject: "Enquiry about Aaklan Nexus Kit",
    message: "Need pricing and availability",
    status: "new",
    createdAt: "16/12/2025, 20:47:43",
  },
  {
    _id: "7",
    name: "Krishna Kumar",
    email: "krishna.22jics139@jietjodhpur.ac.in",
    mobile: "8340202627",
    subject: "Enquiry about Aaklan Wonder Kit",
    message: "Looking for demo and documentation",
    status: "new",
    createdAt: "16/12/2025, 18:45:07",
  },
  {
    _id: "8",
    name: "Krishna Kumar",
    email: "krishna.22jics139@jietjodhpur.ac.in",
    mobile: "8340202627",
    subject: "Challenges in your learning journey",
    message: "Facing some difficulties while learning",
    status: "new",
    createdAt: "16/12/2025, 18:40:33",
  },
  {
    _id: "9",
    name: "Krishna Kumar",
    email: "krishna.22jics139@jietjodhpur.ac.in",
    mobile: "8340202627",
    subject: "Resolved demo enquiry",
    message: "Issue resolved successfully",
    status: "resolved",
    createdAt: "15/12/2025, 14:12:10",
  },
];

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selected, setSelected] = useState(null);

  /* ---------------- FILTER LOGIC ---------------- */
  const filtered = useMemo(() => {
    return DUMMY_ENQUIRIES.filter((e) => {
      const matchSearch =
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase()) ||
        e.mobile.includes(search) ||
        e.subject.toLowerCase().includes(search.toLowerCase());

      const matchStatus = statusFilter ? e.status === statusFilter : true;

      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  /* ---------------- STATS ---------------- */
  const total = DUMMY_ENQUIRIES.length;
  const newCount = DUMMY_ENQUIRIES.filter((e) => e.status === "new").length;
  const contactedCount = DUMMY_ENQUIRIES.filter(
    (e) => e.status === "contacted"
  ).length;
  const resolvedCount = DUMMY_ENQUIRIES.filter(
    (e) => e.status === "resolved"
  ).length;

  const exportCSV = () => {
    const headers = ["Name", "Email", "Mobile", "Subject", "Status"];
    const rows = filtered.map((e) =>
      [e.name, e.email, e.mobile, e.subject, e.status].join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "enquiries.csv";
    link.click();
  };

  const badge = (status) => {
    const map = {
      new: "bg-blue-100 text-blue-700",
      contacted: "bg-yellow-100 text-yellow-700",
      resolved: "bg-green-100 text-green-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${map[status]}`}
      >
        {status.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="mt-16 bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Enquiries Dashboard</h1>
          <p className="text-slate-600">
            Manage all customer enquiries in one place
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Total Enquiries" value={total} />
          <StatCard title="New" value={newCount} color="text-blue-600" />
          <StatCard
            title="Contacted"
            value={contactedCount}
            color="text-yellow-600"
          />
          <StatCard
            title="Resolved"
            value={resolvedCount}
            color="text-green-600"
          />
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4">
          <input
            placeholder="Search by name, email, mobile, subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
          </select>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
            <RefreshCw size={16} /> Refresh
          </button>

          <button
            onClick={exportCSV}
            className="flex items-center gap-2 border px-4 py-2 rounded-lg"
          >
            <Download size={16} /> Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3 text-left">Date & Time</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Subject</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">View</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e._id} className="border-t hover:bg-slate-50">
                  <td className="p-3">{e.createdAt}</td>
                  <td className="p-3 font-medium">{e.name}</td>
                  <td className="p-3">{e.email}</td>
                  <td className="p-3">{e.mobile}</td>
                  <td className="p-3 truncate max-w-xs">{e.subject}</td>
                  <td className="p-3">{badge(e.status)}</td>
                  <td className="p-3">
                    <button onClick={() => setSelected(e)}>
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white max-w-lg w-full p-6 rounded-xl relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>
              <h2 className="text-xl font-bold mb-4">Enquiry Details</h2>
              <p>
                <b>Name:</b> {selected.name}
              </p>
              <p>
                <b>Email:</b> {selected.email}
              </p>
              <p>
                <b>Mobile:</b> {selected.mobile}
              </p>
              <p>
                <b>Subject:</b> {selected.subject}
              </p>
              <p>
                <b>Message:</b> {selected.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color = "text-slate-900" }) => (
  <div className="bg-white p-6 rounded-xl shadow text-center">
    <p className="text-slate-500">{title}</p>
    <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
  </div>
);

export default AdminDashboard;
