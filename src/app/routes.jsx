import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";

const TRANSITION_MS = 520;

function RouteView({ pathname }) {
  return (
    <Routes location={{ pathname }}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const [pages, setPages] = useState(() => [
    {
      className: "page-shell",
      id: `${location.pathname}-initial`,
      pathname: location.pathname,
    },
  ]);

  useEffect(() => {
    let enterFrame1 = 0;
    let enterFrame2 = 0;
    let timeout = 0;

    setPages((currentPages) => {
      const currentPage = currentPages[currentPages.length - 1];

      if (currentPage?.pathname === location.pathname) {
        return currentPages;
      }

      const nextPage = {
        className: "page-shell page-enter",
        id: `${location.pathname}-${Date.now()}`,
        pathname: location.pathname,
      };

      return [
        ...currentPages.map((page) => ({
          ...page,
          className: "page-shell page-exit",
        })),
        nextPage,
      ];
    });

    enterFrame1 = requestAnimationFrame(() => {
      enterFrame2 = requestAnimationFrame(() => {
        setPages((currentPages) =>
          currentPages.map((page) =>
            page.pathname === location.pathname
              ? { ...page, className: "page-shell page-enter page-enter-active" }
              : { ...page, className: "page-shell page-exit page-exit-active" }
          )
        );
      });
    });

    timeout = window.setTimeout(() => {
      setPages((currentPages) =>
        currentPages
          .filter((page) => page.pathname === location.pathname)
          .map((page) => ({ ...page, className: "page-shell" }))
      );
    }, TRANSITION_MS);

    return () => {
      cancelAnimationFrame(enterFrame1);
      cancelAnimationFrame(enterFrame2);
      window.clearTimeout(timeout);
    };
  }, [location.pathname]);

  return (
    <>
      {pages.map((page) => (
        <div className={page.className} key={page.id}>
          <RouteView pathname={page.pathname} />
        </div>
      ))}
    </>
  );
}

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
