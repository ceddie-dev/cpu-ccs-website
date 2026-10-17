<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isProgramsDropdownOpen = ref(false)
const isMobileProgramsOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileProgramsOpen.value = false
}

// Close mobile drawer whenever the route changes
watch(() => route.path, () => {
  closeMobileMenu()
  isProgramsDropdownOpen.value = false
})

const programs = [
  {
    code: 'BSIT',
    title: 'Information Technology',
    slug: 'bsit',
    desc: 'Networks, Cybersecurity, Web & Systems Infrastructure'
  },
  {
    code: 'BSCS',
    title: 'Computer Science',
    slug: 'bscs',
    desc: 'Algorithms, Artificial Intelligence & Software Engineering'
  },
  {
    code: 'BSDMIA',
    title: 'Digital Media & Interactive Arts',
    slug: 'bsdmia',
    desc: '2D/3D Animation, Game Development & Visual Effects'
  },
  {
    code: 'BLIS',
    title: 'Library & Information Science',
    slug: 'blis',
    desc: 'Digital Archiving, Metadata & Information Systems'
  }
]
</script>

<template>
  <header class="app-header">
    <!-- Top Institutional Banner -->
    <div class="top-banner">
      <div class="container top-banner-inner">
        <div class="banner-left">
          <span class="motto">Scientia et Fides • Exemplary Christian Education for Life (EXCEL)</span>
        </div>
        <div class="banner-right">
          <a href="https://cpu.edu.ph" target="_blank" rel="noopener noreferrer" class="top-link">
            <span>Main University Website</span>
            <AppIcon name="external-link" :size="12" />
          </a>
          <span class="banner-divider">|</span>
          <span class="location-text">
            <AppIcon name="map-pin" :size="12" />
            <span>Jaro, Iloilo City, Philippines</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="main-navbar" aria-label="Main Navigation">
      <div class="container navbar-container">
        <!-- University & College Logos Brand -->
        <RouterLink to="/" class="brand-link" aria-label="CPU College of Computer Studies Home">
          <div class="brand-logos">
            <img
              src="/assets/logos/cpu-logo.png"
              alt="Central Philippine University Official Crest"
              class="logo-cpu"
              width="50"
              height="50"
            />
            <div class="logos-divider"></div>
            <img
              src="/assets/logos/ccs-logo.png"
              alt="CPU College of Computer Studies Official Seal"
              class="logo-ccs"
              width="50"
              height="50"
            />
          </div>
          <div class="brand-text">
            <span class="brand-sub">Central Philippine University</span>
            <span class="brand-main">College of Computer Studies</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation Menu -->
        <div class="desktop-menu">
          <ul class="nav-links">
            <li>
              <RouterLink to="/" class="nav-link" active-class="active-link" exact>
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="nav-link" active-class="active-link">
                About the College
              </RouterLink>
            </li>

            <!-- Academic Programs Dropdown -->
            <li
              class="dropdown-wrapper"
              @mouseenter="isProgramsDropdownOpen = true"
              @mouseleave="isProgramsDropdownOpen = false"
            >
              <button
                class="nav-link dropdown-toggle"
                :class="{ 'active-link': route.path.startsWith('/programs') }"
                aria-haspopup="true"
                :aria-expanded="isProgramsDropdownOpen"
                @click="isProgramsDropdownOpen = !isProgramsDropdownOpen"
              >
                <span>Academic Programs</span>
                <AppIcon name="chevron-down" :size="14" :class="{ 'rotate-180': isProgramsDropdownOpen }" />
              </button>

              <Transition name="dropdown-fade">
                <div v-if="isProgramsDropdownOpen" class="dropdown-menu">
                  <div class="dropdown-header">
                    <span class="dropdown-category">Undergraduate Degrees</span>
                  </div>
                  <ul class="dropdown-list">
                    <li v-for="prog in programs" :key="prog.slug">
                      <RouterLink
                        :to="`/programs/${prog.slug}`"
                        class="dropdown-item"
                        @click="isProgramsDropdownOpen = false"
                      >
                        <div class="dropdown-badge">{{ prog.code }}</div>
                        <div class="dropdown-info">
                          <span class="item-title">{{ prog.title }}</span>
                          <span class="item-desc">{{ prog.desc }}</span>
                        </div>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </Transition>
            </li>

            <li>
              <RouterLink to="/faculty" class="nav-link" active-class="active-link">
                Faculty & Staff
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/news" class="nav-link" active-class="active-link">
                News & Events
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="nav-link" active-class="active-link">
                Contact Us
              </RouterLink>
            </li>
          </ul>

          <div class="navbar-actions">
            <RouterLink to="/contact" class="btn btn-primary btn-sm">
              <span>Inquire Now</span>
              <AppIcon name="arrow-right" :size="14" />
            </RouterLink>
          </div>
        </div>

        <!-- Mobile Hamburger Button -->
        <button
          class="hamburger-btn"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
          @click="toggleMobileMenu"
        >
          <AppIcon :name="isMobileMenuOpen ? 'x' : 'menu'" :size="24" />
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer Overlay & Menu -->
    <Transition name="drawer-fade">
      <div v-if="isMobileMenuOpen" class="mobile-drawer-overlay" @click="closeMobileMenu">
        <div class="mobile-drawer" @click.stop>
          <div class="drawer-header">
            <div class="drawer-brand">
              <img src="/assets/logos/cpu-logo.png" alt="CPU Logo" class="drawer-logo" width="36" height="36" />
              <img src="/assets/logos/ccs-logo.png" alt="CCS Logo" class="drawer-logo" width="36" height="36" />
              <div class="drawer-brand-text">
                <strong>CPU CCS</strong>
                <small>College of Computer Studies</small>
              </div>
            </div>
            <button class="drawer-close-btn" @click="closeMobileMenu" aria-label="Close menu">
              <AppIcon name="x" :size="20" />
            </button>
          </div>

          <div class="drawer-body">
            <ul class="mobile-nav-list">
              <li>
                <RouterLink to="/" class="mobile-nav-link" active-class="active-mobile-link" @click="closeMobileMenu">
                  <AppIcon name="home" :size="18" />
                  <span>Home</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="mobile-nav-link" active-class="active-mobile-link" @click="closeMobileMenu">
                  <AppIcon name="info" :size="18" />
                  <span>About the College</span>
                </RouterLink>
              </li>

              <!-- Mobile Programs Accordion -->
              <li class="mobile-accordion">
                <button
                  class="mobile-nav-link accordion-toggle"
                  :class="{ 'active-mobile-link': route.path.startsWith('/programs') }"
                  @click="isMobileProgramsOpen = !isMobileProgramsOpen"
                >
                  <div class="toggle-left">
                    <AppIcon name="academic" :size="18" />
                    <span>Academic Programs</span>
                  </div>
                  <AppIcon name="chevron-down" :size="16" :class="{ 'rotate-180': isMobileProgramsOpen }" />
                </button>

                <div v-show="isMobileProgramsOpen" class="mobile-submenu">
                  <RouterLink
                    v-for="prog in programs"
                    :key="prog.slug"
                    :to="`/programs/${prog.slug}`"
                    class="mobile-sub-link"
                    active-class="active-mobile-sublink"
                    @click="closeMobileMenu"
                  >
                    <span class="sub-code">{{ prog.code }}</span>
                    <span class="sub-name">{{ prog.title }}</span>
                  </RouterLink>
                </div>
              </li>

              <li>
                <RouterLink to="/faculty" class="mobile-nav-link" active-class="active-mobile-link" @click="closeMobileMenu">
                  <AppIcon name="users" :size="18" />
                  <span>Faculty & Staff</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/news" class="mobile-nav-link" active-class="active-mobile-link" @click="closeMobileMenu">
                  <AppIcon name="newspaper" :size="18" />
                  <span>News & Events</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="mobile-nav-link" active-class="active-mobile-link" @click="closeMobileMenu">
                  <AppIcon name="phone" :size="18" />
                  <span>Contact Us</span>
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="drawer-footer">
            <RouterLink to="/contact" class="btn btn-primary btn-full" @click="closeMobileMenu">
              <span>Contact CCS Dean's Office</span>
              <AppIcon name="arrow-right" :size="16" />
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 900;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 33, 71, 0.08);
}

