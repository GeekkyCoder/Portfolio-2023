import { Box, Link } from "../../constants/mui.constants";
// import ActiveImageSvgLink from "./ActiveLinkImage";
import { linkStyles, List } from "./header.style";

const Header = () => {
  return (
    <Box component={"section"} id="Home">
      <Box component={"header"}>
        <Box component={"nav"} sx={{ padding: "2em 0" }}>
          <List>
            <Box component={"li"}>
              <Link sx={linkStyles} href="#Home">
                Home
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#About">
                About
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#Skills">
                Skills
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#Experience">
                Experience
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#Projects">
                Projects
              </Link>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
