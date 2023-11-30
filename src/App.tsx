import "./App.css";
import LandingPage from "./pages/landing/landing.page";
import { Box } from "./constants/mui.constants";
// import {Box}  from "@mui/material";
import CodeBg from "./assets/code.svg";

function App() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
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
          },
        }}
      >
        <LandingPage />
      </Box>
    </>
  );
}

export default App;
