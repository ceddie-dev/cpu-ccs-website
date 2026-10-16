<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  article: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['view'])
</script>

<template>
  <div class="news-card card">
    <div class="news-header">
      <div class="header-badges">
        <span class="badge" :class="article.badgeClass || 'badge-navy'">
          {{ article.category }}
        </span>
        <span class="read-time">{{ article.readTime }}</span>
      </div>
      <div class="date-row">
        <AppIcon name="clock" :size="13" />
        <span>{{ article.date }}</span>
      </div>
    </div>

    <div class="news-body">
      <h3 class="news-title" @click="emit('view', article)">
        {{ article.title }}
      </h3>
      <p class="news-summary">{{ article.summary }}</p>

      <div v-if="article.tags && article.tags.length" class="news-tags">
        <span v-for="tag in article.tags.slice(0, 3)" :key="tag" class="tag-pill">
          #{{ tag }}
        </span>
      </div>
    </div>

    <div class="news-footer">
      <button class="read-btn" @click="emit('view', article)" aria-label="Read article details">
        <span>Read Article</span>
        <AppIcon name="arrow-right" :size="15" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-header {
  padding: 1.5rem 1.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border-light);
}

.header-badges {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.read-time {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.date-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.news-body {
  padding: 1.25rem 1.5rem;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.news-title {
  font-size: 1.15rem;
  line-height: 1.4;
  color: var(--cpu-navy);
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.news-title:hover {
  color: var(--cpu-gold-hover);
}

.news-summary {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}

.tag-pill {
  font-size: 0.725rem;
  color: var(--text-muted);
  background-color: var(--bg-subtle);
  padding: 2px 8px;
  border-radius: var(--radius-xs);
  font-weight: 500;
}

.news-footer {
  padding: 1rem 1.5rem;
  background-color: #fafbfc;
  border-top: 1px solid var(--border-color);
}

.read-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--cpu-navy);
  transition: all var(--transition-fast);
}

.read-btn:hover {
  color: var(--cpu-gold-hover);
  transform: translateX(3px);
}
</style>
