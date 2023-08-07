import AboutPage from "./about/about.page";
import HeaderPage from "./header/header.page";

import { Box } from "../../constants/mui.constants";

import LandingPageSvg from "../../assets/landing-bg.svg";
import { CenterContainer } from "../../components/header/header.style";

const LandingPage = () => {
  return (
    <>
      <Box
        component={"main"}
        sx={{
          backgroundImage: `url(${LandingPageSvg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "contain",
          minHeight: "100vh",
        }}
      >
        <CenterContainer>
          <HeaderPage />
        </CenterContainer>

        <CenterContainer>
          <AboutPage />
        </CenterContainer>
        
      </Box>
    </>
  );
};

export default LandingPage;
