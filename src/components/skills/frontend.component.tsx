import { Box } from "../../constants/mui.constants";

import {
  React,
  Graphql,
  Redux,
  Tailwind,
  HTML,
  CSS,
  Javascript,
  Typescript,
  Materialui,
  RestApi,
} from "./images";

const Frontend = () => {
  return (
    <Box className='fade' sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      <HTML
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em",boxShadow: "5px 10px 5px #ccc" }}
      />
      <CSS
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em",boxShadow: "5px 10px 5px #ccc" }}
      />
      <Javascript
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em" , marginTop:"1em",boxShadow: "5px 10px 5px #ccc"}}
      />
      <Typescript
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em",boxShadow: "5px 10px 5px #ccc" }}
      />
      <Materialui
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em",boxShadow: "5px 10px 5px #ccc" }}
      />
      <React
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em",boxShadow: "5px 10px 5px #ccc" }}
      />
      <Graphql
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em",boxShadow: "5px 10px 5px #ccc" }}
      />
      <Redux
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em",boxShadow: "5px 10px 5px #ccc" }}
      />
      <Tailwind
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em", boxShadow: "5px 10px 5px #ccc"}}
      />
         <RestApi
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em", boxShadow: "5px 10px 5px #ccc"}}
      />
    </Box>
  );
};

export default Frontend;
