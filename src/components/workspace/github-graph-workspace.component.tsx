import { useEffect, useMemo } from "react";

import { motion } from "framer-motion";
import AOS from "aos";

import { Box, Button, Link, Typography } from "../../constants/mui.constants";

import SectionShell from "./section-shell.component";
import { hoverLift } from "./motion";

import { githubGraphConfig } from "./github-graph.data";

const GitHubGraphWorkspace = () => {
  const { username, accentHex } = githubGraphConfig;

  const githubProfileUrl = `https://github.com/${username}`;

  const graphImageUrl = useMemo(() => {
    // Public SVG contributions chart image (no API key needed)
    // Example: https://ghchart.rshah.org/f44336/GeekkyCoder
    return `https://ghchart.rshah.org/${accentHex}/${username}`;
  }, [accentHex, username]);

  useEffect(() => {
    AOS.refresh();
  }, [username]);

  return (
    <SectionShell id="GitHub" eyebrow="oss" title="GitHub Graph" aos="fade-up">
      <Typography sx={{ color: "var(--muted)", fontSize: { xs: "1.05rem", md: "1.15rem" }, maxWidth: "75ch" }}>
        My open-source activity and consistency over time.
      </Typography>

      <Box
        component={motion.div}
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        animate="rest"
        data-aos="fade-up"
        sx={{
          mt: 4,
          border: "1px solid var(--border)",
          borderRadius: "16px",
          background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 2.5,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 950, fontSize: "1.15rem", lineHeight: 1.2 }}>
              Contributions
            </Typography>
            <Typography className="mono" sx={{ color: "var(--muted)", mt: 0.35 }}>
              @{username}
            </Typography>
          </Box>

          <Button
            component="a"
            href={githubProfileUrl}
            target="__blank"
            rel="noreferrer"
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 800,
              borderRadius: "12px",
              borderColor: "rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.9)",
              ":hover": { borderColor: "var(--accent)" },
            }}
          >
            Open GitHub Profile
          </Button>
        </Box>

        <Link
          href={githubProfileUrl}
          target="__blank"
          rel="noreferrer"
          underline="none"
          sx={{ display: "block", color: "inherit" }}
          aria-label="Open GitHub profile"
        >
          <Box
            component="img"
            src={graphImageUrl}
            alt={`GitHub contribution graph for ${username}`}
            loading="lazy"
            sx={{
              width: "100%",
              display: "block",
              background: "rgba(0,0,0,0.25)",
              // Keep the graph readable on small screens
              maxHeight: 210,
              "@media (min-width: 480px)": {
                maxHeight: 240,
              },
              "@media (min-width: 768px)": {
                maxHeight: 280,
              },
              "@media (min-width: 1024px)": {
                maxHeight: 320,
              },
              objectFit: "contain",
            }}
          />
        </Link>

        <Box sx={{ p: 2.25, pt: 1.75 }}>
          <Typography className="mono" sx={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            {"> "}Click the graph to view on GitHub.
          </Typography>
        </Box>
      </Box>
    </SectionShell>
  );
};

export default GitHubGraphWorkspace;
