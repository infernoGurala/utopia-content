---
title: Download UTOPIA
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Manrope:wght@500;700;800&display=swap" rel="stylesheet">
<div class="download-page">
  <section class="download-hero">
    <div class="eyebrow">UTOPIA MOBILE</div>
    <h1>One tap away from the latest build.</h1>
    <p class="hero-copy">
      Version 2.2.1 is ready. This release requires a one-time reinstall, but your cloud data stays intact and available after sign-in.
    </p>
    <div class="hero-actions">
      <a class="primary-cta" href="/static/downloads/Utopia-v2.2.1.apk" download>
        Download APK
      </a>
      <div class="build-pill">Android APK • v2.2.1</div>
    </div>
    <div class="hero-grid">
      <div class="hero-card">
        <span class="card-kicker">What changes</span>
        <strong>Clean reinstall required</strong>
        <p>Uninstall the older app, install this build, then sign in again if prompted.</p>
      </div>
      <div class="hero-card">
        <span class="card-kicker">What stays safe</span>
        <strong>Your synced data</strong>
        <p>Notes, progress, and account-backed content remain preserved in the cloud.</p>
      </div>
      <div class="hero-card">
        <span class="card-kicker">Designed for</span>
        <strong>Fast recovery</strong>
        <p>The whole process takes a minute or two and only needs to happen once.</p>
      </div>
    </div>
  </section>
  <section class="detail-strip">
    <div class="detail-card">
      <span>01</span>
      Remove the current UTOPIA app from your phone.
    </div>
    <div class="detail-card">
      <span>02</span>
      Download the latest APK using the button above.
    </div>
    <div class="detail-card">
      <span>03</span>
      Install it and sign back in if the app asks.
    </div>
  </section>
  <section class="confidence-panel">
    <div>
      <div class="eyebrow">WHY THIS PAGE EXISTS</div>
      <h2>A better handoff than a plain download link.</h2>
      <p>
        This page is intentionally focused: one release, one action, no clutter. Everything here is tuned to get users onto the correct build with zero ambiguity.
      </p>
    </div>
    <div class="confidence-points">
      <div class="confidence-item">
        <strong>One-time migration</strong>
        <p>You should not need to repeat this reinstall flow for normal updates.</p>
      </div>
      <div class="confidence-item">
        <strong>Direct file delivery</strong>
        <p>The call to action points straight to the hosted APK for the current release.</p>
      </div>
      <div class="confidence-item">
        <strong>Clear state messaging</strong>
        <p>Users know upfront that reinstall is expected and that synced data is safe.</p>
      </div>
    </div>
  </section>
</div>

<style>
:root {
  --download-bg-1: #08111f;
  --download-bg-2: #112845;
  --download-bg-3: #f5b85c;
  --download-surface: rgba(8, 17, 31, 0.72);
  --download-surface-soft: rgba(255, 255, 255, 0.08);
  --download-border: rgba(255, 255, 255, 0.14);
  --download-text: #f8f5ef;
  --download-muted: rgba(248, 245, 239, 0.72);
  --download-accent: #ffbf66;
  --download-accent-deep: #ff9d2e;
  --download-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
}

.download-page {
  position: relative;
  overflow: hidden;
  margin-top: 1.5rem;
  border-radius: 32px;
  padding: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--download-text);
  background:
    radial-gradient(circle at top left, rgba(255, 191, 102, 0.18), transparent 24%),
    radial-gradient(circle at 85% 12%, rgba(108, 170, 255, 0.24), transparent 22%),
    linear-gradient(135deg, var(--download-bg-1) 0%, var(--download-bg-2) 58%, #091521 100%);
  box-shadow: var(--download-shadow);
  font-family: "Space Grotesk", sans-serif;
}

.download-page::before {
  content: "";
  position: absolute;
  inset: auto -10% -32% auto;
  width: 340px;
  height: 340px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(245, 184, 92, 0.42), transparent 66%);
  filter: blur(10px);
  pointer-events: none;
}

.download-hero,
.detail-strip,
.confidence-panel {
  position: relative;
  z-index: 1;
}

.download-hero {
  padding: clamp(1.1rem, 3vw, 2.5rem);
  border: 1px solid var(--download-border);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03)),
    var(--download-surface);
  backdrop-filter: blur(16px);
}

.eyebrow {
  margin-bottom: 0.9rem;
  color: var(--download-accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
}

.download-hero h1,
.confidence-panel h2 {
  margin: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.download-hero h1 {
  max-width: 10ch;
  font-size: clamp(2.7rem, 7vw, 5.6rem);
}

.hero-copy,
.confidence-panel p,
.hero-card p,
.confidence-item p,
.detail-card {
  color: var(--download-muted);
  line-height: 1.65;
}

.hero-copy {
  max-width: 58ch;
  margin: 1.15rem 0 0;
  font-size: 1.02rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  margin-top: 1.5rem;
}

.primary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 1.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--download-accent) 0%, var(--download-accent-deep) 100%);
  color: #1d1203 !important;
  font-weight: 800;
  text-decoration: none !important;
  box-shadow: 0 18px 40px rgba(255, 157, 46, 0.24);
  transition: transform 0.16s ease, box-shadow 0.16s ease;
}

.primary-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 48px rgba(255, 157, 46, 0.34);
}

.build-pill {
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 0 1rem;
  border: 1px solid var(--download-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--download-text);
  font-weight: 600;
}

.hero-grid,
.detail-strip,
.confidence-points {
  display: grid;
  gap: 1rem;
}

.hero-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 1.8rem;
}

.hero-card,
.detail-card,
.confidence-item {
  border: 1px solid var(--download-border);
  border-radius: 24px;
  background: var(--download-surface-soft);
}

.hero-card {
  padding: 1.15rem;
}

.card-kicker {
  display: block;
  margin-bottom: 0.55rem;
  color: var(--download-accent);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.hero-card strong,
.confidence-item strong {
  display: block;
  font-size: 1.02rem;
  color: var(--download-text);
}

.hero-card p,
.confidence-item p {
  margin: 0.55rem 0 0;
  font-size: 0.95rem;
}

.detail-strip {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 1rem;
}

.detail-card {
  padding: 1rem 1.05rem;
  font-weight: 500;
}

.detail-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
  border-radius: 999px;
  background: rgba(255, 191, 102, 0.12);
  color: var(--download-accent);
  font-size: 0.84rem;
  font-weight: 800;
}

.confidence-panel {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.confidence-panel > div {
  padding: 1.3rem;
  border: 1px solid var(--download-border);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.05);
}

.confidence-panel h2 {
  max-width: 12ch;
  font-size: clamp(1.9rem, 4vw, 3.2rem);
}

.confidence-panel p {
  max-width: 54ch;
  margin: 1rem 0 0;
}

@media (max-width: 920px) {
  .hero-grid,
  .detail-strip,
  .confidence-panel {
    grid-template-columns: 1fr;
  }

  .download-hero h1,
  .confidence-panel h2 {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .download-page {
    border-radius: 24px;
    padding: 0.8rem;
  }

  .download-hero,
  .confidence-panel > div,
  .hero-card,
  .detail-card,
  .confidence-item {
    border-radius: 20px;
  }

  .hero-copy,
  .hero-card p,
  .confidence-panel p,
  .confidence-item p,
  .detail-card {
    font-size: 0.94rem;
  }

  .primary-cta,
  .build-pill {
    width: 100%;
  }
}
</style>
