<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  items: {
    type: Array,
    required: true,
    // items: [ { label: 'Home', to: '/' }, { label: 'Programs', to: '/about' }, { label: 'BSIT' } ]
  }
})
</script>

<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <div class="container">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item">
          <RouterLink to="/" class="breadcrumb-link home-link">
            <AppIcon name="home" :size="14" />
            <span>Home</span>
          </RouterLink>
        </li>

        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
          <AppIcon name="chevron-right" :size="12" class="breadcrumb-separator" />
          <RouterLink v-if="item.to" :to="item.to" class="breadcrumb-link">
            {{ item.label }}
          </RouterLink>
          <span v-else class="breadcrumb-current" aria-current="page">
            {{ item.label }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped>
.breadcrumb-nav {
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  padding: 0.85rem 0;
  font-size: 0.875rem;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.breadcrumb-link {
  color: var(--text-muted);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color var(--transition-fast);
}

.breadcrumb-link:hover {
  color: var(--cpu-navy);
}

.home-link {
  color: var(--cpu-navy);
}

.breadcrumb-separator {
  color: #94a3b8;
}

.breadcrumb-current {
  color: var(--cpu-navy);
  font-weight: 600;
}
</style>
