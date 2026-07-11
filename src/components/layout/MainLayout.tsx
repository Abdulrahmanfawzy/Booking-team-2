import { Outlet } from "react-router-dom";
import Nav from "@/features/home/Navbarhome";
import Footer from "@/features/home/Footer";

export default function MainLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}