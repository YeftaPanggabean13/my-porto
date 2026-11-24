import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";

function ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <Router basename={basename}>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
