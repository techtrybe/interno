import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
