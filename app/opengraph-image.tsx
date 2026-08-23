import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

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
          alignItems: "flex-start",
          padding: "80px",
          background: "#0B1F3A",
          color: "#FAF7F2",
          fontSize: 32,
        }}
      >
        <div style={{ fontSize: 22, color: "#D4BC8B", letterSpacing: 2, textTransform: "uppercase" }}>
          {siteConfig.brandName}
        </div>
        <div style={{ fontSize: 56, marginTop: 20, fontWeight: 600, maxWidth: 900 }}>
          {siteConfig.companyName}
        </div>
        <div style={{ fontSize: 26, marginTop: 24, color: "#FAF7F2CC", maxWidth: 850 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
