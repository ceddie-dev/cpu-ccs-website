<script setup>
import { ref, computed } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import FacultyCard from '@/components/FacultyCard.vue'
import BaseModal from '@/components/BaseModal.vue'
import CurriculumViewer from '@/components/CurriculumViewer.vue'
import { programsData } from '@/data/programs'
import { facultyData } from '@/data/faculty'
import { curriculaData } from '@/data/curricula'

const program = programsData.bscs
const curriculum = curriculaData.bscs
const isBrochureModalOpen = ref(false)

const breadcrumbs = [
  { label: 'Academic Programs', to: '/about' },
  { label: 'BS Computer Science' }
]

// Filter verified faculty assigned to BSCS
const associatedFaculty = computed(() => {
  return facultyData.filter(f => program.associatedFacultyIds.includes(f.id))
})
</script>

<template>
  <div class="program-page bscs-page">
    <AppBreadcrumb :items="breadcrumbs" />

    <!-- Program Hero Banner -->
    <section class="program-hero bg-navy">
      <div class="container hero-container">
        <div class="hero-left">
          <div class="hero-meta-top">
            <span class="badge badge-gold">{{ program.accreditation }}</span>
            <span class="badge badge-navy badge-glass">CHED CMO 25 s.2015</span>
          </div>

          <h1 class="program-name">{{ program.title }}</h1>
          <p class="program-tagline">{{ program.tagline }}</p>

          <div class="program-quick-facts">
            <div class="fact-item">
              <AppIcon name="clock" :size="18" class="gold-icon" />
              <div>
                <small>Duration</small>
                <strong>{{ program.duration }}</strong>
              </div>
            </div>
            <div class="fact-item">
              <AppIcon name="academic" :size="18" class="gold-icon" />
              <div>
                <small>Degree Level</small>
                <strong>{{ program.degreeType }}</strong>
              </div>
            </div>
            <div class="fact-item">
              <AppIcon name="code" :size="18" class="gold-icon" />
              <div>
                <small>Student Society</small>
                <strong>{{ program.studentOrg.name }} ({{ program.studentOrg.abbr }})</strong>
              </div>
            </div>
          </div>

          <div class="hero-cta-group">
            <button class="btn btn-primary btn-lg" @click="isBrochureModalOpen = true">
              <AppIcon name="academic" :size="18" />
              <span>Download Curriculum Guide</span>
            </button>
            <RouterLink to="/contact" class="btn btn-outline-white btn-lg">
              <span>Inquire with Program Coordinator</span>
            </RouterLink>
          </div>
        </div>

        <div class="hero-right">
          <div class="program-insignia-card">
            <img
              :src="program.icon"
              :alt="`${program.code} Insignia`"
              class="program-insignia-img"
              width="150"
              height="150"
            />
            <h2 class="insignia-code">{{ program.code }}</h2>
            <p class="insignia-dept">Department of Computer Science</p>
            <div class="dept-head-badge">
              <span>Program Coordinator:</span>
              <strong>Prof. Marjee Rose B. Parreño, MSCS, MBA</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Overview & Mission Alignment -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid-2 overview-grid">
          <div class="overview-left">
            <SectionHeading
              badge="Program Overview"
              title="Theoretical Mastery Meets Algorithmic Innovation"
              subtitle="Developing computational thinkers capable of solving complex mathematical and software engineering challenges."
              align="left"
            />
            <p class="lead-paragraph">{{ program.overview }}</p>
            <p class="mission-text">{{ program.missionAlignment }}</p>

            <div class="accreditation-callout">
              <AppIcon name="award" :size="24" class="callout-icon" />
              <div>
                <h4>PACUCOA Level III Re-Accredited Computing Degree</h4>
                <p>
                  Affirming rigorous computational rigor, competitive programming excellence, internationally recognized faculty research, and strong algorithmic foundations.
                </p>
              </div>
            </div>
          </div>

          <!-- Educational Objectives & Outcomes -->
          <div class="overview-right">
            <div class="objectives-card card">
              <h3 class="card-section-title">
                <AppIcon name="check-circle" :size="20" class="gold-icon" />
                <span>Program Educational Objectives</span>
              </h3>
              <ul class="styled-list">
                <li v-for="(obj, i) in program.objectives" :key="i">
                  <span class="list-bullet">{{ i + 1 }}</span>
                  <p>{{ obj }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Areas of Specialization -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <SectionHeading
          badge="Specialized Domains"
          title="Areas of Study & Computational Focus"
          subtitle="BSCS students delve into algorithmic complexity, intelligent agents, formal systems, and high-performance computing."
          align="center"
        />

        <div class="grid-4">
          <div
            v-for="(area, index) in program.areasOfStudy"
            :key="index"
            class="area-card card"
          >
            <div class="area-number">0{{ index + 1 }}</div>
            <h3 class="area-title">{{ area.title }}</h3>
            <p class="area-desc">{{ area.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Official Academic Curriculum (Checklist 2024-2025) -->
    <section class="section-padding bg-white" id="curriculum">
      <div class="container">
        <SectionHeading
          badge="AY 2024–2025 Official Curriculum"
          title="Curriculum Checklist & Course Matrix"
          subtitle="Complete course listing extracted directly from the CPU CCS 2024–2025 Academic Checklist signed by the Department Head and Dean (164 Total Academic Units)."
          align="center"
        />

        <CurriculumViewer :curriculum="curriculum" />
      </div>
    </section>

    <!-- Career Opportunities -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <SectionHeading
          badge="Career Pathways"
          title="Career Opportunities & Research Roles"
          subtitle="Our graduates pioneer algorithmic software systems, AI pipelines, data analytics, and cutting-edge software engineering."
          align="center"
        />

        <div class="grid-3">
          <div
            v-for="(career, cIdx) in program.careerOpportunities"
            :key="cIdx"
            class="career-card card"
          >
            <div class="career-field-badge">
              <AppIcon name="award" :size="14" />
              <span>{{ career.field }}</span>
            </div>
            <h3 class="career-title">{{ career.title }}</h3>
            <p class="career-desc">{{ career.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Verified Associated Faculty -->
    <section class="section-padding bg-white">
      <div class="container">
        <SectionHeading
          badge="Research Faculty"
          title="Verified Faculty & CS Mentors"
          subtitle="Guided by senior researchers and doctoral scholars in computer science, machine learning, and discrete mathematics."
          align="center"
        />

        <div class="grid-3">
          <FacultyCard
            v-for="faculty in associatedFaculty"
            :key="faculty.id"
            :faculty="faculty"
          />
        </div>
      </div>
    </section>

    <!-- Student Org Feature -->
    <section class="section-padding-sm bg-navy org-feature-section">
      <div class="container org-feature-container">
        <div class="org-feature-content">
          <span class="badge badge-gold">Competitive Coding</span>
          <h2>Join the {{ program.studentOrg.name }}</h2>
          <p>{{ program.studentOrg.description }}</p>
        </div>
        <div class="org-feature-action">
          <RouterLink to="/news" class="btn btn-primary btn-lg">
            <span>Read About SEntralians' Victory</span>
            <AppIcon name="arrow-right" :size="18" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Prospectus Modal -->
    <BaseModal
      :is-open="isBrochureModalOpen"
      title="BSCS Curriculum Prospectus Guide"
      badge="Academic Resources"
      @close="isBrochureModalOpen = false"
    >
      <div class="brochure-modal-content">
        <div class="brochure-info-box">
          <AppIcon name="award" :size="24" class="gold-icon" />
          <div>
            <strong>Bachelor of Science in Computer Science (BSCS)</strong>
            <p>PACUCOA Level III Re-Accredited • CHED CMO 25 Series of 2015</p>
          </div>
        </div>

        <h4>Prospectus Summary</h4>
        <p>
          This official curriculum guide outlines mathematical foundations, algorithmic study sequences, compiler theory, and original undergraduate thesis requirements (164 academic units).
        </p>

        <div class="prospectus-specifications">
          <div class="spec-row">
            <span>Total Units:</span>
            <strong>164 Academic Units</strong>
          </div>
          <div class="spec-row">
            <span>Curriculum Revision:</span>
            <strong>Revision No. 12 (CHED CMO 25 s.2015)</strong>
          </div>
          <div class="spec-row">
            <span>Thesis Requirement:</span>
            <strong>2-Semester Original Research Thesis</strong>
          </div>
          <div class="spec-row">
            <span>Industry Practicum:</span>
            <strong>500+ Hours in Software Engineering</strong>
          </div>
          <div class="spec-row">
            <span>Department Head:</span>
            <strong>Prof. Marjee Rose B. Parreño, MSCS, MBA</strong>
          </div>
        </div>

        <p class="demo-notice">
          <em>Note: This is a demonstration preview prepared for the Web Systems and Technologies academic final examination. Official printed prospectuses can be secured directly from the CCS Dean's Office.</em>
        </p>
      </div>

      <template #footer>
        <button class="btn btn-navy" @click="isBrochureModalOpen = false">Close Preview</button>
      </template>
    </BaseModal>
  </div>
</template>

<style scoped>
/* Reusing shared styles from BSIT with CS specific touches */
.program-hero {
  padding: 4.5rem 0;
  position: relative;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.35fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-meta-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.badge-glass {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.25);
}

.program-name {
  color: #ffffff;
  font-size: clamp(2rem, 3.8vw, 2.85rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.program-tagline {
  color: #cbd5e1;
  font-size: 1.15rem;
  line-height: 1.65;
  margin-bottom: 2rem;
}

.program-quick-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.25rem;
  background: rgba(255, 255, 255, 0.06);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.fact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.gold-icon {
  color: var(--cpu-gold);
}

.fact-item small {
  display: block;
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  font-weight: 600;
}

.fact-item strong {
  color: #ffffff;
  font-size: 0.95rem;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.program-insignia-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-xl);
  padding: 2.5rem 2rem;
  text-align: center;
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-xl);
}

.program-insignia-img {
  object-fit: contain;
  margin: 0 auto 1.25rem;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.3));
}

.insignia-code {
  color: var(--cpu-gold);
  font-size: 2rem;
  margin-bottom: 0.25rem;
}

.insignia-dept {
  color: #cbd5e1;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.dept-head-badge {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.75rem;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--cpu-gold);
  text-align: left;
}

.dept-head-badge span {
  display: block;
  font-size: 0.75rem;
  color: var(--cpu-gold);
  text-transform: uppercase;
  font-weight: 700;
}

.dept-head-badge strong {
  color: #ffffff;
  font-size: 0.875rem;
}

.lead-paragraph {
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.mission-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.accreditation-callout {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background-color: var(--cpu-navy-soft);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--cpu-navy);
}

.callout-icon {
  color: var(--cpu-navy);
  margin-top: 2px;
  flex-shrink: 0;
}

.accreditation-callout h4 {
  font-size: 1rem;
  color: var(--cpu-navy);
  margin-bottom: 0.25rem;
}

.accreditation-callout p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.objectives-card {
  padding: 2.25rem 2rem;
  background-color: #fafbfc;
  border-top: 4px solid var(--cpu-navy);
}

.card-section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  color: var(--cpu-navy);
  margin-bottom: 1.5rem;
}

.styled-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.styled-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.list-bullet {
  width: 26px;
  height: 26px;
  background-color: var(--cpu-navy);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.styled-list p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.area-card {
  padding: 2rem 1.75rem;
  position: relative;
  border-top: 4px solid var(--cpu-navy);
}

.area-number {
  font-family: 'Outfit', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: rgba(0, 33, 71, 0.15);
  margin-bottom: 0.75rem;
}

.area-title {
  font-size: 1.15rem;
  color: var(--cpu-navy);
  margin-bottom: 0.75rem;
  line-height: 1.35;
}

.area-desc {
  font-size: 0.9rem;
  line-height: 1.6;
}

.curriculum-container {
  max-width: 960px;
  margin: 0 auto;
}

.curriculum-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.year-tab-btn {
  padding: 1.25rem 1rem;
  background: var(--bg-surface);
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius-md);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: all var(--transition-fast);
}

.year-tab-btn:hover {
  border-color: var(--cpu-navy);
}

.tab-active {
  background: var(--cpu-navy);
  border-color: var(--cpu-navy);
  box-shadow: var(--shadow-md);
}

.tab-year {
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cpu-navy);
}

.tab-active .tab-year {
  color: var(--cpu-gold);
}

.tab-focus {
  font-size: 0.775rem;
  color: var(--text-muted);
  line-height: 1.35;
}

.tab-active .tab-focus {
  color: #cbd5e1;
}

.curriculum-panel {
  padding: 2.5rem;
  border-left: 5px solid var(--cpu-gold);
}

.panel-header {
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-color);
}

