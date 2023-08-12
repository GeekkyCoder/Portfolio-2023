import {
  Box,
  Typography,
  Stepper,
  StepLabel,
  StepContent,
  Step,
} from "../../../constants/mui.constants";

import { steps } from "./data";

const VerticalStepper = () => {

  return (
    <Box >
      <Stepper
        orientation="vertical"
        sx={{
          "& .MuiStepIcon-root.Mui-active": { color: "#F44336" },
          "& .MuiStepLabel-label.Mui-active": {
            fontFamily: "League Spartan",
            fontSize: "2rem",
            color: "#F44336",
          },
          "& .MuiStepIcon-text": { fill: "none" },
        }}
      >
        {steps.map((step, index) => (
          <Step active expanded key={step.label}>
            <StepLabel>{step?.label}</StepLabel>
            <StepContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "1em 0",
                }}
              >
                <Typography
                  fontFamily={"inherit"}
                  fontSize={"1.3rem"}
                  fontWeight={600}
                >
                  {step?.location}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    mr={"2em"}
                    fontFamily={"inherit"}
                    fontSize={"1.3rem"}
                    fontWeight={300}
                  >
                    {step?.type}
                  </Typography>
                  <Typography
                    fontFamily={"inherit"}
                    fontSize={"1.3rem"}
                    fontWeight={600}
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
