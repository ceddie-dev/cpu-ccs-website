<script setup>
import { ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ProgramCard from '@/components/ProgramCard.vue'
import NewsCard from '@/components/NewsCard.vue'
import BaseModal from '@/components/BaseModal.vue'
import { programsData } from '@/data/programs'
import { newsData } from '@/data/news'
import { facultyData } from '@/data/faculty'

const programsList = Object.values(programsData)
const latestNews = newsData.slice(0, 3)

const dean = facultyData.find(f => f.id === 'quijano-ma-christina')

// Article Modal state
const selectedArticle = ref(null)
const isModalOpen = ref(false)

const handleViewArticle = (article) => {
  selectedArticle.value = article
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedArticle.value = null
}
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg-overlay"></div>
      <div class="container hero-container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badges">
              <span class="badge badge-gold">
                <AppIcon name="award" :size="14" />
                <span>PACUCOA Level III Accredited</span>
              </span>
              <span class="badge badge-navy hero-badge-white">
                <span>Scientia et Fides</span>
              </span>
            </div>

            <h1 class="hero-title">
              Empowering the Next Generation of <span class="highlight-gold">Tech Leaders</span> and Digital Innovators
            </h1>

            <p class="hero-description">
              Welcome to the <strong>Central Philippine University College of Computer Studies</strong>. Rooted in Exemplary Christian Education for Life (EXCEL), we deliver premier programs in Information Technology, Computer Science, Digital Media, and Library Science.
            </p>

            <div class="hero-actions">
              <a href="#academic-programs" class="btn btn-primary btn-lg">
                <span>Explore Programs</span>
                <AppIcon name="arrow-right" :size="18" />
              </a>
              <RouterLink to="/about" class="btn btn-outline-white btn-lg">
                <span>About the College</span>
              </RouterLink>
            </div>

            <!-- Stats Bar -->
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">4</span>
                <span class="stat-label">Degree Programs</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">Level III</span>
                <span class="stat-label">PACUCOA Status</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">17</span>
                <span class="stat-label">Faculty & Staff</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">100%</span>
                <span class="stat-label">OBE Curriculum</span>
              </div>
            </div>
          </div>

          <!-- Hero Graphics / Visual Card -->
          <div class="hero-visual">
            <div class="visual-card">
              <div class="card-glow"></div>
              <div class="logos-cluster">
                <img
                  src="/assets/logos/cpu-logo.png"
                  alt="CPU Official Crest"
                  class="cluster-logo cpu"
                  width="110"
                  height="110"
                />
                <div class="cluster-symbol">+</div>
                <img
                  src="/assets/logos/ccs-logo.png"
                  alt="CCS Official Seal"
                  class="cluster-logo ccs"
                  width="110"
                  height="110"
                />
              </div>

              <div class="visual-quote">
                <p class="quote-text">
                  "A College of the future with a mission to educate students with Christian principles and practices of computer studies..."
                </p>
                <span class="quote-author">— CCS Vision Statement</span>
              </div>

              <div class="visual-tags">
                <span class="v-tag">
                  <AppIcon name="check-circle" :size="14" />
                  <span>Hands-on Labs</span>
                </span>
                <span class="v-tag">
                  <AppIcon name="check-circle" :size="14" />
                  <span>500+ Hr Internships</span>
                </span>
                <span class="v-tag">
                  <AppIcon name="check-circle" :size="14" />
                  <span>Industry Capstones</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dean's Welcome Section -->
    <section class="section-padding bg-white deans-welcome-section">
      <div class="container">
        <div class="dean-grid">
          <div class="dean-image-col">
            <div class="dean-image-frame">
              <img
                :src="dean.image"
                :alt="dean.name"
                class="dean-portrait"
              />
              <div class="dean-badge-overlay">
                <span class="overlay-title">{{ dean.title }}</span>
                <span class="overlay-degrees">{{ dean.degrees }}</span>
              </div>
            </div>
          </div>

          <div class="dean-text-col">
            <span class="badge badge-navy">Leadership & Vision</span>
            <h2 class="dean-headline">Welcome from the Dean</h2>
            <h3 class="dean-sub">{{ dean.name }}</h3>

            <p class="lead-text">
              "At Central Philippine University College of Computer Studies, we combine rigorous technical discipline with moral integrity. Our students do not merely learn how to write code or configure hardware—they learn how to think critically, innovate with empathy, and serve communities with exemplary Christian stewardship."
            </p>

            <p class="dean-body">
              Through our outcomes-based curricula compliant with CHED standards and accredited by PACUCOA, students are immersed in state-of-the-art computer laboratories, industry-partnered capstones, and hackathons that prepare them for successful careers worldwide.
            </p>

            <div class="dean-highlights">
              <div class="d-highlight">
                <AppIcon name="award" :size="20" class="gold-text" />
                <div>
                  <strong>Exemplary Christian Education</strong>
                  <p>Integrating Christian values with ethical technological leadership.</p>
                </div>
              </div>
              <div class="d-highlight">
                <AppIcon name="monitor" :size="20" class="gold-text" />
                <div>
                  <strong>Modern Computing Infrastructure</strong>
                  <p>Dedicated Apple Mac, Cisco networking, and VR simulation laboratories.</p>
                </div>
              </div>
            </div>

            <div class="dean-cta">
              <RouterLink to="/faculty" class="btn btn-navy">
                <span>Meet Our Faculty & Staff</span>
                <AppIcon name="arrow-right" :size="16" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Academic Programs Section -->
    <section id="academic-programs" class="section-padding bg-subtle">
      <div class="container">
        <SectionHeading
          badge="Academic Offerings"
          title="Four Comprehensive Computing Degrees"
          subtitle="Discover our PACUCOA-accredited curricula designed to build technical mastery, artistic ingenuity, and research excellence."
          align="center"
        />

        <div class="grid-4 programs-grid">
          <ProgramCard
            v-for="prog in programsList"
            :key="prog.slug"
            :program="prog"
          />
        </div>
      </div>
    </section>

    <!-- Key Pillars Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <SectionHeading
          badge="The Centralian Advantage"
          title="Why Choose CPU College of Computer Studies?"
          subtitle="Our multifaceted approach to computing education equips graduates for immediate employment and lifelong leadership."
          align="center"
        />

        <div class="grid-3 pillars-grid">
          <div class="pillar-card card">
            <div class="pillar-icon">
              <AppIcon name="award" :size="28" />
            </div>
            <h3>Accredited Quality</h3>
            <p>
              Consistently accredited Level III by PACUCOA, adhering to strict Commission on Higher Education (CHED) standards for teaching and research.
            </p>
          </div>

          <div class="pillar-card card">
            <div class="pillar-icon">
              <AppIcon name="monitor" :size="28" />
            </div>
            <h3>Specialized Tech Labs</h3>
            <p>
              Equipped with Apple Macintosh multimedia workstations, Cisco networking rigs, virtual reality goggles, and high-performance render suites.
            </p>
          </div>

          <div class="pillar-card card">
            <div class="pillar-icon">
              <AppIcon name="users" :size="28" />
            </div>
            <h3>Active Student Orgs</h3>
            <p>
              Student chapters including CPU Computer Science Society (CSS), MIDAS, and LISSO host annual hackathons, code clinics, and creative exhibitions.
            </p>
          </div>

          <div class="pillar-card card">
            <div class="pillar-icon">
              <AppIcon name="shield" :size="28" />
            </div>
            <h3>Faith & Ethics Grounding</h3>
            <p>
              Instilling the CPU principle of Scientia et Fides (Science and Faith), preparing ethical graduates who defend data privacy and digital integrity.
            </p>
          </div>

          <div class="pillar-card card">
            <div class="pillar-icon">
              <AppIcon name="academic" :size="28" />
            </div>
            <h3>Award-Winning Students</h3>
            <p>
              International hackathon champions (Team SEntralians BricolAI) and national tech innovators solving real-world civic challenges.
            </p>
          </div>

          <div class="pillar-card card">
            <div class="pillar-icon">
              <AppIcon name="external-link" :size="28" />
            </div>
            <h3>Industry Internships</h3>
            <p>
              Over 500 hours of supervised on-the-job training with regional and multinational software firms, game studios, and government information agencies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News & Announcements -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <div class="news-section-header">
          <SectionHeading
            badge="Campus Life & Updates"
            title="Latest News & Announcements"
            subtitle="Stay connected with upcoming hackathons, student milestones, colloquiums, and college advisories."
            align="left"
          />
          <RouterLink to="/news" class="btn btn-outline-navy view-all-news-btn">
            <span>View All News & Events</span>
            <AppIcon name="arrow-right" :size="16" />
          </RouterLink>
        </div>

        <div class="grid-3">
          <NewsCard
            v-for="article in latestNews"
            :key="article.id"
            :article="article"
            @view="handleViewArticle"
          />
        </div>
      </div>
    </section>

    <!-- Call to Action Banner -->
    <section class="cta-section bg-navy">
      <div class="container cta-container">
        <div class="cta-content">
          <span class="badge badge-gold">Admissions Open</span>
          <h2 class="cta-title">Begin Your Future in Technology at CPU CCS</h2>
          <p class="cta-desc">
            Explore our curriculum, connect with faculty advisers, and join a supportive community of Centralian innovators.
          </p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn btn-primary btn-lg">
              <span>Contact Admissions & Dean's Office</span>
              <AppIcon name="arrow-right" :size="18" />
            </RouterLink>
            <RouterLink to="/about" class="btn btn-outline-white btn-lg">
              <span>Learn More About CCS</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- News Article Detail Modal -->
    <BaseModal
      :is-open="isModalOpen"
      :title="selectedArticle?.title || ''"
      :badge="selectedArticle?.category || ''"
      @close="closeModal"
    >
      <div v-if="selectedArticle" class="modal-article">
        <div class="modal-article-meta">
          <span><strong>Date:</strong> {{ selectedArticle.date }}</span>
          <span>•</span>
          <span><strong>Author:</strong> {{ selectedArticle.author }}</span>
        </div>
        <div class="modal-article-content" v-html="selectedArticle.content"></div>
        <div class="modal-tags">
          <span v-for="tag in selectedArticle.tags" :key="tag" class="tag-pill">
            #{{ tag }}
          </span>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<style scoped>
/* Hero */
.hero-section {
  position: relative;
  background: var(--cpu-navy-hero);
  color: #ffffff;
  padding: 5rem 0 5.5rem;
  overflow: hidden;
}

.hero-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(245, 184, 0, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-badges {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.hero-badge-white {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.25);
}

.hero-title {
  color: #ffffff;
  font-size: clamp(2.25rem, 4.5vw, 3.4rem);
  line-height: 1.18;
  margin-bottom: 1.25rem;
  font-weight: 800;
}

.highlight-gold {
  color: var(--cpu-gold);
}

.hero-description {
  color: #cbd5e1;
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--cpu-gold);
}

.stat-label {
  font-size: 0.8rem;
  color: #cbd5e1;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(255, 255, 255, 0.15);
}

/* Visual Card */
.visual-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.card-glow {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 140px;
  height: 140px;
  background: rgba(245, 184, 0, 0.2);
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
}

.logos-cluster {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.cluster-logo {
  object-fit: contain;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
}

.cluster-symbol {
  font-size: 1.75rem;
  color: var(--cpu-gold);
  font-weight: 700;
}

.visual-quote {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1.5rem 0;
  margin-bottom: 1.75rem;
}

.quote-text {
  font-style: italic;
  font-size: 1.05rem;
  color: #e2e8f0;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.quote-author {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--cpu-gold);
}

.visual-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.v-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.825rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  color: #e2e8f0;
}

/* Dean Welcome Section */
.dean-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 3.5rem;
  align-items: center;
}

