import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "#0F0E0C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* T-shirt shape via clip */}
      <div
        style={{
          width: 26,
          height: 22,
          background: "#C9A961",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath:
            "polygon(0% 30%, 12% 0%, 32% 22%, 50% 14%, 68% 22%, 88% 0%, 100% 30%, 74% 42%, 74% 100%, 26% 100%, 26% 42%)",
        }}
      >
        <span
          style={{
            color: "#0F0E0C",
            fontSize: 7,
            fontWeight: "bold",
            fontFamily: "serif",
            marginTop: 6,
          }}
        >
          PT
        </span>
      </div>
    </div>,
    { ...size }
  );
}
