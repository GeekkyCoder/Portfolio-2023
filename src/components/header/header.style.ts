import { styled,Box } from "../../constants/mui.constants";

export const linkStyles = {
    textDecoration:"none",
    listStyle:"none",
    color:"#928A97",
    fontSize:"1.3rem",
    fontWeight:"600",
    textAlign:"center",
}

export const CenterContainer = styled(Box)(({theme}) => ({
   width: "100%",
   maxWidth: "1000px",
   padding: "2em",
   [theme.breakpoints.down('sm')]:{
      maxWidth:"100%",
      padding:"0em",
   }
}))

export const List = styled('ul')(({ theme }) => ({
   // color: theme.palette.primary.contrastText,
   // backgroundColor: theme.palette.primary.main,
   // padding: theme.spacing(1),
   // borderRadius: theme.shape.borderRadius,
   display: "flex",
   justifyContent: "space-between",
   width: "80%",
   [theme.breakpoints.down('sm')]:{
     flexDirection:"column",
     position:"absolute",
     right:"50%",
     left:"40%",
     width:"200px",
   }
 }));


