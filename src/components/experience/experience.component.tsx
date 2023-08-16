import VerticalStepper from "./stepper/stepper.component";

import { Typography, Box } from "../../constants/mui.constants";
import Scroll from "../scroll/scroll.component";

import ExperienceBg from "../../assets/experienceBackground.svg";

import { useMediaQuery } from "@mui/material";

const Experience = () => {


  const shouldBgNotApply = useMediaQuery("(max-width:600px)")


  const bgObjStyle = {
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
    },
  }

  return (
    <Box
      ml={{xs:"0em",md:"2em"}}
      p={{xs:".5em",md:"0em"}}
      id="Experience"
      sx={shouldBgNotApply ? {} : bgObjStyle}
    >
      <Box maxWidth={{xs:"100%",md:"1000px"}}>
        <Typography
          fontFamily={"League Spartan"}
          color="#F44336"
          fontSize={{xs:"1.7rem",md:"3rem"}}
          my={"1em"}
          fontWeight={800}
        >
          Over 2 Years Of Experience
        </Typography>
        <VerticalStepper />
        <Box mt="5em">
          <Scroll />
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
