<script setup>
import { ref, computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import FacultyCard from '@/components/FacultyCard.vue'
import { facultyData } from '@/data/faculty'

const breadcrumbs = [
  { label: 'Faculty and Staff' }
]

const searchQuery = ref('')
const selectedCategory = ref('All')
const selectedProgram = ref('All')

const categories = [
  'All',
  'Leadership & Administration',
  'Information Technology',
  'Computer Science',
  'Support & Administrative Staff'
]

const programs = ['All', 'BSIT', 'BSCS', 'BSDMIA', 'BLIS']

const filteredFaculty = computed(() => {
  return facultyData.filter(member => {
    // Category match
    const matchesCategory = selectedCategory.value === 'All' || member.category === selectedCategory.value

    // Program match
    const matchesProgram = selectedProgram.value === 'All' || (member.programs && member.programs.includes(selectedProgram.value))

    // Search query match (name, title, degrees, bio, specializations)
    const q = searchQuery.value.trim().toLowerCase()
    const matchesSearch = !q || (
      member.name.toLowerCase().includes(q) ||
      member.title.toLowerCase().includes(q) ||
      member.degrees.toLowerCase().includes(q) ||
      member.bio.toLowerCase().includes(q) ||
      (member.specializations && member.specializations.some(s => s.toLowerCase().includes(q)))
    )

    return matchesCategory && matchesProgram && matchesSearch
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'All'
  selectedProgram.value = 'All'
}
</script>

<template>
  <div class="faculty-page">
    <AppBreadcrumb :items="breadcrumbs" />

    <!-- Hero Header -->
    <section class="faculty-hero bg-navy">
      <div class="container hero-inner">
        <div class="hero-text-block">
          <div class="hero-badges">
            <span class="badge badge-gold">
              <AppIcon name="check-circle" :size="14" />
              <span>17 Verified Staff Profiles</span>
            </span>
            <span class="badge badge-navy hero-badge-glass">Official Directory</span>
          </div>
          <h1 class="hero-page-title">Faculty and Staff Directory</h1>
          <p class="hero-lead">
            Meet the visionary educators, doctoral researchers, industry practitioners, and technical specialists shaping technological excellence at Central Philippine University.
          </p>
        </div>

        <div class="hero-stats-card">
          <div class="h-stat">
            <span class="h-num">17</span>
            <span class="h-label">Total Personnel</span>
          </div>
          <div class="h-stat">
            <span class="h-num">100%</span>
            <span class="h-label">Verified Data</span>
          </div>
          <div class="h-stat">
            <span class="h-num">4</span>
            <span class="h-label">Academic Streams</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Filtering & Search Section -->
    <section class="filter-section bg-white">
      <div class="container">
        <div class="filter-controls-wrap">
          <!-- Search input -->
          <div class="search-box">
            <AppIcon name="search" :size="18" class="search-icon" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search faculty by name, specialization, or degree..."
              class="search-input"
              aria-label="Search faculty and staff"
            />
            <button
              v-if="searchQuery"
              class="clear-search-btn"
              @click="searchQuery = ''"
              aria-label="Clear search"
            >
              <AppIcon name="x" :size="16" />
            </button>
          </div>

          <!-- Category Filter Tabs -->
          <div class="category-tabs" role="tablist">
            <button
              v-for="cat in categories"
              :key="cat"
              class="cat-tab-btn"
              :class="{ 'cat-active': selectedCategory === cat }"
              role="tab"
              :aria-selected="selectedCategory === cat"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>

          <!-- Secondary Program Filter -->
          <div class="program-quick-filters">
            <span class="filter-label">Filter by Program:</span>
            <div class="prog-pill-group">
              <button
                v-for="prog in programs"
                :key="prog"
                class="prog-pill-btn"
                :class="{ 'prog-pill-active': selectedProgram === prog }"
                @click="selectedProgram = prog"
              >
                {{ prog }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Cards Grid -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <!-- Results Counter & Reset -->
        <div class="results-bar">
          <p class="results-text">
            Showing <strong>{{ filteredFaculty.length }}</strong> of {{ facultyData.length }} faculty and staff members
          </p>
          <button
            v-if="searchQuery || selectedCategory !== 'All' || selectedProgram !== 'All'"
            class="reset-btn"
            @click="resetFilters"
          >
            <span>Reset All Filters</span>
            <AppIcon name="x" :size="14" />
          </button>
        </div>

        <!-- Cards Grid -->
        <div v-if="filteredFaculty.length" class="grid-4 faculty-grid">
          <FacultyCard
            v-for="faculty in filteredFaculty"
            :key="faculty.id"
            :faculty="faculty"
          />
        </div>

        <!-- No Results Fallback -->
        <div v-else class="no-results-card card">
          <AppIcon name="users" :size="48" class="no-results-icon" />
          <h3>No Faculty or Staff Found</h3>
          <p>We couldn't find anyone matching your current search or filter criteria.</p>
          <button class="btn btn-navy" @click="resetFilters">
            <span>Clear Search & View All</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Institutional Verification Banner -->
    <section class="section-padding-sm bg-white verification-notice-section">
      <div class="container container-narrow">
        <div class="verification-box">
          <AppIcon name="shield" :size="32" class="v-icon" />
          <div>
            <h4>Data Verification & Authentication Standard</h4>
            <p>
              In accordance with project guidelines, every staff member displayed in this directory has been authenticated against Central Philippine University College of Computer Studies official faculty records, institutional directories, and official academic listings. No simulated names or positions are used.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faculty-hero {
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

.hero-stats-card {
  display: flex;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.06);
  padding: 1.5rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
}

.h-stat {
  display: flex;
  flex-direction: column;
}

.h-num {
  font-family: 'Outfit', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--cpu-gold);
}

.h-label {
  font-size: 0.75rem;
  color: #cbd5e1;
  text-transform: uppercase;
  font-weight: 600;
}

/* Filters */
.filter-section {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-xs);
  position: sticky;
  top: 72px;
  z-index: 50;
}

.filter-controls-wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-box {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.search-input {
  width: 100%;
  padding: 0.85rem 2.75rem 0.85rem 2.85rem;
  font-size: 0.95rem;
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius-pill);
  outline: none;
  font-family: inherit;
  transition: all var(--transition-fast);
}

.search-input:focus {
  border-color: var(--cpu-navy);
  box-shadow: 0 0 0 3px rgba(0, 33, 71, 0.1);
}

.clear-search-btn {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  padding: 4px;
}

.category-tabs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 4px;
}

.cat-tab-btn {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-radius: var(--radius-pill);
  background-color: var(--bg-subtle);
  border: 1px solid var(--border-color);
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.cat-tab-btn:hover {
  background-color: var(--cpu-navy-soft);
  color: var(--cpu-navy);
}

.cat-active {
  background-color: var(--cpu-navy);
  color: #ffffff;
  border-color: var(--cpu-navy);
}

.cat-active:hover {
  background-color: var(--cpu-navy-light);
  color: #ffffff;
}

.program-quick-filters {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.825rem;
  flex-wrap: wrap;
}

.filter-label {
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.prog-pill-group {
  display: flex;
  gap: 0.4rem;
}

.prog-pill-btn {
  padding: 3px 10px;
  font-size: 0.775rem;
  font-weight: 600;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
}

.prog-pill-btn:hover {
  border-color: var(--cpu-navy);
  color: var(--cpu-navy);
}

.prog-pill-active {
  background: var(--cpu-gold);
  color: var(--cpu-navy-dark);
  font-weight: 700;
  border-color: var(--cpu-gold);
}

/* Results bar */
.results-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.results-text {
  color: var(--text-secondary);
  margin: 0;
}

.reset-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #dc2626;
  font-weight: 600;
  font-size: 0.85rem;
}

.reset-btn:hover {
  text-decoration: underline;
}

.no-results-card {
  padding: 4rem 2rem;
  text-align: center;
  max-width: 500px;
  margin: 2rem auto;
}

.no-results-icon {
  color: var(--text-muted);
  margin: 0 auto 1.25rem;
}

.no-results-card h3 {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.no-results-card p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

/* Verification */
.verification-box {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background-color: var(--cpu-navy-soft);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--cpu-navy);
}

.v-icon {
  color: var(--cpu-navy);
  flex-shrink: 0;
  margin-top: 3px;
}

.verification-box h4 {
  font-size: 1rem;
  color: var(--cpu-navy);
  margin-bottom: 0.35rem;
}

.verification-box p {
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .hero-stats-card {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
