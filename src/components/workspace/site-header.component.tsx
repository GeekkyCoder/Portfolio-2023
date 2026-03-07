import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Box, Button, Typography } from "../../constants/mui.constants";
import { useMediaQuery } from "@mui/material";

import { scrollToId } from "./scroll";

const navItemHover = {
  rest: { opacity: 0.82 },
  hover: { opacity: 1 },
};

const underline = {
  rest: { scaleX: 0, opacity: 0 },
  hover: { scaleX: 1, opacity: 1 },
};

const SiteHeader = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "Home", label: "Home" },
      { id: "About", label: "About" },
      { id: "Tech", label: "Tech Stack" },
      { id: "Projects", label: "Projects" },
      // { id: "Videos", label: "Videos" },
      { id: "GitHub", label: "GitHub" },
      { id: "Experience", label: "Experience" },
      // { id: "Contact", label: "Contact" },
    ],
    []
  );

  const onNav = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <Box
      component="header"
      data-aos="fade-down"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 3000,
        borderBottom: "1px solid var(--border)",
        background: "rgba(0, 12, 36, 0.68)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1120px",
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: 1.75,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          component={motion.button}
          onClick={() => onNav("Home")}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          sx={{
            minWidth: 0,
            flex: "1 1 auto",
          }}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            textAlign: "left",
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            <Box component="span" className="mono" sx={{ color: "var(--accent)" }}>
              faraz
            </Box>
            <Box component="span" sx={{ color: "var(--text)", opacity: 0.9 }}>
              .dev
            </Box>
          </Typography>
          <Typography
            className="mono"
            sx={{
              fontSize: "0.85rem",
              color: "var(--muted)",
              mt: 0.25,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: { xs: "18ch", sm: "unset" },
            }}
          >
            problem-solver • full-stack
          </Typography>
        </Box>

        {isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => onNav("Projects")}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "12px",
                minWidth: 0,
                px: { xs: 1.25, sm: 2 },
                fontSize: { xs: "0.9rem", sm: "0.95rem" },
                backgroundColor: "rgba(244, 67, 54, 0.92)",
                ":hover": { backgroundColor: "rgba(244, 67, 54, 0.82)" },
              }}
            >
              Projects
            </Button>

            <Box
              component={motion.button}
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.98 }}
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.04)",
                cursor: "pointer",
              }}
              aria-label="Toggle navigation menu"
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, alignItems: "center" }}>
                <Box
                  component={motion.span}
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  style={{ width: 18, height: 2, background: "rgba(255,255,255,0.85)", borderRadius: 2 }}
                />
                <Box
                  component={motion.span}
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  style={{ width: 18, height: 2, background: "rgba(255,255,255,0.6)", borderRadius: 2 }}
                />
                <Box
                  component={motion.span}
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  style={{ width: 18, height: 2, background: "rgba(255,255,255,0.85)", borderRadius: 2 }}
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box component="nav" sx={{ display: "flex", alignItems: "center", gap: 2.25 }}>
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  component={motion.button}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={navItemHover}
                  onClick={() => onNav(item.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <Typography
                    className="mono"
                    sx={{
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Box
                    component={motion.div}
                    variants={underline}
                    style={{
                      height: 2,
                      background: "var(--accent)",
                      borderRadius: 999,
                      transformOrigin: "left",
                      marginTop: 6,
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              onClick={() => onNav("Contact")}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: "12px",
                backgroundColor: "rgba(244, 67, 54, 0.92)",
                ":hover": { backgroundColor: "rgba(244, 67, 54, 0.82)" },
              }}
            >
              Contact
            </Button>
          </Box>
        )}
      </Box>

      <AnimatePresence>
        {isMobile && menuOpen ? (
          <Box
            component={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            sx={{
              borderTop: "1px solid var(--border)",
              background: "rgba(0, 12, 36, 0.82)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "1120px",
                mx: "auto",
                px: { xs: 2, md: 3 },
                py: 2,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 1.25,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => onNav(item.id)}
                  variant="outlined"
                  sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    borderColor: "var(--border)",
                    color: "rgba(255,255,255,0.9)",
                    borderRadius: "12px",
                    ":hover": { borderColor: "rgba(244, 67, 54, 0.6)" },
                  }}
                >
                  <Box className="mono">{item.label}</Box>
                </Button>
              ))}
            </Box>
          </Box>
        ) : null}
      </AnimatePresence>
    </Box>
  );
};

export default SiteHeader;
