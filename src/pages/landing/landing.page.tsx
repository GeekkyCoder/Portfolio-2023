import { useEffect, useState } from "react";

import AboutPage from "./about/about.page";
import HeaderPage from "./header/header.page";

import { Box } from "../../constants/mui.constants";

import LandingPageSvg from "../../assets/landing-bg.svg";
import { CenterContainer } from "../../components/header/header.style";
import SkillsPage from "./skills/skills.page";
import ExperiencePage from "./experience/experiene.page";
import ProjectsPage from "./projects/projects.page";
import FooterPage from "./footer/footer.page";
import TimeLine from "../../components/timeline/Timeline"

const LandingPage = () => {
  const [shouldApplyBackground, setShouldApplyBackground] =
    useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      let scrolledY: number = window.scrollY;
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
        className="landing-page"
        id="Home"
        sx={{
          position: "relative",
          "::before": {
            content: '""',
            backgroundImage: `url(${LandingPageSvg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "contain",
            backgroundSize: "cover",
            height: "1200px",
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          },
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "0",
            left: "0",
            zIndex: "2000",
            bgcolor: `${shouldApplyBackground ? "#000C24;" : "none"}`,
            opacity:`${shouldApplyBackground ? ".7" : "1"}`,
            transition: "all ease-in-out 300ms",
          }}
        >
          <CenterContainer>
            <HeaderPage />
          </CenterContainer>
        </Box>

        <CenterContainer>
          <AboutPage />
        </CenterContainer>

        <ExperiencePage />

        <SkillsPage />

        <ProjectsPage />

        <TimeLine/>

        <FooterPage />

      
      </Box>
    </>
  );
};

export default LandingPage;
