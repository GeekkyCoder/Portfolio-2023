import { Box, Typography } from "../../constants/mui.constants";
import {
  AboutText,
  NameTextStyles,
  SocialFlexContainer,
  SocialFlexItem,
  Link,
} from "./about.style";

import Typewriter from "typewriter-effect";

import { ReactComponent as TwitterIcon } from "../../assets/ant-design_twitter-circle-filled.svg";
import { ReactComponent as GithubIcon } from "../../assets/ant-design_github-filled.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/entypo-social_linkedin-with-circle.svg";

const About = () => {
  return (
    <Box
      component={"section"}
      style={{ color: "white", padding: "3em", margin: "2em 0" }}
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
        <SocialFlexItem sx={{margin:0}}>
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
        <Link href="https://www.linkedin.com/in/faraz-ahmed-27379a235/" target="__blank">
          <LinkedinIcon />
         </Link> 
        </SocialFlexItem>
      </SocialFlexContainer>
    </Box>
  );
};

export default About;
