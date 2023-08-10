import { styled,Box } from "../../constants/mui.constants";

export const linkStyles = {
    textDecoration:"none",
    listStyle:"none",
    color:"#928A97",
    fontSize:"1.3rem",
    fontWeight:"500",
}

export const CenterContainer = styled(Box)`
   width: 100%;
   max-width: 1000px;
   padding: 2em;
`

export const List = styled('ul')` 
   display: flex;
   justify-content: space-between;
   width: 80%;
`