/* Institutional Top Banner */
.top-banner {
  background-color: var(--cpu-navy-dark);
  color: #cbd5e1;
  font-size: 0.775rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.top-banner-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.motto {
  color: var(--cpu-gold);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.banner-right {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.top-link {
  color: #e2e8f0;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color var(--transition-fast);
}

.top-link:hover {
  color: var(--cpu-gold);
}

.banner-divider {
  color: rgba(255, 255, 255, 0.25);
}

.location-text {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #94a3b8;
}

/* Main Navbar */
.main-navbar {
  padding: 0.75rem 0;
  background-color: #ffffff;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* Brand Link */
.brand-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
}

.brand-logos {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-cpu,
.logo-ccs {
  width: 46px;
  height: 46px;
  object-fit: contain;
  transition: transform var(--transition-fast);
}

.brand-link:hover .logo-cpu,
.brand-link:hover .logo-ccs {
  transform: scale(1.05);
}

.logos-divider {
  width: 1px;
  height: 34px;
  background-color: var(--border-color);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-sub {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.brand-main {
  font-family: 'Outfit', 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--cpu-navy);
  line-height: 1.2;
}

/* Desktop Menu */
.desktop-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.85rem;
  font-size: 0.925rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--cpu-navy);
  background-color: var(--cpu-navy-soft);
}

.active-link {
  color: var(--cpu-navy) !important;
  background-color: var(--cpu-navy-soft);
  position: relative;
}

.active-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background-color: var(--cpu-gold);
  border-radius: var(--radius-pill);
}

/* Dropdown */
.dropdown-wrapper {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform var(--transition-fast);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 360px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  padding: 0.75rem;
  z-index: 1000;
  margin-top: 0.5rem;
}

.dropdown-header {
  padding: 0.4rem 0.75rem 0.6rem;
  border-bottom: 1px solid var(--border-light);
}

.dropdown-category {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.dropdown-list {
  list-style: none;
  padding: 0.35rem 0 0;
  margin: 0;
}

.dropdown-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.75rem;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.dropdown-item:hover {
  background-color: var(--cpu-navy-soft);
}

.dropdown-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cpu-navy);
  background-color: #ffffff;
  border: 1.5px solid var(--cpu-navy);
  padding: 2px 6px;
  border-radius: var(--radius-xs);
  min-width: 54px;
  text-align: center;
}

.dropdown-item:hover .dropdown-badge {
  background-color: var(--cpu-navy);
  color: #ffffff;
}

.dropdown-info {
  display: flex;
  flex-direction: column;
}

.item-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--cpu-navy);
}

