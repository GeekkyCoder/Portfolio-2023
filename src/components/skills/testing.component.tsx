import { Box } from "../../constants/mui.constants";

import { Jest, RTK } from "./images";

const Testing = () => {
  return (
    <Box className='fade' sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      <RTK
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em", boxShadow: "5px 10px 5px #ccc"}}
      />

      <Jest
        width={"80px"}
        height={"80px"}
        style={{ objectFit: "cover", borderRadius: "50%", marginLeft: "1em", marginTop:"1em", boxShadow: "5px 10px 5px #ccc"}}
      />
    </Box>
  );
};

export default Testing
