import Navbar from "./navbar";
import FAB from "./fab";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FAB />
      <Footer />
    </>
  );
};

export default Layout;
