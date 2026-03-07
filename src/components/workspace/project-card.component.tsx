import { motion } from "framer-motion";

import {
  Box,
  Typography,
  LanguageOutlined,
  GitHub,
} from "../../constants/mui.constants";

type Props = {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

const ProjectCard = ({ name, description, techStack, githubUrl, liveUrl }: Props) => {
  return (
    <Box
      component={motion.article}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      sx={{
        border: "1px solid var(--border)",
        borderRadius: "16px",
        background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        overflow: "hidden",
        position: "relative",
        ":hover .projectGlow": { opacity: 1 },
      }}
    >
      <Box sx={{ p: 2.25 }}>
        <Typography
          component="h3"
          sx={{
            fontSize: "1.35rem",
            fontWeight: 900,
            lineHeight: 1.15,
            mb: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Box component="span" sx={{ minWidth: 0, wordBreak: "break-word" }}>
            {name}
          </Box>
          <Box component="span" className="mono" sx={{ color: "var(--muted)", fontSize: "0.9rem", fontWeight: 700 }}>
            repo
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "var(--muted)",
            fontSize: "1.02rem",
            lineHeight: 1.65,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {techStack.slice(0, 7).map((tech) => (
            <Box
              key={tech}
              className="mono"
              sx={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(0,0,0,0.22)",
                borderRadius: "999px",
                px: 1,
                py: 0.5,
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mt: 2.25 }}>
          <Box
            component="a"
            href={githubUrl}
            target="__blank"
            rel="noreferrer"
            style={{ display: "inline-flex" }}
          >
            <GitHub sx={{ color: "rgba(244, 67, 54, 0.95)" }} />
          </Box>

          <Box
            component="a"
            href={liveUrl}
            target="__blank"
            rel="noreferrer"
            style={{ display: "inline-flex" }}
          >
            <LanguageOutlined sx={{ color: "rgba(244, 67, 54, 0.95)" }} />
          </Box>
        </Box>
      </Box>

      <Box
        className="projectGlow"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 200ms ease",
          background:
            "radial-gradient(650px 220px at 30% 0%, rgba(244, 67, 54, 0.18), transparent 55%)",
        }}
      />
    </Box>
  );
};

export default ProjectCard;
