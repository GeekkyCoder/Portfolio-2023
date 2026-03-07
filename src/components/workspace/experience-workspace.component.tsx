import { useMemo } from "react";
import { motion } from "framer-motion";

import { Box, Typography } from "../../constants/mui.constants";

import SectionShell from "./section-shell.component";
import { fadeUpItem, stagger } from "./motion";

import { steps } from "../experience/stepper/data";

const getRoleCompany = (label: string) => {
  const normalized = label.trim();

  if (normalized.includes("@")) {
    const [left, ...right] = normalized.split("@");
    const role = left.trim();
    const company = right.join("@").trim();
    if (role && company) return { role, company };
  }

  if (normalized.includes(" At ")) {
    const parts = normalized.split(" At ");
    const role = parts[0].trim();
    const company = parts.slice(1).join(" At ").trim();
    return { role, company };
  }

  return { role: normalized, company: "" };
};

const getDescriptions = (step: Record<string, unknown>) => {
  return Object.entries(step)
    .filter(([key, value]) => /^description\d+$/.test(key) && typeof value === "string")
    .sort(([a], [b]) => {
      const aNum = Number(a.replace("description", ""));
      const bNum = Number(b.replace("description", ""));
      return aNum - bNum;
    })
    .map(([, value]) => String(value));
};

const toBulletItems = (text: string) => {
  // Supports paragraphs, newline-delimited bullets, and strings with "•" bullet separators.
  return text
    .split("\n")
    .flatMap((line) => line.split("•"))
    .map((t) => t.replace(/\s+/g, " ").trim())
    .filter(Boolean);
};

type Signal = {
  id: string;
  label: string;
  match: RegExp[];
};

const signalsConfig: Signal[] = [
  {
    id: "shipping",
    label: "Ship end-to-end features with clear tradeoffs",
    match: [/\bled\b/i, /end-to-end/i, /delivered/i, /shipped/i, /built/i],
  },
  {
    id: "payments",
    label: "Payments + acquiring domain depth",
    match: [/payment/i, /acquiring/i, /p2m/i, /mdr/i, /rtp/i, /terminal/i, /pos/i, /softpos/i, /raast/i, /soundbox/i],
  },
  {
    id: "security",
    label: "Security + governance (approvals, roles, auth)",
    match: [/secure/i, /auth/i, /password/i, /role/i, /approver/i, /maker-checker/i, /audit/i],
  },
  {
    id: "architecture",
    label: "Scalable architecture (reusability, clean data flow)",
    match: [/architecture/i, /reusable/i, /component/i, /state/i, /data flow/i, /api/i, /middleware/i],
  },
  {
    id: "reliability",
    label: "Reliability mindset (error handling, operational readiness)",
    match: [/reliability/i, /error handling/i, /resilient/i, /operational/i, /production/i],
  },
  {
    id: "performance",
    label: "Performance as a feature (profiling, lazy loading)",
    match: [/performance/i, /profiling/i, /code splitting/i, /lazy loading/i, /memoization/i, /jank/i],
  },
  {
    id: "ux",
    label: "UX clarity (workflows, dashboards, responsive portals)",
    match: [/portal/i, /dashboard/i, /workflow/i, /responsive/i, /usability/i, /ux/i],
  },
  {
    id: "integrations",
    label: "Integrations (gateways, terminals, external APIs)",
    match: [/integration/i, /integrations/i, /gateway/i, /third\s*-?party/i, /spring\s*boot/i, /rest\s*api/i, /cloudinary/i],
  },
  {
    id: "automation",
    label: "Automation mindset (reduce manual ops)",
    match: [/automation/i, /automated/i, /cron/i, /sftp/i, /scheduled/i],
  },
];

const countMatches = (patterns: RegExp[], text: string) => {
  return patterns.reduce((total, re) => {
    const flags = re.flags.includes("g") ? re.flags : `${re.flags}g`;
    const global = new RegExp(re.source, flags);
    const matches = text.match(global);
    return total + (matches ? matches.length : 0);
  }, 0);
};

