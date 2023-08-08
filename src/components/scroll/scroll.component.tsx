import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import { Typography, Box } from "../../constants/mui.constants";

const Scroll = () => {
  return (
    <>
      <Box
        fontSize={"12px"}
        display={"flex"}
        alignItems={"center"}
        fontFamily={"League Spartan"}
        color={"#928A97"}
      >
        <Arrow className="bounce" />
        <Typography ml={".5em"} component={"span"}>
          scroll
        </Typography>
      </Box>
    </>
  );
};

export default Scroll;
