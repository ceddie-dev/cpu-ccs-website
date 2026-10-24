<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs/bsit' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Contact', path: '/contact' }
]

const academicPrograms = [
  { label: 'BS Information Technology', path: '/programs/bsit' },
  { label: 'BS Computer Science', path: '/programs/bscs' },
  { label: 'BS Digital Media & Interactive Arts', path: '/programs/bsdmia' },
  { label: 'BS Library & Information Science', path: '/programs/blis' }
]

const studentOrgs = [
  { code: 'CSS', name: 'Computer Science Society' },
  { code: 'ITSO', name: 'Information Technology Student Org.' },
  { code: 'MIDAS', name: 'Media & Interactive Design Arts Society' },
  { code: 'LISSO', name: 'Library & Information Science Student Org.' }
]
</script>

<template>
  <footer class="app-footer">
    <div class="container footer-container">
      <div class="footer-grid">
        <!-- Col 1: CCS Identity & Social Icons -->
        <div class="footer-brand-col">
          <RouterLink to="/" class="footer-brand" aria-label="College of Computer Studies Home">
            <img
              src="/assets/logos/ccs-logo.png"
              alt="College of Computer Studies Official Seal"
              class="footer-logo"
              width="52"
              height="52"
            />
            <div class="brand-text">
              <span class="college-title">College of Computer Studies</span>
              <span class="college-tagline">Excellence in Computing & Digital Innovation</span>
            </div>
          </RouterLink>

          <p class="brand-desc">
            Empowering students with industry-relevant skills, ethical Christian leadership, and modern technological expertise across software engineering, artificial intelligence, interactive media, and information science.
          </p>

          <!-- Social Media Icon Placeholders (Generic SVGs) -->
          <div class="social-links-wrapper">
            <span class="social-label">Follow CCS:</span>
            <div class="social-icons" aria-label="Social Media Links">
              <a href="#" class="social-icon" aria-label="Facebook" @click.prevent title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="X / Twitter" @click.prevent title="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="LinkedIn" @click.prevent title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.86 18.5V10.13H5.07V18.5h2.79z" />
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="GitHub" @click.prevent title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="YouTube" @click.prevent title="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Col 2: Standard Quick Links -->
        <div class="footer-col">
          <h4 class="col-title">Quick Links</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink :to="link.path" class="footer-nav-link">
                <AppIcon name="chevron-right" :size="13" class="link-arrow" />
                <span>{{ link.label }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Academic Programs -->
        <div class="footer-col">
          <h4 class="col-title">Academic Programs</h4>
          <ul class="footer-links">
            <li v-for="prog in academicPrograms" :key="prog.path">
              <RouterLink :to="prog.path" class="footer-nav-link">
                <AppIcon name="chevron-right" :size="13" class="link-arrow" />
                <span>{{ prog.label }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Student Organizations -->
        <div class="footer-col">
          <h4 class="col-title">Student Organizations</h4>
          <ul class="footer-orgs-list">
            <li v-for="org in studentOrgs" :key="org.code" class="org-item">
              <span class="org-badge">{{ org.code }}</span>
              <span class="org-name">{{ org.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar: Current Year Copyright Notice -->
      <div class="footer-bottom">
        <p class="copyright-text">
          &copy; {{ currentYear }} College of Computer Studies. All rights reserved.
        </p>
        <p class="academic-project-note">
          CCS 3031 – Web Systems and Technologies Final Project
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #101020;
  color: #94a3b8;
  margin-top: auto;
  border-top: 3px solid var(--cpu-gold);
  padding: 4rem 0 1.5rem;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.35fr 1.35fr;
  gap: 2.5rem;
}

/* Brand Column */
.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
}

.footer-logo {
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  transition: transform var(--transition-fast);
}

.footer-brand:hover .footer-logo {
  transform: scale(1.05);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.college-title {
  font-family: 'Outfit', 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
}

.college-tagline {
  font-size: 0.75rem;
  color: var(--cpu-gold);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.brand-desc {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.65;
  margin: 0;
}

/* Social Media Placeholders */
.social-links-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.social-label {
  font-size: 0.775rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #cbd5e1;
  font-weight: 600;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background-color: rgba(255, 255, 255, 0.06);
  color: #cbd5e1;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all var(--transition-fast);
}

.social-icon:hover {
  background-color: var(--cpu-gold);
  color: #101020;
  border-color: var(--cpu-gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 184, 0, 0.3);
}

/* Columns */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.col-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  position: relative;
  padding-bottom: 0.6rem;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background-color: var(--cpu-gold);
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #cbd5e1;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.link-arrow {
  color: var(--cpu-gold);
  transition: transform var(--transition-fast);
}

.footer-nav-link:hover {
  color: #ffffff;
  transform: translateX(3px);
}

.footer-nav-link:hover .link-arrow {
  transform: translateX(2px);
}

/* Student Orgs List */
.footer-orgs-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.org-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.825rem;
}

.org-badge {
  display: inline-block;
  padding: 2px 6px;
  font-size: 0.7rem;
  font-weight: 700;
  background-color: rgba(245, 184, 0, 0.15);
  color: var(--cpu-gold);
  border: 1px solid rgba(245, 184, 0, 0.3);
  border-radius: var(--radius-xs);
  min-width: 44px;
  text-align: center;
}

.org-name {
  color: #cbd5e1;
}

/* Bottom Bar */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
}

.copyright-text {
  font-size: 0.85rem;
  color: #94a3b8;
  margin: 0;
}

.academic-project-note {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>
