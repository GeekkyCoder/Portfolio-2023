import { Box } from "../../constants/mui.constants";

import { Express, Mongodb, Nodejs } from "./images";

const Backend = () => {
  return (
    <Box className='fade' sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      <Nodejs
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em", boxShadow: "5px 10px 5px #ccc"}}
      />

      <Express
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em", boxShadow: "5px 10px 5px #ccc"}}
      />

      <Mongodb
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em", boxShadow: "5px 10px 5px #ccc"}}
      />
    </Box>
  );
};

export default Backend
