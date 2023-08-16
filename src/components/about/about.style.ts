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
  fontSize: "3rem",
  fontWeight: 700,
};

export const AboutFlexBoxTextStyles = {
  color: "#000C24",
  fontFamily: "League Spartan",
  fontSize: "1.5rem",
  margin: "1em 0",
  fontWeight: 300,
};

export const SocialFlexContainer = styled(Box)(({ theme }) => ({
  width: "40%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop: "2em",
  },
}));

export const Link = styled("a")``;

export const SocialFlexItem = styled(Box)`
  margin-left: 1em;
  transition: scale ease-in 0.5ms;
  &:hover {
    scale: 1.2;
    cursor: pointer;
  }
`;

export const AboutFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "1000px",
  position: "relative",
  zIndex: "1000",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexDirection: "column",
  },
}));

export const AboutFlexItemLeft = styled(Box)(({ theme }) => ({
  width: "45%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const AboutFlexItemRight = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const CVButton = styled(Button)`
  background-color: #000c24;
  margin: 2em 0;
  :hover {
    background-color: #f44336;
    color: whitesmoke;
  }
`;
