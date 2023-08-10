import { Box, Typography } from "../../constants/mui.constants";
import {
  AboutText,
  NameTextStyles,
  SocialFlexContainer,
  SocialFlexItem,
  Link,
  AboutFlexBox,
  AboutFlexItemLeft,
  AboutFlexItemRight,
  AboutFlexBoxMainTextStyles,
  AboutFlexBoxTextStyles,
  CVButton,
} from "./about.style";

import Typewriter from "typewriter-effect";

import { ReactComponent as TwitterIcon } from "../../assets/ant-design_twitter-circle-filled.svg";
import { ReactComponent as GithubIcon } from "../../assets/ant-design_github-filled.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/entypo-social_linkedin-with-circle.svg";

import { ReactComponent as Frame } from "../../assets/frame.svg";

import Scroll from "../scroll/scroll.component";

const About = () => {
  return (
    <Box
      component={"section"}
      style={{ color: "white", margin: "2em 0" }}
    >
      <Typography
        variant="h2"
        component={"p"}
        sx={NameTextStyles}
        className="stroke-text"
      >
        Faraz Ahmed
      </Typography>
      <Typography sx={AboutText}>
        <Typewriter
          options={{
            strings: [
              "Iam a Full Stack Mern Web Developer",
              "5 ⭐ Problem Solver On HackerRank",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 0.5,
          }}
        />
      </Typography>
      <SocialFlexContainer>
        <SocialFlexItem sx={{ margin: 0 }}>
          <Link href="https://twitter.com/potato_prgramer" target="__blank">
            <TwitterIcon />
          </Link>
        </SocialFlexItem>

        <SocialFlexItem>
          <Link href="https://github.com/GeekkyCoder" target="__blank">
            <GithubIcon />
          </Link>
        </SocialFlexItem>

        <SocialFlexItem>
          <Link
            href="https://www.linkedin.com/in/faraz-ahmed-27379a235/"
            target="__blank"
          >
            <LinkedinIcon />
          </Link>
        </SocialFlexItem>
      </SocialFlexContainer>

      <Box sx={{ marginTop: "25em", marginLeft: "5em" }}>
        <AboutFlexBox>
          <Box sx={{ position: "absolute", top: "-10rem", left: "-3rem" }}>
            <Scroll />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "-5rem",
              left: "-3rem",
              zIndex: "-1000",
            }}
          >
            <Frame />
          </Box>
          <AboutFlexItemLeft>
            <img
              style={{ height: "400px", objectFit: "cover" }}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0"
              alt="about-me"
            />
          </AboutFlexItemLeft>

          <AboutFlexItemRight>
            <Typography
              variant="h3"
              // sx={{'&.MuiTypography-h3': {color:"red"} }}
              component={"h1"}
              sx={AboutFlexBoxMainTextStyles}
            >
              About Me.
            </Typography>

            <Typography mt={"1em"} component={"p"} sx={AboutFlexBoxTextStyles}>
              An inquisitive{" "}
              <Typography fontWeight={600} color={"#F44336"} component={"span"}>
                Computer Science
              </Typography>{" "}
              graduate and a passionate{" "}
              <Typography fontWeight={600} color={"#F44336"} component={"span"}>
                Full Stack Mern Web Developer
              </Typography>
              , always eager to learn new technologies and research about new
              technologies, having 1.5 year of experience with web development ,
              I learnt a ton of new frameworks and libraries and eventually used
              them in my each projects, i can adopt and learn new things
              quickly!
            </Typography>

            <CVButton variant="contained">Download CV</CVButton>
          </AboutFlexItemRight>
        </AboutFlexBox>

        <Box sx={{ margin: "3em 0", position: "relative", left: "-3rem" }}>
          <Scroll />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
