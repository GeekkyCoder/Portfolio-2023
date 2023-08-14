import { useState } from "react";

import { Box, Link } from "../../constants/mui.constants";

import ActiveImageSvgLink from "../../assets/linkActiveBackground.svg";

import { linkStyles, List } from "./header.style";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(1);

  const handleActiveLinkClick = (
    _event: React.MouseEvent<HTMLAnchorElement>,
    current: number
  ) => {
    setActiveLink(current);
  };

  return (
    <Box component={"section"} id="Home">
      <Box component={"header"}>
        <Box component={"nav"} sx={{ padding: "2em 0" }}>
          <List>
            <Box component={"li"}>
              <Box
                sx={{
                  position: "relative",
                  "::before": {
                    content: '""',
                    backgroundImage: `url(${
                      activeLink === 1 ? ActiveImageSvgLink : ""
                    })`,
                    filter: "brightness(0) invert(1)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    width: "140px",
                    height: "120px",
                    top: "-3rem",
                    left: "-2rem",
                    zIndex: "-10000",
                  },
                }}
              >
                <Link
                  sx={{ ...linkStyles, ":hover": { color: "#F44336" } }}
                  href="#Home"
                  onClick={(e) => handleActiveLinkClick(e, 1)}
                >
                  Home
                </Link>
              </Box>
            </Box>

            <Box component={"li"}>
              <Box
                sx={{
                  position: "relative",
                  "::before": {
                    content: '""',
                    backgroundImage: `url(${
                      activeLink === 2 ? ActiveImageSvgLink : ""
                    })`,
                    filter: "brightness(0) invert(1)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    width: "140px",
                    height: "120px",
                    top: "-3rem",
                    left: "-2rem",
                    zIndex: "-10000",
                  },
                }}
              >
                <Link
                  sx={{ ...linkStyles, ":hover": { color: "#F44336" } }}
                  href="#About"
                  onClick={(e) => handleActiveLinkClick(e, 2)}
                >
                  About
                </Link>
              </Box>
            </Box>

            <Box component={"li"}>
              <Box
                sx={{
                  position: "relative",
                  "::before": {
                    content: '""',
                    backgroundImage: `url(${
                      activeLink === 3 ? ActiveImageSvgLink : ""
                    })`,
                    filter: "brightness(0) invert(1)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    width: "140px",
                    height: "120px",
                    top: "-3rem",
                    left: "-2rem",
                    zIndex: "-10000",
                  },
                }}
              >
                <Link
                  sx={{ ...linkStyles, ":hover": { color: "#F44336" } }}
                  href="#Skills"
                  onClick={(e) => handleActiveLinkClick(e, 3)}
                >
                  Skills
                </Link>
              </Box>
            </Box>

            <Box component={"li"}>
              <Box
                sx={{
                  position: "relative",
                  "::before": {
                    content: '""',
                    backgroundImage: `url(${
                      activeLink === 4 ? ActiveImageSvgLink : ""
                    })`,
                    filter: "brightness(0) invert(1)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    width: "140px",
                    height: "120px",
                    top: "-3rem",
                    left: "-2rem",
                    zIndex: "-10000",
                  },
                }}
              >
                <Link
                  sx={{ ...linkStyles, ":hover": { color: "#F44336" } }}
                  href="#Experience"
                  onClick={(e) => handleActiveLinkClick(e, 4)}
                >
                  Experience
                </Link>
              </Box>
            </Box>

            <Box component={"li"}>
              <Box
                sx={{
                  position: "relative",
                  "::before": {
                    content: '""',
                    backgroundImage: `url(${
                      activeLink === 5 ? ActiveImageSvgLink : ""
                    })`,
                    filter: "brightness(0) invert(1)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    width: "140px",
                    height: "120px",
                    top: "-3rem",
                    left: "-2rem",
                    zIndex: "-10000",
                  },
                }}
              >
                <Link
                  sx={{ ...linkStyles, ":hover": { color: "#F44336" } }}
                  href="#Projects"
                  onClick={(e) => handleActiveLinkClick(e, 5)}
                >
                  Projects
                </Link>
              </Box>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
