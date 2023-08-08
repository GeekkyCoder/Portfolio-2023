import { Box, Link } from "../../constants/mui.constants";
// import ActiveImageSvgLink from "./ActiveLinkImage";
import { linkStyles, List } from "./header.style";

const Header = () => {


  return (
    <Box component={"section"}>
        <Box component={"header"}>
          <Box component={"nav"} sx={{padding:"3em 5em"}}>
            <List>
              <Link sx={linkStyles} href="#">
                <Box component={"li"}>Home</Box>
              </Link>

              <Link sx={linkStyles} href="#">
                <Box component={"li"}>About</Box>
              </Link>

              <Link sx={linkStyles} href="#">
                <Box component={"li"}>Skills</Box>
              </Link>

              <Link sx={linkStyles} href="#">
                <Box component={"li"}>Experience</Box>
              </Link>

              <Link sx={linkStyles} href="#">
                <Box component={"li"}>Contact</Box>
              </Link>

              <Link sx={linkStyles} href="#">
                <Box component={"li"}>Projects</Box>
              </Link>

            </List>
          </Box>
        </Box>
    </Box>
  );
};

export default Header;
