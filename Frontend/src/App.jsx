import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./pages/Home.jsx";
import Hardware from "./pages/Hardware.jsx";
import Software from "./pages/Software.jsx";
import Documentation from "./pages/Documentation.jsx";

import DocumentationDetails from "./pages/Documentation_details.jsx";
import Leela_Projects_Details from "./pages/Leela_Projects_Details.jsx";

import Contact from "./pages/Contact.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import Blog from "./pages/Blog.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/:id" element={<DocumentationDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Leela_Projects_Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<AdminDashboard />} />

          {/* new backend page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
