---
title: Semester II
socialImage: https://utopia.inferalis.space/static/og-image.png
---
Your university files, beautifully organised.


<div class="course-grid">
  <a href="02-Thermodynamics" class="course-card"><span class="course-icon material-symbols-outlined">local_fire_department</span>Thermodynamics</a>
  <a href="03-DEVC" class="course-card"><span class="course-icon material-symbols-outlined">calculate</span>DEVC</a>
  <a href="04-BEEE/" class="course-card"><span class="course-icon material-symbols-outlined">electrical_services</span>Electrical & Electronics</a>
  <a href="05-Chemistry" class="course-card"><span class="course-icon material-symbols-outlined">science</span>Chemistry</a>
  <a href="07-Economics" class="course-card"><span class="course-icon material-symbols-outlined">bar_chart</span>Economics</a>
  <a href="09-PPSUC" class="course-card"><span class="course-icon material-symbols-outlined">code</span>PPSUC</a>
  <a href="10-IOT" class="course-card"><span class="course-icon material-symbols-outlined">sensors</span>IOT</a>
  <a href="08-CRT" class="course-card"><span class="course-icon material-symbols-outlined">fact_check</span>CRT</a>
  <a href="11-LAB" class="course-card"><span class="course-icon material-symbols-outlined">biotech</span>LAB</a>
  <a href="14-Archive" class="course-card"><span class="course-icon material-symbols-outlined">archive</span>Archive</a>
  <a href="15-Docs" class="course-card"><span class="course-icon material-symbols-outlined">school</span>Docs</a>
  <a href="16-Other" class="course-card"><span class="course-icon material-symbols-outlined">category</span>Other</a>
</div>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,500,0,200">

<style>
.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 22px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 200,
    "opsz" 24;
}

.course-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  margin-top: 18px;
}

.course-card,
.course-card.internal {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  min-height: 44px;
  padding: 0 6px 0 2px !important;
  background: transparent !important;
  background-color: transparent !important;
  border: 0;
  border-radius: 0;
  text-align: left;
  font-weight: 560;
  font-size: 0.96rem;
  line-height: 1.2;
  color: var(--m3-on-surface, var(--darkgray)) !important;
  text-decoration: none !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.16s ease, transform 0.12s ease;
  box-shadow: none !important;
}

.course-icon {
  font-size: 1.12rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 9px;
  color: color-mix(in srgb, var(--m3-on-surface) 62%, var(--m3-primary) 38%);
}

.course-card:hover {
  color: var(--m3-on-surface) !important;
  transform: translateX(2px);
}

.course-card:active {
  transform: translateX(0);
}

.course-grid .course-card + .course-card {
  border-top: 1px solid color-mix(in srgb, var(--m3-outline-variant, #2d3142) 45%, transparent);
}

@media (min-width: 560px) and (max-width: 899px) {
  .course-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  .course-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    max-width: 980px;
  }
}
</style>
