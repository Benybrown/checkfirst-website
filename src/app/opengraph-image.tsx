import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "CheckFirst AI-powered third-party risk management platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #070814 0%, #2b174f 52%, #116d7b 100%)",
          color: "white",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #5eead4, #a78bfa, #f472b6)",
            }}
          />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            CheckFirst
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
            AI-powered vendor security assessments
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.78)" }}>
            TPRM software, supplier due diligence, and managed third-party risk workflows.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
