import { useState,useEffect } from "react";

import { Box, Link } from "../../constants/mui.constants";

import ActiveImageSvgLink from "../../assets/linkActiveBackground.svg";

import { linkStyles, List } from "./header.style";
import { useMediaQuery } from "@mui/material";


const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(1);

  const shouldShowBg = useMediaQuery("(max-width:600px)")

  const handleActiveLinkClick = (
    _event: React.MouseEvent<HTMLAnchorElement>,
    current: number
  ) => {
    setActiveLink(current);
  };

  useEffect(() => {
      if(shouldShowBg){
        setActiveLink(0)
      }
  },[activeLink])

  return (
    <Box component={"section"} id="Home">
      <Box component={"header"}  height={{xs:"200px",md:"0"}} mx={{xs:"auto",md:"0em"}}>
        <Box component={"nav"} sx={{ padding:{xs:"1em 0",md:"2em 0"},position:{xs:'relative',md:'static'} }}>
          <List >
            <Box component={"li"} sx={{margin:{xs:".3em 0",md:"0em"}}}>
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
                  sx={{ ...linkStyles, color:{xs:"whitesmoke",md:"#928A97"}, ":hover": { color: "#F44336" }, fontSize:{xs:"1.5rem",md:"1.3rem"},letterSpacing:{xs:"1.5px",md:"normal"},fontFamily:"League Spartan" }}
                  href="#Home"
                  onClick={(e) => handleActiveLinkClick(e, 1)}
                >
                  Home
                </Link>
              </Box>
            </Box>

            <Box component={"li"} sx={{margin:{xs:".3em 0",md:"0em"}}}>
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
                  sx={{ ...linkStyles, color:{xs:"whitesmoke",md:"#928A97"}, ":hover": { color: "#F44336" }, fontSize:{xs:"1.5rem",md:"1.3rem"},letterSpacing:{xs:"1.5px",md:"normal"},fontFamily:"League Spartan" }}
                  href="#About"
                  onClick={(e) => handleActiveLinkClick(e, 2)}
                >
                  About
                </Link>
              </Box>
            </Box>

            <Box component={"li"} sx={{margin:{xs:".3em 0",md:"0em"}}}>
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
                  sx={{ ...linkStyles, color:{xs:"whitesmoke",md:"#928A97"}, ":hover": { color: "#F44336" }, fontSize:{xs:"1.5rem",md:"1.3rem"},letterSpacing:{xs:"1.5px",md:"normal"},fontFamily:"League Spartan" }}
                  href="#Skills"
                  onClick={(e) => handleActiveLinkClick(e, 3)}
                >
                  Skills
                </Link>
              </Box>
            </Box>

            <Box component={"li"} sx={{margin:{xs:".3em 0",md:"0em"}}}>
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
                  sx={{ ...linkStyles, color:{xs:"whitesmoke",md:"#928A97"}, ":hover": { color: "#F44336" }, fontSize:{xs:"1.5rem",md:"1.3rem"},letterSpacing:{xs:"1.5px",md:"normal"},fontFamily:"League Spartan" }}
                  href="#Experience"
                  onClick={(e) => handleActiveLinkClick(e, 4)}
                >
                  Experience
                </Link>
              </Box>
            </Box>

            <Box component={"li"} sx={{margin:{xs:".3em 0",md:"0em"}}}>
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
                 sx={{ ...linkStyles, color:{xs:"whitesmoke",md:"#928A97"}, ":hover": { color: "#F44336" }, fontSize:{xs:"1.5rem",md:"1.3rem"},letterSpacing:{xs:"1.5px",md:"normal"},fontFamily:"League Spartan" }}
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
