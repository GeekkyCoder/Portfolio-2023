import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import { Typography, Box } from "../../constants/mui.constants";

const Scroll = () => {
  return (
    <>
      <Box
        fontSize={"12px"}
        display={"flex"}
        alignItems={"center"}
        color={"#000C24"}
      >
        <Arrow className="bounce" />
        <Typography fontWeight={400} fontFamily={"League Spartan"} ml={".5em"} component={"span"}>
          scroll
        </Typography>
      </Box>
    </>
  );
};

export default Scroll;
