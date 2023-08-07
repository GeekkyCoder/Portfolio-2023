import { Box, styled } from "../../constants/mui.constants";

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

export const SocialFlexContainer = styled(Box)` 
  width:40%;
  display: flex;
  align-items: center;
`

export const Link = styled('a')` 
 
`

export const SocialFlexItem = styled(Box)` 
  margin-left: 1em;
  transition: scale ease-in .5ms ;
  &:hover{
    scale: 1.2;
    cursor: pointer;
  }
`
