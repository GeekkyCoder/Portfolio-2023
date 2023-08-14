import * as React from 'react';
import { useState } from "react";
import Frontend from "./frontend.component";
import Backend from "./backend.component";
import Testing from "./testing.component";
import UI from "./ui.component";

import {
  Tab,
  TabList,
  TabPanel,
  TabContext,
  Box,
} from "../../constants/mui.constants";

import Scroll from "../scroll/scroll.component";

const SkillTabs = () => {
  const [value, setValue] = useState<string>("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string):void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", mt: "2em" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                fontFamily: "League Spartan",
                fontSize: "1.2rem",
                fontWeight: 300,
                color: "#000C24",
                textTransform:"capitalize",
              },
              "& .MuiTab-root.Mui-selected": { color: "#F44336" },
              "& .MuiTabs-indicator": {
                border: "1px solid red",
                bgcolor: "#F44336",
              },
            }}
          >
            <Tab label="Frontend Development" value="1" />
            <Tab label="Backend Development" value="2" />
            <Tab label="Testing Libraries" value="3" />
            <Tab label="UI Design" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Frontend />
        </TabPanel>
        <TabPanel value="2">
          <Backend />
        </TabPanel>
        <TabPanel value="3">
          <Testing />
        </TabPanel>
        <TabPanel value="4">
          <UI />
        </TabPanel>
      </TabContext>

      <Box mt={"3em"}>
        <Scroll />
      </Box>
    </Box>
  );
};

export default SkillTabs;
