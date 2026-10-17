<script setup>
defineProps({
  badge: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'center', // 'center' | 'left'
    validator: (v) => ['center', 'left'].includes(v)
  },
  variant: {
    type: String,
    default: 'light', // 'light' | 'dark'
    validator: (v) => ['light', 'dark'].includes(v)
  }
})
</script>

<template>
  <div :class="['section-heading', `align-${align}`, `variant-${variant}`]">
    <div v-if="badge" class="heading-badge">
      <span class="badge" :class="variant === 'dark' ? 'badge-gold' : 'badge-navy'">
        {{ badge }}
      </span>
    </div>
    <h2 class="heading-title">{{ title }}</h2>
    <p v-if="subtitle" class="heading-subtitle">{{ subtitle }}</p>
    <div class="heading-divider" :class="{ 'mx-auto': align === 'center' }"></div>
  </div>
</template>

<style scoped>
.section-heading {
  margin-bottom: 3rem;
}

.align-center {
  text-align: center;
}

.align-left {
  text-align: left;
}

.heading-badge {
  margin-bottom: 0.75rem;
}

.heading-title {
  margin-bottom: 0.85rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.variant-light .heading-title {
  color: var(--cpu-navy);
}

.variant-dark .heading-title {
  color: #ffffff;
}

.heading-subtitle {
  font-size: 1.1rem;
  max-width: 720px;
  line-height: 1.7;
}

.align-center .heading-subtitle {
  margin-left: auto;
  margin-right: auto;
}

.variant-light .heading-subtitle {
  color: var(--text-secondary);
}

.variant-dark .heading-subtitle {
  color: #cbd5e1;
}

.heading-divider {
  width: 60px;
  height: 4px;
  background: var(--cpu-gold);
  border-radius: var(--radius-pill);
  margin-top: 1.25rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .section-heading {
    margin-bottom: 2.25rem;
  }
  .heading-subtitle {
    font-size: 1rem;
  }
}
</style>

