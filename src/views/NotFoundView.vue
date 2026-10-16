<script setup>
import AppIcon from '@/components/AppIcon.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'

const breadcrumbs = [
  { label: '404 - Page Not Found' }
]
</script>

<template>
  <div class="not-found-page">
    <AppBreadcrumb :items="breadcrumbs" />

    <section class="section-padding bg-subtle not-found-section">
      <div class="container container-narrow">
        <div class="not-found-card card">
          <div class="card-glow"></div>
          <div class="error-badge">
            <AppIcon name="alert-triangle" :size="16" />
            <span>HTTP Status 404</span>
          </div>

          <h1 class="error-code">404</h1>
          <h2 class="error-title">Page or Resource Not Found</h2>

          <p class="error-desc">
            The page you are looking for may have been moved, renamed, or does not exist within the Central Philippine University College of Computer Studies portal.
          </p>

          <div class="helpful-links-section">
            <span class="links-label">Quick University Portals:</span>
            <div class="links-grid">
              <RouterLink to="/" class="quick-link-btn">
                <AppIcon name="home" :size="16" />
                <span>Return to Home</span>
              </RouterLink>
              <RouterLink to="/about" class="quick-link-btn">
                <AppIcon name="info" :size="16" />
                <span>About the College</span>
              </RouterLink>
              <RouterLink to="/programs/bsit" class="quick-link-btn">
                <AppIcon name="monitor" :size="16" />
                <span>BSIT Program</span>
              </RouterLink>
              <RouterLink to="/programs/bscs" class="quick-link-btn">
                <AppIcon name="code" :size="16" />
                <span>BSCS Program</span>
              </RouterLink>
              <RouterLink to="/faculty" class="quick-link-btn">
                <AppIcon name="users" :size="16" />
                <span>Faculty Directory</span>
              </RouterLink>
              <RouterLink to="/contact" class="quick-link-btn">
                <AppIcon name="phone" :size="16" />
                <span>Contact Dean's Office</span>
              </RouterLink>
            </div>
          </div>

          <div class="action-row">
            <RouterLink to="/" class="btn btn-primary btn-lg">
              <AppIcon name="home" :size="18" />
              <span>Back to Home Portal</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.not-found-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 65vh;
}

.not-found-card {
  position: relative;
  padding: 3.5rem 2.5rem;
  text-align: center;
  background-color: var(--bg-surface);
  border-top: 5px solid var(--cpu-navy);
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 150px;
  height: 150px;
  background: rgba(245, 184, 0, 0.15);
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
}

.error-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background-color: #fee2e2;
  color: #dc2626;
  font-size: 0.775rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  margin-bottom: 1rem;
}

.error-code {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(4rem, 10vw, 6.5rem);
  font-weight: 900;
  color: var(--cpu-navy);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
}

.error-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.error-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 580px;
  margin: 0 auto 2.5rem;
}

.helpful-links-section {
  background-color: var(--bg-subtle);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
  text-align: left;
}

.links-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--cpu-navy);
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.quick-link-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem;
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--cpu-navy);
  transition: all var(--transition-fast);
}

.quick-link-btn:hover {
  background-color: var(--cpu-navy);
  color: #ffffff;
  border-color: var(--cpu-navy);
  transform: translateY(-2px);
}

.action-row {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
