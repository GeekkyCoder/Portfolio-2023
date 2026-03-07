import type { ReactNode } from "react";

import { Box, Typography } from "../../constants/mui.constants";

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  aos?: string;
  aosDelay?: number;
};

const SectionShell = ({ id, title, eyebrow, children, aos, aosDelay }: Props) => {
  return (
    <Box
      component="section"
      id={id}
      data-aos={aos}
      data-aos-delay={aosDelay}
      sx={{ position: "relative" }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1120px",
          mx: "auto",
          px: 2,
          py: 7,
          "@media (min-width: 480px)": {
            px: 2.5,
          },
          "@media (min-width: 1024px)": {
            px: 3,
            py: 10,
          },
        }}
      >
        {eyebrow ? (
          <Typography
            className="mono"
            sx={{
              color: "var(--muted)",
              fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            {eyebrow}
          </Typography>
        ) : null}

        <Typography
          component="h2"
          sx={{
            fontSize: "clamp(1.85rem, 4.8vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            mb: { xs: 2.5, md: 3 },
          }}
        >
          <Box component="span" sx={{ color: "var(--accent)" }}>
            //
          </Box>{" "}
          {title}
        </Typography>

        {children}
      </Box>
    </Box>
  );
};

export default SectionShell;
