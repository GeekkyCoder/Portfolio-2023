import VerticalStepper from "./stepper/stepper.component";

import { Typography,Box } from "../../constants/mui.constants";
import Scroll from "../scroll/scroll.component";

const Experience = () => {
  return (
    <Box maxWidth={'1000px'} ml="2em">
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
      <Box my='2em'>
      <Scroll/>
      </Box>
    </Box>
  );
};

export default Experience;
