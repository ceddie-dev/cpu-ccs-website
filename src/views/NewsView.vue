<script setup>
import { ref, computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import NewsCard from '@/components/NewsCard.vue'
import BaseModal from '@/components/BaseModal.vue'
import { newsData } from '@/data/news'

const breadcrumbs = [
  { label: 'News & Events' }
]

const selectedCategory = ref('All')
const searchQuery = ref('')
const selectedArticle = ref(null)
const isModalOpen = ref(false)

const categories = ['All', 'Events', 'Achievements', 'Community', 'Announcements']

const filteredNews = computed(() => {
  return newsData.filter(item => {
    const matchesCat = selectedCategory.value === 'All' || item.category === selectedCategory.value
    const q = searchQuery.value.trim().toLowerCase()
    const matchesSearch = !q || (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    )
    return matchesCat && matchesSearch
  })
})

const openArticleModal = (article) => {
  selectedArticle.value = article
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedArticle.value = null
}
</script>

<template>
  <div class="news-page">
    <AppBreadcrumb :items="breadcrumbs" />

    <!-- Hero Header -->
    <section class="news-hero bg-navy">
      <div class="container hero-inner">
        <div class="hero-text-block">
          <div class="hero-badges">
            <span class="badge badge-gold">Centralian Computing News</span>
            <span class="badge badge-navy hero-badge-glass">Updated Regularly</span>
          </div>
          <h1 class="hero-page-title">News, Events & Announcements</h1>
          <p class="hero-lead">
            Stay informed with the latest milestones, competitive hackathon victories, academic advisories, and student community projects across the College of Computer Studies.
          </p>
        </div>

        <div class="hero-alert-card">
          <div class="alert-icon-box">
            <AppIcon name="award" :size="24" class="gold-text" />
          </div>
          <div>
            <span class="alert-label">Featured Milestone</span>
            <strong>Team SEntralians BricolAI Victory</strong>
            <p>1st Place in International AI Hackathon & Philippine Blockchain Week</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters & Search Toolbar -->
    <section class="news-filter-section bg-white">
      <div class="container">
        <div class="news-toolbar">
          <div class="category-pills">
            <button
              v-for="cat in categories"
              :key="cat"
              class="cat-pill-btn"
              :class="{ 'cat-pill-active': selectedCategory === cat }"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>

          <div class="news-search-box">
            <AppIcon name="search" :size="16" class="search-icon" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search news, events, tags..."
              class="search-field"
              aria-label="Search news"
            />
            <button
              v-if="searchQuery"
              class="clear-btn"
              @click="searchQuery = ''"
              aria-label="Clear search"
            >
              <AppIcon name="x" :size="14" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <div class="news-count-row">
          <p>
            Showing <strong>{{ filteredNews.length }}</strong> article{{ filteredNews.length === 1 ? '' : 's' }}
          </p>
        </div>

        <div v-if="filteredNews.length" class="grid-3 news-grid">
          <NewsCard
            v-for="article in filteredNews"
            :key="article.id"
            :article="article"
            @view="openArticleModal"
          />
        </div>

        <div v-else class="no-news-box card">
          <AppIcon name="newspaper" :size="48" class="no-icon" />
          <h3>No Articles Match Your Search</h3>
          <p>Try searching for a different keyword or resetting your category filter.</p>
          <button class="btn btn-navy" @click="selectedCategory = 'All'; searchQuery = ''">
            <span>Show All News</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Academic Demonstration Notice -->
    <section class="section-padding-sm bg-white demo-disclaimer-section">
      <div class="container container-narrow">
        <div class="disclaimer-card">
          <AppIcon name="info" :size="24" class="info-icon" />
          <div>
            <h4>Journalistic & Institutional Integrity Notice</h4>
            <p>
              News records featured here document genuine events, hackathons, and outreach led by Central Philippine University students and student organizations (including the Computer Science Society and MIDAS). Program schedules and advisories are presented for academic demonstration as part of CCS 3031.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Detail Modal -->
    <BaseModal
      :is-open="isModalOpen"
      :title="selectedArticle?.title || ''"
      :badge="selectedArticle?.category || ''"
      @close="closeModal"
    >
      <div v-if="selectedArticle" class="modal-article-body">
        <div class="article-meta-header">
          <div class="meta-item">
            <AppIcon name="clock" :size="14" />
            <span>{{ selectedArticle.date }}</span>
          </div>
          <div class="meta-divider">•</div>
          <div class="meta-item">
            <AppIcon name="user" :size="14" />
            <span>{{ selectedArticle.author }}</span>
          </div>
          <div class="meta-divider">•</div>
          <div class="meta-item">
            <span>{{ selectedArticle.readTime }}</span>
          </div>
        </div>

        <div class="article-html-content" v-html="selectedArticle.content"></div>

        <div class="article-tags-wrap">
          <span class="tags-title">Related Tags:</span>
          <div class="tags-list">
            <span v-for="tag in selectedArticle.tags" :key="tag" class="tag-pill">
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <template #footer>
        <button class="btn btn-navy" @click="closeModal">Close Article</button>
      </template>
    </BaseModal>
  </div>
</template>

<style scoped>
.news-hero {
  padding: 4.5rem 0;
  position: relative;
  overflow: hidden;
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.hero-text-block {
  max-width: 680px;
}

.hero-badges {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.hero-badge-glass {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.25);
}

.hero-page-title {
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-lead {
  color: #cbd5e1;
  font-size: 1.15rem;
  line-height: 1.65;
}

.hero-alert-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(245, 184, 0, 0.35);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  max-width: 380px;
}

.alert-icon-box {
  width: 44px;
  height: 44px;
  background: rgba(245, 184, 0, 0.15);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.gold-text {
  color: var(--cpu-gold);
}

.alert-label {
  display: block;
  font-size: 0.75rem;
  color: var(--cpu-gold);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

.hero-alert-card strong {
  display: block;
  color: #ffffff;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.hero-alert-card p {
  font-size: 0.8rem;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.4;
}

/* Toolbar */
.news-filter-section {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-xs);
}

.news-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.category-pills {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 2px;
}

.cat-pill-btn {
  padding: 0.45rem 1.1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  background-color: var(--bg-subtle);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.cat-pill-btn:hover {
  background-color: var(--cpu-navy-soft);
  color: var(--cpu-navy);
}

.cat-pill-active {
  background-color: var(--cpu-navy);
  color: #ffffff;
  border-color: var(--cpu-navy);
}

.cat-pill-active:hover {
  background-color: var(--cpu-navy-light);
  color: #ffffff;
}

.news-search-box {
  position: relative;
  min-width: 280px;
}

.search-icon {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.search-field {
  width: 100%;
  padding: 0.6rem 2.25rem 0.6rem 2.4rem;
  font-size: 0.875rem;
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius-pill);
  outline: none;
  font-family: inherit;
  transition: all var(--transition-fast);
}

.search-field:focus {
  border-color: var(--cpu-navy);
  box-shadow: 0 0 0 3px rgba(0, 33, 71, 0.1);
}

.clear-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.news-count-row {
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.no-news-box {
  padding: 4rem 2rem;
  text-align: center;
  max-width: 500px;
  margin: 2rem auto;
}

.no-icon {
  color: var(--text-muted);
  margin: 0 auto 1rem;
}

.no-news-box h3 {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.no-news-box p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

/* Disclaimer */
.disclaimer-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background-color: var(--cpu-navy-soft);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--cpu-navy);
}

.info-icon {
  color: var(--cpu-navy);
  flex-shrink: 0;
  margin-top: 2px;
}

.disclaimer-card h4 {
  font-size: 1rem;
  color: var(--cpu-navy);
  margin-bottom: 0.35rem;
}

.disclaimer-card p {
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

/* Modal Article Body */
.article-meta-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.meta-divider {
  color: #cbd5e1;
}

.article-html-content {
  line-height: 1.75;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.article-tags-wrap {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tags-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--cpu-navy);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag-pill {
  font-size: 0.775rem;
  background-color: var(--bg-subtle);
  color: var(--cpu-navy);
  padding: 3px 10px;
  border-radius: var(--radius-xs);
  font-weight: 500;
}
</style>
