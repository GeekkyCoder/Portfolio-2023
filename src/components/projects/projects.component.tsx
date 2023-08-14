import {
  Box,
  Typography,
  LanguageOutlined,
  GitHub,
} from "../../constants/mui.constants";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { projects } from "./projects.data";

import { Link } from "../about/about.style";

import { ReactComponent as Frame } from "../../assets/frame.svg";
import Scroll from "../scroll/scroll.component";

const Projects = () => {
  return (
    <>
      <Box ml="2em" maxWidth={"1200px"}>
        <Typography
          m={"0"}
          fontFamily={"League Spartan"}
          fontSize={"3rem"}
          fontWeight={700}
          color={"#F44336"}
          my="1em"
        >
          Projects
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          position={"relative"}
        >
          <Box position={"absolute"} top={"1rem"} right={"3rem"}>
            <Typography
              fontFamily={"League Spartan"}
              fontWeight={300}
              letterSpacing={"1px"}
            >
              Swipe to see other projects
            </Typography>
          </Box>
          <Box width={"40%"} position={"relative"}>
            <Box
              position={"absolute"}
              top={"-2rem"}
              left={"-3rem"}
              zIndex={"-1"}
            >
              <Frame />
            </Box>
            <img
              width={"100%"}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0"
              alt="projects-png"
            />
          </Box>
          <Swiper style={{ width: "50%" }}>
            {projects.map((project) => {
              return (
                <SwiperSlide>
                  <Typography
                    fontFamily={"League Spartan"}
                    fontSize="2rem"
                    fontWeight={600}
                    color={"#F44336"}
                  >
                    {project.projectName}
                  </Typography>
                  <Typography
                    fontFamily={"League Spartan"}
                    fontSize="1.3rem"
                    fontWeight={300}
                    letterSpacing={"1px"}
                    lineHeight={"30px"}
                    mt="1em"
                  >
                    {project.description}
                  </Typography>

                  <Box display={"flex"} alignItems={"center"} mt={"1em"}>
                    <Box color={"#F44336"} fontWeight={600} fontSize={"1.3rem"}>
                      Tech Stack:
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      {project.techStack.map((tech) => {
                        return (
                          <Typography
                            fontFamily={"inherit"}
                            my="0em"
                            ml=".5em"
                            fontWeight={300}
                            fontSize={"1.1rem"}
                          >
                            {tech}
                          </Typography>
                        );
                      })}
                    </Box>
                  </Box>

                  <Box display={"flex"} alignItems={"center"} mt={"2em"}>
                    <Link
                      href={project.links.github}
                      target="__blank"
                      style={{ marginRight: "1em" }}
                    >
                      <GitHub fontSize="large" sx={{ color: "#F44336" }} />
                    </Link>

                    <Link href={project.links.live} target="__blank">
                      <LanguageOutlined
                        fontSize="large"
                        sx={{ color: "#F44336" }}
                      />
                    </Link>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>

      <Box ml="2em" my="3em">
        <Scroll />
      </Box>
    </>
  );
};

export default Projects;
