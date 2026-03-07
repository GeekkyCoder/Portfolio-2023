import { lazy, Suspense } from "react";

import { Box, Typography } from "../../constants/mui.constants";

import SiteHeader from "../../components/workspace/site-header.component";
import Hero from "../../components/workspace/hero.component";

const AboutWorkspace = lazy(() => import("../../components/workspace/about-workspace.component"));
const TechStack = lazy(() => import("../../components/workspace/tech-stack.component"));
const ProjectsWorkspace = lazy(() => import("../../components/workspace/projects-workspace.component"));
// const YoutubeWorkspace = lazy(() => import("../../components/workspace/youtube-workspace.component"));
const GitHubGraphWorkspace = lazy(() => import("../../components/workspace/github-graph-workspace.component"));
const ExperienceWorkspace = lazy(() => import("../../components/workspace/experience-workspace.component"));
const ContactWorkspace = lazy(() => import("../../components/workspace/contact-workspace.component"));

type SectionFallbackProps = {
  id: string;
  title: string;
};

const SectionFallback = ({ id, title }: SectionFallbackProps) => {
  return (
    <Box component="section" id={id} sx={{ position: "relative" }}>
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
          loading
        </Typography>

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

        <Box
          sx={{
            border: "1px solid var(--border)",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            p: 2.5,
          }}
        >
          <Typography className="mono" sx={{ color: "var(--muted)" }}>
            {"> "}Loading section...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const LandingPage = () => {
  return (
    <Box component={"main"} sx={{ position: "relative" }}>
      <SiteHeader />
      <Hero />

      <Suspense fallback={<SectionFallback id="About" title="About" />}>
        <AboutWorkspace />
      </Suspense>

      <Suspense fallback={<SectionFallback id="Tech" title="Tech Stack" />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionFallback id="Projects" title="Projects" />}>
        <ProjectsWorkspace />
      </Suspense>

      {/*
      <Suspense fallback={<SectionFallback id="Videos" title="Videos" />}>
        <YoutubeWorkspace />
      </Suspense>
      */}

      <Suspense fallback={<SectionFallback id="GitHub" title="GitHub Graph" />}>
        <GitHubGraphWorkspace />
      </Suspense>

      <Suspense fallback={<SectionFallback id="Experience" title="Experience / Achievements" />}>
        <ExperienceWorkspace />
      </Suspense>

      <Suspense fallback={<SectionFallback id="Contact" title="Contact" />}>
        <ContactWorkspace />
      </Suspense>
    </Box>
  );
};

export default LandingPage;
