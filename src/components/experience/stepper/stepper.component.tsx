import { useCallback, useState } from "react";

import {
  Box,
  Typography,
  Stepper,
  StepLabel,
  StepContent,
  Step,
  Avatar,
  ArrowCircleUpOutlined,
  ArrowCircleDownOutlined,
} from "../../../constants/mui.constants";

import { steps, Steps } from "./data";

const VerticalStepper = () => {
  const [contentSteps, setContentSteps] = useState<Steps[]>(steps);

  const toggleShow = useCallback((id: number) => {
    setContentSteps((prevContentSteps) => {
      return prevContentSteps.map((step) => {
        return step.id === id ? { ...step, show: !step.show } : step;
      });
    });
  },[contentSteps]);

  return (
    <Box>
      <Stepper
        orientation="vertical"
        sx={{
          "& .MuiStepIcon-root.Mui-active": { color: "#F44336" },
          "& .MuiStepLabel-label.Mui-active": {
            fontFamily: "League Spartan",
            fontWeight:600,
            color:"#F44336",
          },
          "& .MuiStepIcon-text": { fill:"#fff" },
        }}
      >
        {contentSteps.map((step) => (
          <Step active expanded key={step.label} sx={{ position: "relative" }}>
            <StepLabel >{step?.label}</StepLabel>
            <Box sx={{ position: "absolute", top: {xs:"2rem",md:"1rem"}, left: {xs:"20rem",md:"40rem"}}}>
              {step?.show ? (
                <Avatar sx={{ bgcolor: "#F44336" }}>
                  {" "}
                  <ArrowCircleUpOutlined
                    onClick={() => toggleShow(step.id)}
                  />{" "}
                </Avatar>
              ) : (
                <Avatar sx={{ bgcolor: "#F44336" }}>
                  {" "}
                  <ArrowCircleDownOutlined
                    onClick={() => toggleShow(step.id)}
                  />{" "}
                </Avatar>
              )}
            </Box>

            <StepContent className="fade" sx={{ display: `${step.show ? "block" : "none"}` }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: {xs:"3em 0",md:"1em 0"},
                  marginBottom:{xs:"1em",md:"3em"}
                }}
              >
                <Typography
                  fontFamily={"inherit"}
                  fontSize={{xs:"1rem",md:"1.3rem"}}
                  fontWeight={{xs:300,md:600}}
                >
                  {step?.location}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    mr={"2em"}
                    fontFamily={"inherit"}
                    fontSize={{xs:"1rem",md:"1.3rem"}}
                    fontWeight={300}
                    marginLeft={{xs:".5em",md:"0em"}}
                  >
                    {`(${step?.type})`}
                  </Typography>
                  <Typography
                    fontFamily={"inherit"}
                    fontSize={{xs:"1rem",md:"1.3rem"}}
                    fontWeight={{xs:300,md:600}}
                  >
                    {step?.duration}
                  </Typography>
                </Box>
              </Box>
              <Typography
                fontFamily={"inherit"}
                fontSize={"1.3rem"}
                fontWeight={300}
              >
                {step?.description1}
              </Typography>
              <Typography
                fontFamily={"inherit"}
                fontSize={"1.3rem"}
                my={"1em"}
                fontWeight={300}
              >
                {step?.description2}
              </Typography>
              <Typography
                fontFamily={"inherit"}
                fontSize={"1.3rem"}
                my={"1em"}
                fontWeight={300}
              >
                {step?.description3}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
