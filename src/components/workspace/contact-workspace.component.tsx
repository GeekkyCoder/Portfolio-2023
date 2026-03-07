import { motion } from "framer-motion";

import { Box, Button, Link, Typography, GitHub, LinkedIn, Twitter, YouTube } from "../../constants/mui.constants";

import SectionShell from "./section-shell.component";
import TerminalWindow from "./terminal-window.component";

const ContactWorkspace = () => {
  return (
    <SectionShell id="Contact" eyebrow="ping" title="Contact" aos="fade-up">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 3,
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "1fr 1fr",
          },
          alignItems: "start",
        }}
      >
        <Box component={motion.div} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Typography sx={{ color: "var(--muted)", fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.7 }}>
            Want to collaborate or discuss a role? Send a message and I’ll reply with next steps.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25, mt: 3 }}>
            <Button
              component="a"
              href="mailto:geekkycoder@gmail.com"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: "12px",
                backgroundColor: "rgba(244, 67, 54, 0.92)",
                ":hover": { backgroundColor: "rgba(244, 67, 54, 0.82)" },
              }}
            >
              Email Me
            </Button>

            <Button
              component="a"
              href="https://drive.google.com/file/d/1DllS9kGisRNko-gMuQuyVBKKb3x_PCQt/view?usp=sharing"
              target="__blank"
              rel="noreferrer"
              variant="outlined"
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: "12px",
                borderColor: "var(--border)",
                color: "rgba(255,255,255,0.9)",
                ":hover": { borderColor: "rgba(244, 67, 54, 0.6)" },
              }}
            >
              Resume
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mt: 3, flexWrap: "wrap" }}>
            <Link href="https://github.com/GeekkyCoder" target="__blank" rel="noreferrer" sx={{ display: "inline-flex" }}>
              <GitHub sx={{ color: "rgba(244, 67, 54, 0.95)" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/faraz-ahmed-27379a235/"
              target="__blank"
              rel="noreferrer"
              sx={{ display: "inline-flex" }}
            >
              <LinkedIn sx={{ color: "rgba(244, 67, 54, 0.95)" }} />
            </Link>
            <Link href="https://twitter.com/potato_prgramer" target="__blank" rel="noreferrer" sx={{ display: "inline-flex" }}>
              <Twitter sx={{ color: "rgba(244, 67, 54, 0.95)" }} />
            </Link>
            <Link href="https://www.youtube.com/@SpaghettiCode-xv2zw" target="__blank" rel="noreferrer" sx={{ display: "inline-flex" }}>
              <YouTube sx={{ color: "rgba(244, 67, 54, 0.95)" }} />
            </Link>
          </Box>

          <Typography className="mono" sx={{ color: "var(--muted)", mt: 3.5 }}>
            {"© "}{new Date().getFullYear()} Faraz Ahmed
          </Typography>
        </Box>

        <Box component={motion.div} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
          <TerminalWindow
            title="contact.sh"
            prompt="~/"
            lines={[
              "echo \"Let’s build something useful.\"",
              "open https://github.com/GeekkyCoder",
              "open https://www.linkedin.com/in/faraz-ahmed-27379a235/",
              "open https://www.youtube.com/@SpaghettiCode-xv2zw",
              "mail geekkycoder@gmail.com",
            ]}
          />
        </Box>
      </Box>
    </SectionShell>
  );
};

export default ContactWorkspace;
