import { motion } from "framer-motion";

import { useEffect } from "react";

import AOS from "aos";

import { Box, Typography } from "../../constants/mui.constants";

import SectionShell from "./section-shell.component";
import ProjectCard from "./project-card.component";
import { fadeUpItem, stagger } from "./motion";

import { projects } from "../projects/projects.data";

const ProjectsWorkspace = () => {
  useEffect(() => {
    AOS.refresh();
  }, [projects.length]);

  return (
    <SectionShell id="Projects" eyebrow="work" title="Projects">
      <Typography sx={{ color: "var(--muted)", fontSize: { xs: "1.05rem", md: "1.15rem" }, maxWidth: "75ch" }}>
        Selected projects focused on collaboration, real-time systems, and clean UI architecture.
      </Typography>

      <Box
        component={motion.div}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 3,
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
        }}
      >
        {projects.map((p, index) => (
          <Box
            key={p.id}
            component={motion.div}
            variants={fadeUpItem}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ProjectCard
              name={p.projectName}
              description={p.description}
              techStack={p.techStack}
              githubUrl={p.links.github}
              liveUrl={p.links.live}
            />
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
};

export default ProjectsWorkspace;
