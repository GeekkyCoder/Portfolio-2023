import { useMemo } from "react";
import Typewriter from "typewriter-effect";

import { Box, Typography } from "../../constants/mui.constants";

type Props = {
  title?: string;
  prompt?: string;
  lines: string[];
};

const TerminalWindow = ({ title = "terminal", prompt = "faraz@portfolio", lines }: Props) => {
  const reserveCh = useMemo(() => {
    const maxLineLen = Math.max(0, ...lines.map((l) => l.length));
    // +4 for "$ " and breathing room for cursor
    return Math.max(28, maxLineLen + 4);
  }, [lines]);

  return (
    <Box
      sx={{
        border: "1px solid var(--border)",
        borderRadius: "14px",
        background: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(255,255,255,0.02))",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.25,
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <Typography className="mono" sx={{ fontSize: "0.95rem", color: "var(--text)", opacity: 0.9 }}>
          {title}
        </Typography>
        <Typography className="mono" sx={{ fontSize: "0.8rem", color: "var(--muted)" }}>
          {prompt}
        </Typography>
      </Box>

      <Box
        className="mono"
        sx={{
          p: 2,
          fontSize: "clamp(0.82rem, 2.2vw, 0.95rem)",
          lineHeight: 1.7,
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Box
          sx={{
            color: "rgba(255,255,255,0.88)",
            width: `${reserveCh}ch`,
            height: `calc(${lines.length} * 1.7em)`,
            overflow: "hidden",
            maxWidth: "none",
            "& .Typewriter": { display: "block" },
            "& .Typewriter__wrapper": { display: "block" },
            "& .Typewriter__cursor": { display: "inline-block", width: "0.8ch" },
          }}
        >
          <Typewriter
            options={{
              strings: [
                lines
                  .map((line) =>
                    `${"<span style='color: rgba(255,255,255,0.55)'>$</span> "}${line}`
                  )
                  .join("<br/>")
              ],
              autoStart: true,
              loop: true,
              delay: 26,
              deleteSpeed: 4,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TerminalWindow;