const ExperienceWorkspace = () => {
  const derivedSignals = useMemo(() => {
    const allText = steps
      .filter((s) => s.show)
      .flatMap((s) => getDescriptions(s as unknown as Record<string, unknown>))
      .join(" \n ");

    const ranked = signalsConfig
      .map((sig, idx) => ({
        idx,
        label: sig.label,
        score: countMatches(sig.match, allText),
      }))
      .filter((s) => s.score > 0)
      .sort((a, b) => (b.score !== a.score ? b.score - a.score : a.idx - b.idx))
      .map((s) => s.label);

    const result = ranked.length
      ? ranked
      : [
          "Ship end-to-end features with clear tradeoffs",
          "Write maintainable, scalable UI systems",
          "Performance and reliability in production",
        ];

    return result.slice(0, 6);
  }, [steps]);

  return (
    <SectionShell id="Experience" eyebrow="history" title="Experience / Achievements">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 3,
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "1.2fr 0.8fr",
          },
          alignItems: "start",
        }}
      >
        <Box
          component={motion.div}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          sx={{ display: "grid", gap: 2 }}
        >
          {steps
            .filter((s) => s.show)
            .map((s) => (
              <Box key={s.id} component={motion.div} variants={fadeUpItem}>
                <Box
                  sx={{
                    position: "relative",
                    pl: { xs: 3.25, md: 3.5 },
                    pb: 2,
                    borderLeft: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Box
                    component={motion.div}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.35 }}
                    sx={{
                      position: "absolute",
                      left: { xs: -7, md: -7 },
                      top: 10,
                      width: 14,
                      height: 14,
                      borderRadius: "999px",
                      background: "rgba(244, 67, 54, 0.9)",
                      boxShadow: "0 0 0 4px rgba(244, 67, 54, 0.18)",
                    }}
                  />

                  <Box
                    sx={{
                      border: "1px solid var(--border)",
                      borderRadius: "16px",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      p: { xs: 2, md: 2.25 },
                    }}
                  >
                    {(() => {
                      const { role, company } = getRoleCompany(s.label);
                      return (
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 950,
                              fontSize: { xs: "1.18rem", md: "1.35rem" },
                              lineHeight: 1.15,
                            }}
                          >
                            {role}
                          </Typography>
                          {company ? (
                            <Typography
                              className="mono"
                              sx={{
                                color: "rgba(244, 67, 54, 0.92)",
                                fontWeight: 800,
                                mt: 0.5,
                              }}
                            >
                              {company}
                            </Typography>
                          ) : null}
                        </Box>
                      );
                    })()}

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1.25 }}>
                      <Box className="mono" sx={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                        {s.location}
                      </Box>
                      <Box className="mono" sx={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                        • {s.type}
                      </Box>
                      <Box className="mono" sx={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                        • {s.duration}
                      </Box>
                    </Box>

                    <Box
                      component="ul"
                      sx={{
                        mt: 1.75,
                        pl: 2.25,
                        mb: 0,
                        display: "grid",
                        gap: 1,
                        color: "rgba(255,255,255,0.84)",
                      }}
                    >
                      {getDescriptions(s as unknown as Record<string, unknown>)
                        .flatMap(toBulletItems)
                        .filter(Boolean)
                        .map((item, idx) => (
                          <Box key={idx} component="li" sx={{ lineHeight: 1.65 }}>
                            <Typography sx={{ color: "inherit" }}>{item}</Typography>
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>

        <Box component={motion.aside} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <Box
            sx={{
              border: "1px solid var(--border)",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.04)",
              p: { xs: 2, md: 2.25 },
              position: "sticky",
              top: { xs: 90, md: 96 },
            }}
          >
            <Typography className="mono" sx={{ color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.9rem" }}>
              strengths
            </Typography>

            <Typography sx={{ fontWeight: 900, fontSize: "1.35rem", mt: 1 }}>
              Signals I optimize for
            </Typography>

            <Box sx={{ mt: 2, display: "grid", gap: 1.25 }}>
              {derivedSignals.map((t) => (
                <Box
                  key={t}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "14px",
                    background: "rgba(0,0,0,0.22)",
                    p: 1.5,
                  }}
                >
                  <Typography className="mono" sx={{ color: "rgba(255,255,255,0.86)", fontSize: "0.95rem" }}>
                    {"+ "}{t}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionShell>
  );
};

export default ExperienceWorkspace;
