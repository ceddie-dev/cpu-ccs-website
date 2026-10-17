<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  program: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="program-card card">
    <div class="card-header">
      <div class="icon-wrapper">
        <img
          :src="program.icon"
          :alt="`${program.code} official insignia`"
          class="program-icon"
          loading="lazy"
        />
      </div>
      <div class="header-meta">
        <span class="badge badge-navy">{{ program.code }}</span>
        <span class="accreditation-pill">{{ program.accreditation }}</span>
      </div>
    </div>

    <div class="card-body">
      <h3 class="program-title">
        <RouterLink :to="`/programs/${program.slug}`">
          {{ program.title }}
        </RouterLink>
      </h3>
      <p class="program-tagline">{{ program.tagline }}</p>

      <div class="program-features">
        <div class="feature-item">
          <AppIcon name="clock" :size="16" />
          <span>{{ program.duration }}</span>
        </div>
        <div class="feature-item">
          <AppIcon name="users" :size="16" />
          <span>{{ program.studentOrg.abbr }} Organization</span>
        </div>
      </div>

      <div class="areas-preview">
        <span class="areas-label">Focus Areas:</span>
        <ul class="areas-list">
          <li v-for="(area, index) in program.areasOfStudy.slice(0, 3)" :key="index">
            <AppIcon name="check-circle" :size="14" class="check-icon" />
            <span>{{ area.title }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="card-footer">
      <RouterLink :to="`/programs/${program.slug}`" class="btn btn-navy btn-full">
        <span>Explore {{ program.code }} Curriculum</span>
        <AppIcon name="arrow-right" :size="16" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.program-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-top: 4px solid var(--cpu-navy);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-top-color var(--transition-normal);
}

.program-card:hover {
  border-top-color: var(--cpu-gold);
}

.card-header {
  padding: 1.75rem 1.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background-color: var(--cpu-navy-soft);
  border-radius: var(--radius-md);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 33, 71, 0.08);
}

.program-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.header-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
}

.accreditation-pill {
  font-size: 0.725rem;
  color: var(--text-muted);
  font-weight: 600;
  text-align: right;
}

.card-body {
  padding: 0.5rem 1.75rem 1.5rem;
  flex: 1 1 auto;
}

.program-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.35;
}

.program-title a {
  color: var(--cpu-navy);
}

.program-title a:hover {
  color: var(--cpu-gold-hover);
}

.program-tagline {
  font-size: 0.925rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.program-features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.75rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.25rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.areas-preview {
  margin-bottom: 0.5rem;
}

.areas-label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--cpu-navy);
  margin-bottom: 0.5rem;
}

.areas-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.areas-list li {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.check-icon {
  color: #10b981;
  flex-shrink: 0;
}

.card-footer {
  padding: 1.25rem 1.75rem;
  background-color: #fafbfc;
  border-top: 1px solid var(--border-color);
}

.btn-full {
  width: 100%;
}
</style>

