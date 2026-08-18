import { ImageResponse } from "next/og";

export const alt = "ASBG at HYU — AWS Student Builders Group";
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
          justifyContent: "space-between",
          padding: "72px 76px",
          background: "#020407",
          backgroundImage:
            "radial-gradient(900px 520px at 78% 12%, rgba(7, 74, 184, 0.55), rgba(2, 4, 7, 0))",
          color: "#f5f9ff",
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 2, color: "#ff8f05" }}>
            AWS STUDENT BUILDERS GROUP · HANYANG UNIVERSITY
          </div>
          <div style={{ marginTop: 40, fontSize: 132, lineHeight: 1, letterSpacing: -5 }}>
            BUILDERS
          </div>
          <div style={{ fontSize: 132, lineHeight: 1.05, letterSpacing: -5 }}>START HERE.</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, letterSpacing: -1 }}>ASBG at HYU</div>
          <div
            style={{
              display: "flex",
              padding: "16px 28px",
              borderRadius: 999,
              background: "#ff8f05",
              color: "#14120a",
              fontSize: 26,
              letterSpacing: 1,
            }}
          >
            2026 RECRUITING · 08.24 – 09.04
          </div>
        </div>
      </div>
    ),
    size,
  );
}