.panel-title {
  font-size: 1.5rem;
  margin-top: 0.35rem;
  color: var(--cpu-navy);
}

.panel-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.course-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  background-color: var(--bg-subtle);
  border-radius: var(--radius-sm);
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--text-primary);
}

.course-icon {
  color: var(--cpu-navy);
  flex-shrink: 0;
}

.career-card {
  padding: 2rem 1.75rem;
  border-left: 4px solid var(--cpu-navy);
}

.career-field-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #7c3aed;
  background: #f3e8ff;
  padding: 2px 8px;
  border-radius: var(--radius-xs);
  margin-bottom: 0.75rem;
}

.career-title {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: var(--cpu-navy);
}

.career-desc {
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
}

.org-feature-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.org-feature-content h2 {
  color: #ffffff;
  font-size: 1.85rem;
  margin: 0.5rem 0 0.25rem;
}

.org-feature-content p {
  color: #cbd5e1;
  font-size: 1.05rem;
  margin: 0;
}

.brochure-info-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--cpu-navy-soft);
  border-radius: var(--radius-sm);
  margin-bottom: 1.25rem;
}

.brochure-info-box strong {
  display: block;
  color: var(--cpu-navy);
  font-size: 0.95rem;
}

.brochure-info-box p {
  margin: 0;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.prospectus-specifications {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--bg-subtle);
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin: 1rem 0;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.spec-row span {
  color: var(--text-muted);
}

.spec-row strong {
  color: var(--cpu-navy);
}

.demo-notice {
  font-size: 0.825rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
  }
  .overview-grid {
    grid-template-columns: 1fr;
  }
  .curriculum-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
