import { useMemo } from "react";

import Typewriter from "typewriter-effect";

import { Box } from "../../constants/mui.constants";

type Props = {
  strings: string[];
  delay?: number;
  deleteSpeed?: number;
  loop?: boolean;
  reserveCh?: number;
  minHeightEm?: number;
};

const StableTypewriter = ({
  strings,
  delay = 34,
  deleteSpeed = 10,
  loop = true,
  reserveCh,
  minHeightEm = 1.7,
}: Props) => {
  const maxLen = useMemo(() => {
    if (reserveCh && reserveCh > 0) return reserveCh;
    return Math.max(0, ...strings.map((s) => s.length));
  }, [reserveCh, strings]);

  return (
    <Box
      sx={{
        display: "inline-block",
        width: `min(100%, ${Math.max(12, maxLen)}ch)`,
        minHeight: `${minHeightEm}em`,
        whiteSpace: "nowrap",
        overflow: "hidden",
        verticalAlign: "top",
        "& .Typewriter": { display: "inline-block" },
        "& .Typewriter__wrapper": { display: "inline-block" },
        "& .Typewriter__cursor": {
          display: "inline-block",
          width: "0.8ch",
        },
      }}
    >
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop,
          delay,
          deleteSpeed,
        }}
      />
    </Box>
  );
};

export default StableTypewriter;
