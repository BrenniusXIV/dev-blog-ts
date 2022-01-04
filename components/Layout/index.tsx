import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar className="navbar" />
      {children}
      <Footer className="footer"/>
    </div>
  );
};

export default Layout;
