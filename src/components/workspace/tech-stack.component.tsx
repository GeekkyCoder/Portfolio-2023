import { motion } from "framer-motion";

import { useEffect } from "react";

import AOS from "aos";

import type { TechCategory } from "./tech-stack.data";

import { Box, Tooltip, Typography } from "../../constants/mui.constants";

import SectionShell from "./section-shell.component";
import { fadeUpItem, hoverLift, stagger } from "./motion";

import { defaultTechStackData } from "./tech-stack.data";

type Props = {
  data?: TechCategory[];
};

const TechStack = ({ data = defaultTechStackData }: Props) => {
  useEffect(() => {
    AOS.refresh();
  }, [data.length]);

  return (
    <SectionShell
      id="Tech"
      eyebrow="stack"
      title="Tech Stack"
    >
      <Typography sx={{ color: "var(--muted)", fontSize: { xs: "1.05rem", md: "1.15rem" }, maxWidth: "70ch" }}>
        Areas I’m strongest in — the technologies I reach for to ship fast, keep quality high, and keep the UI crisp.
      </Typography>

      <Box
        component={motion.div}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: "1fr",
          "@media (min-width: 768px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {data.map((category, index) => (
          <Box
            key={category.title}
            component={motion.div}
            variants={fadeUpItem}
            initial="rest"
            whileHover="hover"
            animate="rest"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            style={{ width: "100%", height: "100%" }}
          >
            <Box
              component={motion.div}
              variants={hoverLift}
              sx={{
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                borderRadius: "14px",
                p: 2.5,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontWeight: 900, letterSpacing: "0.01em" }}>
                {category.title}
              </Typography>

              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  mt: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.25,
                  alignContent: "start",
                }}
              >
                {category.items.map(({ name, Icon }) => (
                  <Box
                    key={`${category.title}:${name}`}
                    component={motion.li}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    style={{ width: "auto", maxWidth: "100%" }}
                  >
                    <Tooltip title={name} arrow>
                      <Box
                        sx={{
                          width: "fit-content",
                          maxWidth: "100%",
                          border: "1px solid rgba(255,255,255,0.10)",
                          background: "rgba(0,0,0,0.22)",
                          borderRadius: "12px",
                          px: 1.1,
                          py: 0.8,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.85,
                          cursor: "default",
                          userSelect: "none",
                          outline: "none",
                          minHeight: 44,
                          ":hover": {
                            borderColor: "var(--accent)",
                            boxShadow: "0 0 0 1px var(--accent) inset",
                          },
                          ":focus-visible": {
                            borderColor: "var(--accent)",
                            boxShadow: "0 0 0 1px var(--accent) inset",
                          },
                        }}
                        aria-label={name}
                        tabIndex={0}
                      >
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: "10px",
                            border: "1px solid rgba(255,255,255,0.10)",
                            background: "rgba(255,255,255,0.03)",
                            color: "var(--accent)",
                            flex: "0 0 auto",
                          }}
                        >
                          <Icon size={18} aria-hidden />
                        </Box>

                        <Typography
                          className="mono"
                          sx={{
                            fontSize: "0.88rem",
                            color: "rgba(255,255,255,0.82)",
                            lineHeight: 1.25,
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                          }}
                        >
                          {name}
                        </Typography>
                      </Box>
                    </Tooltip>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
};

export default TechStack;
