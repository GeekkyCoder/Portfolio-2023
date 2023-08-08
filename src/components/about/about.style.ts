import { Box, Button, styled } from "../../constants/mui.constants";

export const NameTextStyles = {
  fontWeight: 800,
  fontSize: "3.5rem",
  letterSpacing: "5px",
  textTransform: "uppercase",
  fontFamily: "League Spartan",
};

export const AboutText = {
  fontSize: "2.7rem",
  fontWeight: 600,
  fontFamily: "League Spartan",
  color: "whitesmoke",
};

export const AboutFlexBoxMainTextStyles = {
  color: "#F44336",
  fontFamily: "League Spartan",
  fontSize: "2rem",
  fontWeight: 700,
};

export const AboutFlexBoxTextStyles = {
  color: "#000C24",
  fontSize: "1.2rem",
  lineHeight: "30px",
  letterSpacing: "1px",
};

export const SocialFlexContainer = styled(Box)`
  width: 40%;
  display: flex;
  align-items: center;
`;

export const Link = styled("a")``;

export const SocialFlexItem = styled(Box)`
  margin-left: 1em;
  transition: scale ease-in 0.5ms;
  &:hover {
    scale: 1.2;
    cursor: pointer;
  }
`;

export const AboutFlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  position: relative;
  z-index: 1000;
`;

export const AboutFlexItemLeft = styled(Box)`
  /* flex: 2; */
  width: 50%;
`;

export const AboutFlexItemRight = styled(Box)`
  /* flex: 2; */
  width: 45%;
`;

export const CVButton = styled(Button)`
  background-color: #000c24;
  margin: 2em 0;
  :hover {
    background-color: #000c24;
    color: whitesmoke;
  }
`;
