import VerticalStepper from "./stepper/stepper.component";

import { Typography, Box } from "../../constants/mui.constants";
import Scroll from "../scroll/scroll.component";

import ExperienceBg from "../../assets/experienceBackground.svg";

const Experience = () => {
  return (
    <Box
      ml="2em"
      sx={{
        position: "relative",
        "::before": {
          content: '""',
          backgroundImage: `url(${ExperienceBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
          height: "1200px",
          width: "100%",
          position: "absolute",
          top: "-10rem",
          left: "0",
          zIndex: "-2000",
          opacity: ".7",
        },
      }}
    >
      <Box maxWidth={"1000px"}>
        <Typography
          fontFamily={"League Spartan"}
          color="#F44336"
          fontSize={"3rem"}
          my={"1em"}
          fontWeight={700}
        >
          Over 2 Years Of Experience
        </Typography>
        <VerticalStepper />
        <Box my="2em">
          <Scroll />
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
