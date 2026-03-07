import { useEffect } from "react";

import { motion } from "framer-motion";
import AOS from "aos";

import { Box, Button, Link, Typography } from "../../constants/mui.constants";

import SectionShell from "./section-shell.component";
import { fadeUpItem, hoverLift, stagger } from "./motion";

import { youtubeVideos } from "./youtube-videos.data";

const youtubeChannelUrl = "https://www.youtube.com/@SpaghettiCode-xv2zw";

const getYouTubeId = (url: string) => {
    try {
        const parsed = new URL(url);

        if (parsed.hostname === "youtu.be") {
            const id = parsed.pathname.replace(/^\//, "").trim();
            return id || null;
        }

        if (parsed.hostname.endsWith("youtube.com")) {
            if (parsed.pathname === "/watch") {
                return parsed.searchParams.get("v");
            }

            const match = parsed.pathname.match(/^\/(shorts|embed)\/([^/]+)/);
            if (match?.[2]) return match[2];
        }

        return null;
    } catch {
        return null;
    }
};

const getThumbUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const YoutubeWorkspace = () => {
    useEffect(() => {
        AOS.refresh();
    }, [youtubeVideos.length]);

    return (
        <SectionShell id="Videos" eyebrow="youtube" title="Videos" aos="fade-up">
            {youtubeVideos.length === 0 ? (
                <Box sx={{ mt: 3 }}>
                    <Box
                        sx={{
                            border: "1px solid var(--border)",
                            borderRadius: "16px",
                            background: "rgba(255,255,255,0.04)",
                            p: 2.5,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1.5,
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography sx={{ color: "rgba(255,255,255,0.86)" }}>
                            New videos coming soon — for now you can visit the channel.
                        </Typography>

                        <Button
                            component="a"
                            href={youtubeChannelUrl}
                            target="__blank"
                            rel="noreferrer"
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                fontWeight: 800,
                                borderRadius: "12px",
                                borderColor: "var(--border)",
                                color: "rgba(255,255,255,0.9)",
                                ":hover": { borderColor: "var(--accent)" },
                            }}
                        >
                            Open YouTube Channel
                        </Button>
                    </Box>
                </Box>
            ) : (
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
                        "@media (min-width: 768px)": {
                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        },
                        "@media (min-width: 1024px)": {
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        },
                        gap: 3,
                        alignItems: "stretch",
                    }}
                >
                    {youtubeVideos.map((video, index) => {
                        const id = getYouTubeId(video.url);
                        const thumb = id ? getThumbUrl(id) : null;

                        return (
                            <Box
                                key={`${video.title}:${video.url}`}
                                component={motion.div}
                                variants={fadeUpItem}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                style={{ width: "100%", height: "100%" }}
                            >
                                <Box
                                    component={motion.div}
                                    variants={hoverLift}
                                    sx={{
                                        border: "1px solid var(--border)",
                                        borderRadius: "16px",
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                                        overflow: "hidden",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Link
                                        href={video.url}
                                        target="__blank"
                                        rel="noreferrer"
                                        underline="none"
                                        sx={{
                                            color: "inherit",
                                            display: "block",
                                            ":focus-visible": { outline: "2px solid var(--accent)", outlineOffset: 2 },
                                        }}
                                        aria-label={`Open YouTube video: ${video.title}`}
                                    >
                                        <Box
                                            sx={{
                                                position: "relative",
                                                aspectRatio: "16 / 9",
                                                background: "rgba(0,0,0,0.35)",
                                                borderBottom: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                        >
                                            {thumb ? (
                                                <Box
                                                    component="img"
                                                    src={thumb}
                                                    alt={video.title}
                                                    loading="lazy"
                                                    sx={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        filter: "saturate(1.05)",
                                                    }}
                                                />
                                            ) : null}

                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    display: "grid",
                                                    placeItems: "center",
                                                    background: "linear-gradient(180deg, rgba(0,0,0,0.00), rgba(0,0,0,0.35))",
                                                }}
                                            >
                                                <Box
                                                    className="mono"
                                                    sx={{
                                                        border: "1px solid rgba(255,255,255,0.18)",
                                                        background: "rgba(0,0,0,0.35)",
                                                        borderRadius: "999px",
                                                        px: 1.4,
                                                        py: 0.8,
                                                        color: "rgba(255,255,255,0.9)",
                                                    }}
                                                >
                                                    ▶ Watch
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Link>

                                    <Box sx={{ p: 2.5, display: "grid", gap: 1, alignContent: "start", flex: 1 }}>
                                        <Typography sx={{ fontWeight: 950, fontSize: "1.1rem", lineHeight: 1.25 }}>
                                            {video.title}
                                        </Typography>

                                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 0.5 }}>
                                            <Button
                                                component="a"
                                                href={video.url}
                                                target="__blank"
                                                rel="noreferrer"
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    textTransform: "none",
                                                    fontWeight: 800,
                                                    borderRadius: "999px",
                                                    borderColor: "rgba(255,255,255,0.14)",
                                                    color: "rgba(255,255,255,0.9)",
                                                    ":hover": { borderColor: "var(--accent)" },
                                                }}
                                            >
                                                Open on YouTube
                                            </Button>

                                            {id ? (
                                                <Button
                                                    component="a"
                                                    href={`https://www.youtube-nocookie.com/embed/${id}`}
                                                    target="__blank"
                                                    rel="noreferrer"
                                                    size="small"
                                                    variant="text"
                                                    sx={{
                                                        textTransform: "none",
                                                        fontWeight: 800,
                                                        borderRadius: "999px",
                                                        color: "var(--muted)",
                                                        ":hover": { color: "rgba(255,255,255,0.9)" },
                                                    }}
                                                >
                                                    Embed link
                                                </Button>
                                            ) : null}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            )}
        </SectionShell>
    );
};

export default YoutubeWorkspace;