.item-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.35;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* Hamburger */
.hamburger-btn {
  display: none;
  color: var(--cpu-navy);
  padding: 0.5rem;
  border-radius: var(--radius-sm);
}

.hamburger-btn:hover {
  background-color: var(--cpu-navy-soft);
}

/* Mobile Drawer */
.mobile-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 21, 46, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.mobile-drawer {
  width: 85%;
  max-width: 360px;
  height: 100%;
  background: var(--bg-surface);
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 25px rgba(0, 0, 0, 0.2);
}

.drawer-header {
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

.drawer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.drawer-logo {
  object-fit: contain;
}

.drawer-brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.drawer-brand-text strong {
  font-size: 1rem;
  color: var(--cpu-navy);
}

.drawer-brand-text small {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.drawer-close-btn {
  color: var(--text-muted);
  padding: 0.4rem;
  border-radius: var(--radius-xs);
}

.drawer-body {
  padding: 1rem 0;
  flex: 1 1 auto;
  overflow-y: auto;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
  width: 100%;
  text-align: left;
}

.mobile-nav-link:hover,
.active-mobile-link {
  color: var(--cpu-navy);
  background-color: var(--cpu-navy-soft);
  border-left: 4px solid var(--cpu-gold);
}

.accordion-toggle {
  justify-content: space-between;
}

.toggle-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-submenu {
  background-color: #f8fafc;
  padding: 0.35rem 0;
  border-left: 3px solid var(--cpu-navy);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-radius: var(--radius-xs);
}

.mobile-sub-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.mobile-sub-link:hover,
.active-mobile-sublink {
  color: var(--cpu-navy);
  font-weight: 600;
}

.sub-code {
  font-weight: 700;
  color: var(--cpu-navy);
  background-color: #ffffff;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  font-size: 0.75rem;
}

.drawer-footer {
  padding: 1.25rem;
  border-top: 1px solid var(--border-color);
  background-color: #fafbfc;
}

.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.25s ease;
}

.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-fade-enter-active .mobile-drawer,
.drawer-fade-leave-active .mobile-drawer {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-fade-enter-from .mobile-drawer {
  transform: translateX(100%);
}

.drawer-fade-leave-to .mobile-drawer {
  transform: translateX(100%);
}

/* Responsive queries */
@media (max-width: 1024px) {
  .desktop-menu {
    display: none;
  }
  .hamburger-btn {
    display: flex;
  }
}

@media (max-width: 640px) {
  .top-banner {
    display: none;
  }
  .brand-sub {
    display: none;
  }
  .brand-main {
    font-size: 1rem;
  }
  .logo-cpu,
  .logo-ccs {
    width: 38px;
    height: 38px;
  }
}
</style>

