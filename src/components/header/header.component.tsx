import { Box, Link } from "../../constants/mui.constants";
// import ActiveImageSvgLink from "./ActiveLinkImage";
import { linkStyles, List } from "./header.style";

const Header = () => {
  return (
    <Box component={"section"}>
      <Box component={"header"}>
        <Box component={"nav"} sx={{ padding: "2em 0" }}>
          <List>
            <Box component={"li"}>
              <Link sx={linkStyles} href="#">
                Home
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#">
                About
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#">
                Skills
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#">
                Experience
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#">
                Projects
              </Link>
            </Box>

            <Box component={"li"}>
              <Link sx={linkStyles} href="#">
                Contact
              </Link>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
