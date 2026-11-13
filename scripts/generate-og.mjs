import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const yabseraImgPath = path.join(publicDir, 'yabsera.jpg');
const heroBgPath = path.join(publicDir, 'hero-bg.avif');

const yabseraBase64 = fs.existsSync(yabseraImgPath)
  ? `data:image/jpeg;base64,${fs.readFileSync(yabseraImgPath).toString('base64')}`
  : '';

const heroBgBase64 = fs.existsSync(heroBgPath)
  ? `data:image/avif;base64,${fs.readFileSync(heroBgPath).toString('base64')}`
  : '';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Gabarito:wght@700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
  }

  body {
    background-color: #0d121c;
    color: #e2e8f0;
    font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    display: flex;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  /* Blueprint Grid background */
  .bg-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(37, 99, 235, 0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(37, 99, 235, 0.07) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  /* Radial glows */
  .glow-top {
    position: absolute;
    top: -120px;
    left: 200px;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(37, 99, 235, 0) 65%);
    filter: blur(50px);
    pointer-events: none;
  }

  .glow-bottom {
    position: absolute;
    bottom: -100px;
    right: 150px;
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 65%);
    filter: blur(50px);
    pointer-events: none;
  }

  /* Background Construction Silhouette on the right */
  .bg-hero {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 600px;
    background-image: url('${heroBgBase64}');
    background-size: cover;
    background-position: center;
    opacity: 0.16;
    mask-image: linear-gradient(to left, black 30%, transparent 95%);
    -webkit-mask-image: linear-gradient(to left, black 30%, transparent 95%);
    mix-blend-mode: luminosity;
  }

  .card-container {
    position: relative;
    z-index: 10;
    width: 1200px;
    height: 630px;
    padding: 56px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* Left column */
  .left-col {
    width: 670px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .badge-top {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 9999px;
    background: rgba(37, 99, 235, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.4);
    color: #60a5fa;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #3b82f6;
    box-shadow: 0 0 10px #3b82f6;
  }

  .content-mid {
    margin-top: 18px;
    margin-bottom: auto;
  }

  .author-name {
    font-family: 'Gabarito', Georgia, serif;
    font-size: 58px;
    font-weight: 900;
    line-height: 1.05;
    color: #ffffff;
    letter-spacing: -1.5px;
    margin-bottom: 12px;
  }

  .author-title {
    font-family: 'Gabarito', Georgia, serif;
    font-size: 34px;
    font-weight: 700;
    color: #3b82f6;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
  }

  .university-badge {
    font-size: 17px;
    font-weight: 500;
    color: #94a3b8;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 26px;
    background: rgba(255, 255, 255, 0.03);
    padding: 6px 14px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .pills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .pill {
    padding: 8px 16px;
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pill-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #3b82f6;
  }

  .footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .domain-link {
    font-size: 15px;
    font-weight: 600;
    color: #38bdf8;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .tagline {
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
  }

  /* Right column */
  .right-col {
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .polaroid-card {
    width: 320px;
    background: #182232;
    border-radius: 22px;
    padding: 14px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 
      0 25px 60px -10px rgba(0, 0, 0, 0.8),
      0 0 50px -5px rgba(37, 99, 235, 0.35);
    transform: rotate(3deg);
  }

  .photo-wrapper {
    width: 100%;
    height: 330px;
    border-radius: 14px;
    overflow: hidden;
    background: #0f172a;
  }

  .photo-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 15%;
    display: block;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 6px 4px 6px;
  }

  .card-name {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
  }

  .card-badge {
    font-size: 11px;
    font-weight: 700;
    color: #93c5fd;
    background: rgba(37, 99, 235, 0.25);
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 3px 10px;
    border-radius: 9999px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="glow-top"></div>
  <div class="glow-bottom"></div>
  <div class="bg-hero"></div>

  <div class="card-container">
    <div class="left-col">
      <div>
        <div class="badge-top">
          <span class="badge-dot"></span>
          Civil Engineering Portfolio
        </div>
      </div>

      <div class="content-mid">
        <h1 class="author-name">Yabsera Masrersha</h1>
        <div class="author-title">Civil Engineer</div>
        <div class="university-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #60a5fa;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          Addis Ababa Science & Technology University
        </div>
        <div class="pills-row">
          <div class="pill"><span class="pill-dot"></span>Structural Design</div>
          <div class="pill"><span class="pill-dot"></span>Thermal Insulation</div>
          <div class="pill"><span class="pill-dot"></span>Material Selection</div>
          <div class="pill"><span class="pill-dot"></span>Construction Tech</div>
        </div>
      </div>

      <div class="footer-row">
        <div class="domain-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          yabseramasreshaportofolio.vercel.app
        </div>
        <div class="tagline">Innovative & Sustainable Infrastructure</div>
      </div>
    </div>

    <div class="right-col">
      <div class="polaroid-card">
        <div class="photo-wrapper">
          <img src="${yabseraBase64}" alt="Yabsera Masrersha" />
        </div>
        <div class="card-footer">
          <span class="card-name">Yabsera Masrersha</span>
          <span class="card-badge">Civil Engineer</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const tempHtmlPath = path.resolve('og-temp.html');
fs.writeFileSync(tempHtmlPath, html, 'utf-8');
console.log('og-temp.html generated successfully');
