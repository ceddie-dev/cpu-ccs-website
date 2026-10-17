<script setup>
import AppIcon from './AppIcon.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <!-- Top Footer Ribbon -->
    <div class="footer-ribbon">
      <div class="container ribbon-inner">
        <div class="ribbon-brand">
          <img
            src="/assets/logos/cpu-logo.png"
            alt="Central Philippine University Crest"
            class="ribbon-logo"
            width="48"
            height="48"
          />
          <img
            src="/assets/logos/ccs-logo.png"
            alt="College of Computer Studies Official Seal"
            class="ribbon-logo"
            width="48"
            height="48"
          />
          <div class="ribbon-text">
            <h3>Central Philippine University</h3>
            <p>College of Computer Studies • Scientia et Fides</p>
          </div>
        </div>

        <div class="ribbon-accreditation">
          <div class="accreditation-badge">
            <AppIcon name="award" :size="20" class="gold-icon" />
            <div>
              <strong>PACUCOA Level III Re-Accredited</strong>
              <small>Certified Excellence in Computing Education</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Columns -->
    <div class="container footer-main">
      <div class="footer-grid">
        <!-- Col 1: About College -->
        <div class="footer-col col-about">
          <h4 class="col-title">College of Computer Studies</h4>
          <p class="about-desc">
            Committed to Exemplary Christian Education for Life (EXCEL), producing ethically grounded software engineers, IT specialists, creative digital artists, and information curators.
          </p>
          <div class="dean-note">
            <span class="note-label">College Dean:</span>
            <span class="note-val">Prof. Ma. Christina A. Quijano, MSCS</span>
          </div>
        </div>

        <!-- Col 2: Academic Programs -->
        <div class="footer-col">
          <h4 class="col-title">Academic Programs</h4>
          <ul class="footer-links">
            <li>
              <RouterLink to="/programs/bsit">
                <AppIcon name="chevron-right" :size="13" />
                <span>BS Information Technology (BSIT)</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/programs/bscs">
                <AppIcon name="chevron-right" :size="13" />
                <span>BS Computer Science (BSCS)</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/programs/bsdmia">
                <AppIcon name="chevron-right" :size="13" />
                <span>BS Digital Media & Interactive Arts (BSDMIA)</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/programs/blis">
                <AppIcon name="chevron-right" :size="13" />
                <span>BS Library & Information Science (BLIS)</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Quick Navigation -->
        <div class="footer-col">
          <h4 class="col-title">Quick Navigation</h4>
          <ul class="footer-links">
            <li>
              <RouterLink to="/">
                <AppIcon name="chevron-right" :size="13" />
                <span>Home Portal</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about">
                <AppIcon name="chevron-right" :size="13" />
                <span>About the College</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/faculty">
                <AppIcon name="chevron-right" :size="13" />
                <span>Faculty & Staff Directory</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/news">
                <AppIcon name="chevron-right" :size="13" />
                <span>News, Events & Announcements</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">
                <AppIcon name="chevron-right" :size="13" />
                <span>Contact Dean's Office</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Campus Contact -->
        <div class="footer-col">
          <h4 class="col-title">Campus & Contact</h4>
          <ul class="contact-list">
            <li>
              <AppIcon name="map-pin" :size="16" class="contact-icon" />
              <span>College of Computer Studies Building, Central Philippine University, Lopez Jaena St., Jaro, Iloilo City 5000, Philippines</span>
            </li>
            <li>
              <AppIcon name="phone" :size="16" class="contact-icon" />
              <span>(033) 329-1971 local 1076 / 1077</span>
            </li>
            <li>
              <AppIcon name="mail" :size="16" class="contact-icon" />
              <span>ccs@cpu.edu.ph</span>
            </li>
            <li>
              <AppIcon name="clock" :size="16" class="contact-icon" />
              <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Student Organizations Banner -->
    <div class="footer-orgs">
      <div class="container orgs-inner">
        <span class="orgs-label">Student Organizations:</span>
        <div class="orgs-tags">
          <span class="org-tag">CPU Computer Science Society (CSS)</span>
          <span class="org-tag">Media & Interactive Design Arts Society (MIDAS)</span>
          <span class="org-tag">Library & Information Science Student Org (LISSO)</span>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright & Academic Disclosure -->
    <div class="footer-bottom">
      <div class="container bottom-inner">
        <p class="copyright-text">
          &copy; {{ currentYear }} Central Philippine University – College of Computer Studies. All rights reserved.
        </p>
        <p class="academic-disclaimer">
          Developed for <strong>CCS 3031 – Web Systems and Technologies</strong> Final Examination Project.
          Reference: <a href="https://ccs.cpu.edu.ph" target="_blank" rel="noopener noreferrer">ccs.cpu.edu.ph</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--cpu-navy-dark);
  color: #94a3b8;
  margin-top: auto;
  border-top: 4px solid var(--cpu-gold);
}

/* Ribbon */
.footer-ribbon {
  background: rgba(0, 33, 71, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.75rem 0;
}

.ribbon-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.ribbon-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ribbon-logo {
  object-fit: contain;
}

.ribbon-text h3 {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.ribbon-text p {
  color: var(--cpu-gold);
  font-size: 0.85rem;
  font-weight: 500;
  margin: 0;
}

.accreditation-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(245, 184, 0, 0.3);
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
}

.gold-icon {
  color: var(--cpu-gold);
}

.accreditation-badge strong {
  display: block;
  color: #ffffff;
  font-size: 0.85rem;
}

.accreditation-badge small {
  color: #cbd5e1;
  font-size: 0.75rem;
}

/* Main */
.footer-main {
  padding: 3.5rem 1.5rem 2.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
  gap: 2.5rem;
}

.col-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--cpu-gold);
  border-radius: var(--radius-pill);
}

.about-desc {
  font-size: 0.875rem;
  color: #cbd5e1;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.dean-note {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.6rem 0.85rem;
  border-radius: var(--radius-xs);
  border-left: 3px solid var(--cpu-gold);
}

.note-label {
  font-size: 0.75rem;
  color: var(--cpu-gold);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.note-val {
  font-size: 0.85rem;
  color: #ffffff;
  font-weight: 600;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #cbd5e1;
  font-size: 0.875rem;
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: var(--cpu-gold);
  transform: translateX(4px);
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.85rem;
  color: #cbd5e1;
  line-height: 1.5;
}

.contact-icon {
  color: var(--cpu-gold);
  margin-top: 3px;
  flex-shrink: 0;
}

/* Orgs */
.footer-orgs {
  background: rgba(0, 21, 46, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.85rem 0;
}

.orgs-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.orgs-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--cpu-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.orgs-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.org-tag {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
  font-size: 0.775rem;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
}

/* Bottom */
.footer-bottom {
  padding: 1.5rem 0;
  font-size: 0.8rem;
  color: #64748b;
}

.bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.copyright-text {
  color: #94a3b8;
  margin: 0;
}

.academic-disclaimer {
  color: #94a3b8;
  margin: 0;
}

.academic-disclaimer a {
  color: var(--cpu-gold);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .bottom-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>

