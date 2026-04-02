---
title: Download UTOPIA
---

<div class="download-card">
  <div class="download-label">UTOPIA APP</div>
  <h1>Download UTOPIA</h1>
  <p class="download-text">Latest Android build for UTOPIA.</p>

  <div class="download-meta">
    <div class="meta-item">
      <span class="meta-key">Version</span>
      <strong>2.2.2</strong>
    </div>
    <div class="meta-item">
      <span class="meta-key">Platform</span>
      <strong>Android APK</strong>
    </div>
    <div class="meta-item">
      <span class="meta-key">Note</span>
      <strong>One-time reinstall required</strong>
    </div>
  </div>

  <a class="download-button" href="/static/downloads/Utopia-v2.2.2.apk" download>Download APK</a>

  <p class="download-footnote">
    Your cloud data remains safe. Install the APK and sign in again if needed.
  </p>
</div>

<style>
.download-card {
  max-width: 760px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: radial-gradient(circle at top right, rgba(255, 184, 77, 0.14), transparent 28%),
    linear-gradient(135deg, #0c1220 0%, #111a2e 100%);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
  color: #f4f1ea;
}

.download-label {
  margin-bottom: 0.75rem;
  color: #ffb84d;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.download-card h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1;
  color: #ffffff;
}

.download-text {
  margin: 1rem 0 0;
  max-width: 40rem;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(244, 241, 234, 0.78);
}

.download-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.meta-item {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.meta-key {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(244, 241, 234, 0.58);
}

.meta-item strong {
  color: #ffffff;
  font-size: 1rem;
}

.download-button {
  display: inline-block;
  margin-top: 1.6rem;
  padding: 0.95rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffb84d 0%, #ff9822 100%);
  color: #1b1104 !important;
  font-weight: 800;
  text-decoration: none !important;
  box-shadow: 0 14px 30px rgba(255, 152, 34, 0.28);
}

.download-footnote {
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(244, 241, 234, 0.7);
}

@media (max-width: 720px) {
  .download-card {
    padding: 1.25rem;
    border-radius: 22px;
  }

  .download-meta {
    grid-template-columns: 1fr;
  }

  .download-button {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
