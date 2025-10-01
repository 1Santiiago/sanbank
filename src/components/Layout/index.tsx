import type React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface ILayout {
  children: React.ReactNode;
}

function LayoutApp({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutApp;
