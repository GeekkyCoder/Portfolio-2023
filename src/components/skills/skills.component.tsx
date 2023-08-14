import { Box, Typography } from "../../constants/mui.constants";

import SkillTabs from "./tabs.component";

import {ReactComponent as Frame} from "../../assets/frame.svg"

const Skills = () => {
  return (
    <Box ml={"2em"} my={"5em"} width={"90%"} maxWidth={"1200px"} id="Skills">
      <Typography
        m={"0"}
        fontFamily={"League Spartan"}
        fontSize={"3rem"}
        fontWeight={700}
        color={"#F44336"}
      >
        Skills
      </Typography>

      <Box display={"flex"} justifyContent={"space-between"}>
        <Box width={"50%"}>
          <Typography
            fontFamily={"League Spartan"}
            fontSize={"1.5rem"}
            fontWeight={300}
            color={"#000C24"}
          >
            I craft dynamic and responsive web applications that seamlessly
            merge cutting-edge front-end experiences with robust back-end
            functionalities. My journey in web development is defined by
            innovative problem-solving, efficient code implementation, and a
            dedication to delivering user-centric solutions.
          </Typography>

          <SkillTabs />
        </Box>

        <Box width={"45%"} position={'relative'}>
          <Box position={'absolute'} top={'-4rem'} right={'-2rem'}>
           <Frame />
          </Box>
          <img
            width={"100%"}
            style={{ filter: "grayscale(100%)" }}
            src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
            alt="dev-gif"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
