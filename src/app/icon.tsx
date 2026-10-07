import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Monogram favicon derived from the wordmark (no separate logo exists).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e0c0a",
          color: "#c49a52",
          fontSize: 44,
          fontFamily: "serif",
        }}
      >
        R
      </div>
    ),
    size,
  );
}
