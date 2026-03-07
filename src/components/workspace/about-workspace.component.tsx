import { motion } from "framer-motion";

import { Box, Typography } from "../../constants/mui.constants";

import SectionShell from "./section-shell.component";
import CodeWindow from "./code-window.component";
import { fadeUpItem, stagger } from "./motion";

const AboutWorkspace = () => {
  return (
    <SectionShell id="About" eyebrow="mindset" title="About" aos="fade-right">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 3,
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 4,
          },
          alignItems: "start",
        }}
      >
        <Box
          component={motion.div}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          sx={{ display: "grid", gap: 1.75 }}
        >
          <Typography component={motion.p} variants={fadeUpItem} sx={{ color: "var(--muted)", fontSize: "clamp(1rem, 2.7vw, 1.2rem)", lineHeight: 1.7 }}>
            Software Engineer with 2+ years of experience building enterprise-grade web applications, with a focus on predictable systems, strong UX, and production reliability.
          </Typography>

          <Typography component={motion.p} variants={fadeUpItem} sx={{ color: "var(--muted)", fontSize: "clamp(1rem, 2.7vw, 1.2rem)", lineHeight: 1.7 }}>
            I like solving real problems under real constraints: design clean APIs, keep state manageable, harden edge cases, and ship iteratively with maintainable code.
          </Typography>

          <Box component={motion.div} variants={fadeUpItem} sx={{ display: "grid", gap: 1 }}>
            {[
              "Ship fast without breaking quality",
              "Build reusable UI systems and stable data flows",
              "Prioritize reliability, performance, and security",
            ].map((t) => (
              <Box
                key={t}
                sx={{
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  p: 1.5,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <Typography className="mono" sx={{ color: "rgba(255,255,255,0.86)" }}>
                  {"> "}{t}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            component={motion.div}
            variants={fadeUpItem}
            sx={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              background: "rgba(0,0,0,0.22)",
              p: 1.5,
            }}
          >
            <Typography className="mono" sx={{ color: "rgba(255,255,255,0.86)", fontSize: { xs: "0.95rem", md: "1rem" } }}>
              {"> Get it done. Fast. With clean, maintainable code."}
            </Typography>
          </Box>
        </Box>

        <Box component={motion.div} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <CodeWindow
            title="about.ts"
            languageLabel="TypeScript"
            syntax="ts"
            lines={[
              "const developer = {",
              "  name: \"Faraz Ahmed\",",
              "  role: \"Software Engineer\",",
              "  experience: \"2+ years\",",
              "  focus: \"Enterprise Applications\",",
              "}",
              "",
              "// Education",
              "// Bachelors in Computer Science — University of Sindh",
              "// CGPA: 3.21 / 4.0",
            ]}
          />
        </Box>
      </Box>
    </SectionShell>
  );
};

export default AboutWorkspace;
