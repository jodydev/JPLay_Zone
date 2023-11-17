import Navbar from './Navbar/Navbar';
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>  
  );
}

export default Layout;
