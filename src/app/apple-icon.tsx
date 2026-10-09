import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F2038 0%, #0A1628 50%, #050C16 100%)",
          borderRadius: 36,
          border: "4px solid #D4AF37",
        }}
      >
        <span
          style={{
            fontSize: 92,
            fontWeight: 800,
            fontFamily: "serif",
            color: "#F5E8C7",
            letterSpacing: 2,
          }}
        >
          RA
        </span>
        <div
          style={{
            width: 70,
            height: 3,
            background: "#D4AF37",
            marginTop: 4,
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
