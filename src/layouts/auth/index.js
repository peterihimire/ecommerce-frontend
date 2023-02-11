import React, { useState, useEffect } from "react";
import Header from "../../components/UI/header";
import Backdrop from "../../components/UI/backdrop";
import { useLocation } from "react-router-dom";
import Footer from "../../components/UI/footer";
import { Outlet } from "react-router-dom";

import "./styles.scss";

const AuthLayout = () => {
  const router = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);

  return (
    <div className="landing-layout">
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <main className="main">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default AuthLayout;


