import { Outlet } from "react-router-dom";

import Footer from "@/layouts/root/Footer";
import Navbar from "@/layouts/root/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
