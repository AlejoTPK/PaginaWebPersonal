import sharp from "sharp";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0f1c"/>
      <stop offset="100%" style="stop-color:#1e1b4b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <linearGradient id="title" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="150" cy="500" r="350" fill="#3b82f610"/>
  <circle cx="1100" cy="150" r="280" fill="#8b5cf610"/>
  <circle cx="900" cy="550" r="200" fill="#3b82f608"/>

  <text x="80" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="white" letter-spacing="-0.5">Alejandro Castrillón</text>

  <text x="80" y="305" font-family="system-ui, -apple-system, sans-serif" font-size="38" fill="#94a3b8" letter-spacing="-0.3">AI &amp; Automation Engineer</text>

  <rect x="80" y="350" width="340" height="4" rx="2" fill="url(#accent)"/>

  <text x="80" y="415" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="#64748b">Backend · Data Analytics · DevOps · Machine Learning</text>

  <text x="80" y="500" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#3b82f6" font-weight="600">alejandrocastrillon.dev</text>
</svg>`;

async function main() {
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile("public/og-image.jpg");

  console.log("✅ OG image generated: public/og-image.jpg");
}

main().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});
