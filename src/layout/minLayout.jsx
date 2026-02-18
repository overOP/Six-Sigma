import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <>
    <ScrollToTop />
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
