import { Box, Typography } from "../../constants/mui.constants";

import SkillTabs from "./tabs.component";

import {ReactComponent as Frame} from "../../assets/frame.svg"

const Skills = () => {
  return (
    <Box  ml={{xs:"0em",md:"2em"}} my={"5em"} width={{xs:"100%",md:"90%"}} maxWidth={{xs:"100%",md:"1200px"}} id="Skills" padding={{xs:"1em",md:"0"}}>
      <Typography
        m={"0"}
        fontFamily={"League Spartan"}
        fontSize={"3rem"}
        fontWeight={700}
        color={"#F44336"}
      >
        Skills
      </Typography>

      <Box display={"flex"}  flexDirection={{xs:"column",md:"row"}}>
        <Box width={{xs:"90%",md:"50%"}}>
          <Typography
            fontFamily={"League Spartan"}
            fontSize={{xs:"1.5rem",md:"1.5rem"}}
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

        <Box width={{xs:"100%",md:"45%"}} position={'relative'} display={{xs:"none",md:"block"}}>
          <Box position={'absolute'} top={'-4rem'} right={'-2rem'}>
           <Frame />
          </Box>
          <img
            width={"100%"}
            style={{ filter: "grayscale(100%)" }}
            src="https://ardas-it.com/uploads/images/blogs/giph.gif"
            alt="dev-gif"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
