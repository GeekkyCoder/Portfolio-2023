import { motion } from "framer-motion";

import { Box, Button, Typography } from "../../constants/mui.constants";

import CodeWindow from "./code-window.component";
import TerminalWindow from "./terminal-window.component";
import { scrollToId } from "./scroll";
import StableTypewriter from "./stable-typewriter.component";

const Hero = () => {
  return (
    <Box
      component="section"
      id="Home"
      data-aos="fade-up"
      sx={{
        width: "100%",
        maxWidth: "1120px",
        mx: "auto",
        px: 2,
        pt: 6.5,
        pb: 8,
        "@media (min-width: 480px)": {
          px: 2.5,
        },
        "@media (min-width: 1024px)": {
          px: 3,
          pt: 10,
          pb: 11,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 4,
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "1.05fr 0.95fr",
            alignItems: "center",
            gap: 5,
          },
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Typography
            className="mono"
            sx={{
              color: "var(--muted)",
              fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
            }}
          >
            $ whoami
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: "clamp(2.3rem, 7vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.02,
              mt: 1,
            }}
          >
            Faraz Ahmed
          </Typography>

          <Typography
            sx={{
              fontSize: "clamp(1.15rem, 3.8vw, 1.75rem)",
              fontWeight: 500,
              mt: 1.25,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            <Box
              component="span"
              sx={{ color: "var(--accent)", fontWeight: 800 }}
            >
              Problem solver
            </Box>{" "}
            building production-grade web apps.
          </Typography>

          <Box
            sx={{
              mt: 2.25,
              color: "var(--muted)",
              fontSize: "clamp(1rem, 2.8vw, 1.15rem)",
              maxWidth: "52ch",
            }}
          >
            <StableTypewriter
              strings={[
                "I turn ambiguous requirements into shipped features.",
                "Software Engineer",
                "5⭐ Problem Solver on HackerRank",
              ]}
              delay={34}
              deleteSpeed={10}
              loop
              reserveCh={56}
            />
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 3 }}>
            <Button
              variant="contained"
              onClick={() => scrollToId("Projects")}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: "12px",
                backgroundColor: "rgba(244, 67, 54, 0.92)",
                ":hover": { backgroundColor: "rgba(244, 67, 54, 0.82)" },
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              onClick={() => scrollToId("Contact")}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: "12px",
                borderColor: "var(--border)",
                color: "rgba(255,255,255,0.9)",
                ":hover": { borderColor: "rgba(244, 67, 54, 0.6)" },
              }}
            >
              Contact Me
            </Button>
          </Box>

          <Box sx={{ mt: 3.25, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            <Box
              className="mono"
              sx={{
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "999px",
                px: 1.25,
                py: 0.75,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              5⭐ HackerRank
            </Box>
            <Box
              className="mono"
              sx={{
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "999px",
                px: 1.25,
                py: 0.75,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              React • TypeScript • Node
            </Box>
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <TerminalWindow
            title="faraz@fullstack-workspace"
            prompt="~/projects/portfolio"
            lines={[
              "npm install",
              "npm run dev  # start React + Vite",
              "node server.js  # Express API running on :5000",
              "✔ REST API connected",
              "✔ GraphQL endpoint ready",
              "✔ MongoDB connection established",
              "socket.io server listening...",
              "npm run test  # running Jest + React Testing Library",
              "✔ All tests passed",
              "git status  # clean working tree",
              "git push origin main",
              "🚀 Deployment ready",
            ]}
          />

          <CodeWindow
            title="problem-solver.ts"
            languageLabel="TypeScript"
            syntax="ts"
            lines={[
              "type Problem = 'bug' | 'performance' | 'scale' | 'architecture'",
              "",
              "export const solve = (problem: Problem) => {",
              "  switch(problem) {",
              "    case 'bug': return 'debug → isolate → fix'",
              "    case 'performance': return 'profile → optimize'",
              "    case 'scale': return 'design → distribute'",
              "    case 'architecture': return 'simplify → refactor'",
              "  }",
              "}",
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
