import type { ReactNode } from "react";

import { Box, Typography } from "../../constants/mui.constants";

type Syntax = "ts" | "js" | "none";

type Props = {
  title: string;
  languageLabel?: string;
  lines: string[];
  syntax?: Syntax;
};

const KEYWORDS = new Set([
  "const",
  "let",
  "var",
  "type",
  "interface",
  "export",
  "return",
  "if",
  "else",
  "for",
  "while",
  "import",
  "from",
  "as",
  "new",
]);

const isNumber = (token: string) => /^\d+(\.\d+)?$/.test(token);
const isConstant = (token: string) => /^(true|false|null|undefined)$/.test(token);
const isIdentifier = (token: string) => /^[A-Za-z_$][\w$]*$/.test(token);

const tokenize = (line: string) => {
  // Keep strings, numbers, identifiers, and punctuation; preserve other text as plain segments.
  const re =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\btrue\b|\bfalse\b|\bnull\b|\bundefined\b|\b[A-Za-z_$][\w$]*\b|[{}()[\];,.=:+-])/g;

  const parts: Array<{ value: string; type: "token" | "text"; start: number; end: number }> = [];
  let lastIndex = 0;
  for (const match of line.matchAll(re)) {
    const value = match[0];
    const start = match.index ?? 0;
    const end = start + value.length;
    if (start > lastIndex) {
      parts.push({ value: line.slice(lastIndex, start), type: "text", start: lastIndex, end: start });
    }
    parts.push({ value, type: "token", start, end });
    lastIndex = end;
  }
  if (lastIndex < line.length) {
    parts.push({ value: line.slice(lastIndex), type: "text", start: lastIndex, end: line.length });
  }
  return parts;
};

const renderHighlightedTs = (line: string): ReactNode => {
  const trimmed = line.trimStart();
  if (trimmed.startsWith("//")) {
    return <Box component="span" sx={{ color: "var(--code-comment)" }}>{line || " "}</Box>;
  }

  const parts = tokenize(line);
  return (
    <>
      {parts.map((p, idx) => {
        if (p.type === "text") return <Box key={idx} component="span">{p.value}</Box>;

        const token = p.value;
        const rest = line.slice(p.end);
        const isKey = isIdentifier(token) && /^\s*:\s*/.test(rest);

        if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
          return (
            <Box key={idx} component="span" sx={{ color: "var(--code-string)" }}>
              {token}
            </Box>
          );
        }
        if (isKey) {
          return (
            <Box key={idx} component="span" sx={{ color: "var(--code-key)" }}>
              {token}
            </Box>
          );
        }
        if (KEYWORDS.has(token)) {
          return (
            <Box key={idx} component="span" sx={{ color: "var(--code-keyword)", fontWeight: 700 }}>
              {token}
            </Box>
          );
        }
        if (isNumber(token)) {
          return (
            <Box key={idx} component="span" sx={{ color: "var(--code-number)" }}>
              {token}
            </Box>
          );
        }
        if (isConstant(token)) {
          return (
            <Box key={idx} component="span" sx={{ color: "var(--code-constant)" }}>
              {token}
            </Box>
          );
        }

        return <Box key={idx} component="span">{token}</Box>;
      })}
    </>
  );
};

const CodeWindow = ({ title, languageLabel, lines, syntax = "none" }: Props) => {
  return (
    <Box
      sx={{
        border: "1px solid var(--border)",
        borderRadius: "14px",
        background: "linear-gradient(180deg, var(--surface), rgba(255,255,255,0.02))",
        overflow: "hidden",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 0.75 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.35)" }} />
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.22)" }} />
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.14)" }} />
          </Box>
          <Typography
            className="mono"
            sx={{ fontSize: "0.95rem", color: "var(--text)", opacity: 0.92 }}
          >
            {title}
          </Typography>
        </Box>

        {languageLabel ? (
          <Typography
            className="mono"
            sx={{ fontSize: "0.8rem", color: "var(--muted)" }}
          >
            {languageLabel}
          </Typography>
        ) : null}
      </Box>

      <Box
        className="mono"
        sx={{
          display: "grid",
          gridTemplateColumns: "44px 1fr",
          fontSize: "clamp(0.82rem, 2.2vw, 0.9rem)",
          lineHeight: 1.7,
          p: 2,
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Box sx={{ color: "rgba(255,255,255,0.45)", textAlign: "right", pr: 1.5 }}>
          {lines.map((_, idx) => (
            <Box key={idx}>{idx + 1}</Box>
          ))}
        </Box>
        <Box sx={{ color: "rgba(255,255,255,0.85)", whiteSpace: "pre" }}>
          {lines.map((line, idx) => (
            <Box key={idx}>
              {syntax === "ts" || syntax === "js" ? renderHighlightedTs(line) : (line || " ")}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CodeWindow;
