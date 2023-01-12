import Navbar from "components/Navbar";
import { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
