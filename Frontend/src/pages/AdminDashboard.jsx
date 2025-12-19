import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { format, formatDistanceToNow } from "date-fns";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    inProgress: 0,
    resolved: 0,
  });

  const API_URL = "https://leel-backend-server.onrender.com/api/enquiries";

  const fetchEnquiries = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (statusFilter !== "All") params.append("status", statusFilter);

      const response = await axios.get(`${API_URL}?${params.toString()}`);

      if (response.data.success) {
        setEnquiries(response.data.data);
        if (response.data.statusCounts) {
          setStats({
            total: response.data.statusCounts.Total || 0,
            new: response.data.statusCounts.New || 0,
            contacted: response.data.statusCounts.Contacted || 0,
            inProgress: response.data.statusCounts["In Progress"] || 0,
            resolved: response.data.statusCounts.Resolved || 0,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      alert("Failed to load enquiries. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [searchTerm, statusFilter]);

  useEffect(() => {
    fetchEnquiries();

    // Refresh every 30 seconds
    const interval = setInterval(fetchEnquiries, 30000);
    return () => clearInterval(interval);
  }, [fetchEnquiries]);

  const handleUpdate = async () => {
    if (!selectedEnquiry || (!note && !status)) return;

    try {
      await axios.put(`${API_URL}/${selectedEnquiry._id}`, {
        note,
        status,
      });

      // Refresh enquiries
      fetchEnquiries();

      // Clear form
      setNote("");
      setStatus("");
      setSelectedEnquiry(null);

      alert("✅ Enquiry updated successfully");
    } catch (error) {
      console.error("Error updating enquiry:", error);
      alert("❌ Failed to update enquiry");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Contacted":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-purple-100 text-purple-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "New":
        return "🆕";
      case "Contacted":
        return "📞";
      case "In Progress":
        return "🔄";
      case "Resolved":
        return "✅";
      default:
        return "📋";
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return format(date, "dd/MM/yyyy, HH:mm:ss");
    } catch {
      return dateString;
    }
  };

  const getTimeAgo = (dateString) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch {
      return "";
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?"))
      return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchEnquiries();
      alert("Enquiry deleted successfully");
    } catch (error) {
      alert("Failed to delete enquiry");
    }
  };

  const exportToCSV = () => {
    const headers = [
      "S.No",
      "Date",
      "Name",
      "Email",
      "Phone",
      "Subject",
      "Status",
      "Message",
    ];
    const csvData = enquiries.map((enq, index) => [
      index + 1,
      formatDate(enq.createdAt),
      enq.name,
      enq.email,
      enq.phone,
      enq.subject,
      enq.status,
      enq.message.replace(/,/g, ";"), // Replace commas to avoid CSV issues
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enquiries_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading && enquiries.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading enquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Enquiries Dashboard
        </h1>
        <p className="text-gray-600">
          Manage all customer enquiries in one place
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow">
          <div className="text-3xl font-bold mb-2">{stats.total}</div>
          <div className="text-sm opacity-90">Total Enquiries</div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-6 rounded-xl shadow">
          <div className="text-3xl font-bold mb-2">{stats.new}</div>
          <div className="text-sm opacity-90">New</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-6 rounded-xl shadow">
          <div className="text-3xl font-bold mb-2">{stats.contacted}</div>
          <div className="text-sm opacity-90">Contacted</div>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-6 rounded-xl shadow">
          <div className="text-3xl font-bold mb-2">{stats.inProgress}</div>
          <div className="text-sm opacity-90">In Progress</div>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-6 rounded-xl shadow">
          <div className="text-3xl font-bold mb-2">{stats.resolved}</div>
          <div className="text-sm opacity-90">Resolved</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, email, phone, subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <button
            onClick={() => {
              setSearchTerm("");
              setStatusFilter("All");
            }}
            className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Clear Filters
          </button>
          <button
            onClick={exportToCSV}
            className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      S.No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {enquiries.length === 0 ? (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-6 py-8 text-center text-gray-500"
                      >
                        No enquiries found
                      </td>
                    </tr>
                  ) : (
                    enquiries.map((enquiry, index) => (
                      <tr
                        key={enquiry._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {formatDate(enquiry.createdAt)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {getTimeAgo(enquiry.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {enquiry.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate max-w-[150px]">
                            {enquiry.email}
                          </div>
                          <div className="text-xs text-gray-500">
                            {enquiry.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 truncate max-w-[200px]">
                            {enquiry.subject}
                          </div>
                          <div className="text-xs text-gray-500 truncate max-w-[200px]">
                            {enquiry.message.substring(0, 50)}...
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              enquiry.status
                            )}`}
                          >
                            <span className="mr-1">
                              {getStatusIcon(enquiry.status)}
                            </span>
                            {enquiry.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button
                            onClick={() => setSelectedEnquiry(enquiry)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View/Update
                          </button>
                          <button
                            onClick={() => handleDelete(enquiry._id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Update Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow p-6 sticky top-6">
            {selectedEnquiry ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Update Enquiry
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedEnquiry(null);
                      setNote("");
                      setStatus("");
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                {/* Customer Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">
                    Customer Details
                  </h4>
                  <p className="text-sm text-gray-900">
                    <strong>Name:</strong> {selectedEnquiry.name}
                  </p>
                  <p className="text-sm text-gray-900">
                    <strong>Email:</strong> {selectedEnquiry.email}
                  </p>
                  <p className="text-sm text-gray-900">
                    <strong>Phone:</strong> {selectedEnquiry.phone}
                  </p>
                  <p className="text-sm text-gray-900">
                    <strong>Subject:</strong> {selectedEnquiry.subject}
                  </p>
                  <p className="text-sm text-gray-900 mt-2">
                    <strong>Message:</strong> {selectedEnquiry.message}
                  </p>
                </div>

                {/* Status Update */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Update Status
                  </label>
                  <select
                    value={status || selectedEnquiry.status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Status</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>

                {/* Add Note */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add Follow-up Note
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add your notes here..."
                  />
                </div>

                {/* Current Notes */}
                {selectedEnquiry.notes && selectedEnquiry.notes.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Previous Notes
                    </h4>
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {selectedEnquiry.notes.map((noteItem, idx) => (
                        <div key={idx} className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-800">
                            {noteItem.note}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {getTimeAgo(noteItem.createdAt)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={handleUpdate}
                    disabled={!note && !status}
                    className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Save Updates
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  📋
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No enquiry selected
                </h3>
                <p className="text-gray-600">
                  Select an enquiry from the table to view details and update
                  status.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
