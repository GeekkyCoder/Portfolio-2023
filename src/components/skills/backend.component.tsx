import { Box } from "../../constants/mui.constants";

import { CICD, Express, Mongodb, Nodejs, RestApi } from "./images";

const Backend = () => {
  return (
    <Box className='fade' sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Nodejs
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Express
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>

      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Mongodb
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>

      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <CICD
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

export default Backend
