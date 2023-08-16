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
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <HTML
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
 
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <CSS
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Javascript
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Typescript
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Materialui
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <React
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Graphql
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Redux
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}}sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Tailwind
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <RestApi
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
    </Box>
  );
};

export default Frontend;
