import { ImageResponse } from "next/og";

export const alt = "RA Contractor — Turnkey Civil & Interior Contractor in Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0A1628",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", width: 120, height: 4, background: "#C9A96E", marginBottom: 40 }} />
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700 }}>RA Contractor</div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 24, color: "#D4BC8B" }}>
          Turnkey Civil &amp; Interior Contractor in Hyderabad
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 40, color: "#9CA3AF" }}>racontractor.in</div>
      </div>
    ),
    size
  );
}
