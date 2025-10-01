import { Navigate } from "react-router";
import { isAuthenticated } from "../../utils/auth";
import Header from "../Header";
import Footer from "../Footer";

const LayoutApp = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutApp;
