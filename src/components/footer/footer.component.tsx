import { Box, Typography } from "../../constants/mui.constants";

import { Link } from "../about/about.style";

import { GitHub, LinkedIn, Twitter } from "../../constants/mui.constants";

import FooterSvg from "../../assets/footer.svg";

const Footer = () => {
  return (
    <Box mt="3em">
      <Box
        p={"2em 5em"}
        bgcolor={"#000C24"}
        sx={{
          backgroundImage: `url(${FooterSvg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
          minHeight: "150px",
          backgroundBlendMode: "exclusion",
        }}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Typography
              color={"whitesmoke"}
              fontWeight={300}
              fontFamily={"League Spartan"}
              fontSize={"2rem"}
              textAlign={"center"}
              className="stroke-text"
              letterSpacing={"2px"}
            >
              FARAZ AHMED
            </Typography>

            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              my={"1em"}
            >
              <Link href="https://github.com/GeekkyCoder" target="__blank">
                <GitHub fontSize="large" sx={{ color: "#F44336" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faraz-ahmed-27379a235"
                target="__blank"
              >
                <LinkedIn
                  fontSize="large"
                  sx={{ marginLeft: ".5em", color: "#F44336" }}
                />
              </Link>
              <Link href="https://twitter.com/potato_prgramer" target="__blank">
                <Twitter sx={{ marginLeft: ".5em", color: "#F44336" }} />
              </Link>
            </Box>

            <Typography
              fontSize={{xs:"1rem",md:"1.5rem"}}
              color={"whitesmoke"}
              fontWeight={300}
              fontFamily={"League Spartan"}
            >
              All Rights Reserved &#169; 2023
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