.dean-image-frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  border: 4px solid #ffffff;
  background: var(--cpu-navy-dark);
}

.dean-portrait {
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.dean-badge-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 33, 71, 0.95), transparent);
  padding: 2rem 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
}

.overlay-title {
  color: var(--cpu-gold);
  font-weight: 700;
  font-size: 1.05rem;
}

.overlay-degrees {
  color: #cbd5e1;
  font-size: 0.85rem;
}

.dean-headline {
  font-size: 2.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}

.dean-sub {
  font-size: 1.2rem;
  color: #0369a1;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.lead-text {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--cpu-navy);
  border-left: 4px solid var(--cpu-gold);
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
  line-height: 1.65;
}

.dean-body {
  margin-bottom: 1.75rem;
}

.dean-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.d-highlight {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.gold-text {
  color: var(--cpu-gold-hover);
  margin-top: 3px;
}

.d-highlight strong {
  display: block;
  color: var(--cpu-navy);
  font-size: 0.95rem;
}

.d-highlight p {
  font-size: 0.875rem;
  margin: 0;
}

/* Pillars */
.pillar-card {
  padding: 2.25rem 2rem;
  border-top: 4px solid var(--cpu-navy);
}

.pillar-icon {
  width: 56px;
  height: 56px;
  background: var(--cpu-navy-soft);
  color: var(--cpu-navy);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.pillar-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.pillar-card p {
  font-size: 0.925rem;
}

/* News Header Layout */
.news-section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.news-section-header :deep(.section-heading) {
  margin-bottom: 0;
}

/* CTA */
.cta-section {
  padding: 5rem 0;
  text-align: center;
}

.cta-content {
  max-width: 780px;
  margin: 0 auto;
}

.cta-title {
  color: #ffffff;
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  margin: 1rem 0 1.25rem;
}

.cta-desc {
  color: #cbd5e1;
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Modal Article */
.modal-article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
}

.modal-article-content {
  line-height: 1.75;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .dean-grid {
    grid-template-columns: 1fr;
  }
  .dean-portrait {
    height: 380px;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 3.5rem 0 4rem;
  }
  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .stat-divider {
    display: none;
  }
}
</style>

