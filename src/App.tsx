import "./App.css";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import LandingPage from "./pages/landing/landing.page";
import { Box } from "./constants/mui.constants";
// import {Box}  from "@mui/material";
import CodeBg from "./assets/code.svg";
import BubbleBackground from "./components/workspace/bubble-background.component";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    const timeoutId = window.setTimeout(() => {
      AOS.refresh();
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <BubbleBackground />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          overflowX: "hidden",
          ":before": {
            content: "''",
            backgroundImage: `url(${CodeBg})`,
            backgroundPosition: "left",
            backgroundSize: "contain",
            position: "absolute",
            width: "100%",
            height: "500px",
            top: 300,
            zIndex: -100,
            opacity: 0.12,
          },
          ":after": {
            content: "''",
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 18% 10%, rgba(244, 67, 54, 0.18), transparent 55%), radial-gradient(900px 500px at 85% 20%, rgba(255, 255, 255, 0.06), transparent 60%)",
            zIndex: -200,
          },
        }}
        className="grid-overlay"
      >
        <LandingPage />
      </Box>
    </>
  );
}

export default App;
