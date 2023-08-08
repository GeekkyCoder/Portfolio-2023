import { useEffect, useState } from "react";

import AboutPage from "./about/about.page";
import HeaderPage from "./header/header.page";

import { Box } from "../../constants/mui.constants";

import LandingPageSvg from "../../assets/landing-bg.svg";
import { CenterContainer } from "../../components/header/header.style";

const LandingPage = () => {
  const [shouldApplyBackground, setShouldApplyBackground] =
    useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      let scrolledY:number = window.scrollY;
      if (scrolledY > 200) {
        setShouldApplyBackground(true);
      } else {
        setShouldApplyBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        component={"main"}
        sx={{
          backgroundImage: `url(${LandingPageSvg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // height:"1000px"
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "0",
            left: "0",
            zIndex: "2000",
            bgcolor: `${shouldApplyBackground ? "#000C24;" : "none"}`,
            transition: "all ease-in-out 300ms",
          }}
        >
          <HeaderPage />
        </Box>

        <CenterContainer>
          <AboutPage />
        </CenterContainer>
      </Box>
    </>
  );
};

export default LandingPage;
