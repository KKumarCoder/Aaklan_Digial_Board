// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <>
      <NavigationBar />

      {/* All pages will be shown here */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
