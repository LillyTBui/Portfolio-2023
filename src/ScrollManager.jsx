import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();
  // make sure to only use scroll effect on the homepage
  useEffect(() => {
    if (location.pathname.startsWith("/projects")) {
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [location]);

  return null;
};

export default ScrollManager;
