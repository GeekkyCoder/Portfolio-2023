import { Box } from "../../constants/mui.constants";

import { Jest, RTK } from "./images";

const Testing = () => {
  return (
    <Box className='fade' sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
     <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <RTK
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
      <Box width={{xs:"40px",md:'60px'}} height={{xs:"40px",md:'60px'}} sx={{boxShadow: "5px 10px 5px #ccc",marginLeft: "1em", marginTop:"1em",borderRadius: "50%",p:".5em"}}>
      <Jest
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      </Box>
    </Box>
  );
};

export default Testing
