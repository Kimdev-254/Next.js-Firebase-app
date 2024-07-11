// src/components/_layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Header />
      <main className="container mx-auto px-4 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
