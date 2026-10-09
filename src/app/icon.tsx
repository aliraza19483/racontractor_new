import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#0A1628",
          borderRadius: 6,
          border: "1.5px solid #D4AF37",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 800,
            fontFamily: "serif",
            color: "#F5E8C7",
            letterSpacing: -0.5,
          }}
        >
          RA
        </span>
      </div>
    ),
    { ...size }
  );
}
