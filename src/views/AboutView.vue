<script setup>
import { ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { faqData } from '@/data/faq'

const activeFaqIndex = ref(null)

const toggleFaq = (index) => {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}

const breadcrumbs = [
  { label: 'About the College' }
]

const facilities = [
  {
    name: 'Apple Macintosh Multimedia Lab',
    desc: 'High-performance iMac workstations loaded with industry-standard creative suites for 2D/3D animation, video post-production, digital sculpting, and Xcode iOS app development.',
    icon: 'monitor',
    capacity: '40 Workstations'
  },
  {
    name: 'Cisco Networking & Security Lab',
    desc: 'Equipped with enterprise-grade Cisco routers, managed layer-2 and layer-3 switches, firewall appliances, and patch bays for hands-on packet routing and packet analysis.',
    icon: 'shield',
    capacity: '35 Workstations'
  },
  {
    name: 'Game Development & VR Simulation Studio',
    desc: 'Equipped with dedicated GPU rigs, virtual reality headsets (Meta Quest & HTC Vive), drawing tablets, and spatial audio monitors for game prototyping and immersive media.',
    icon: 'palette',
    capacity: '30 Workstations'
  },
  {
    name: 'Systems Virtualization & Cloud Lab',
    desc: 'High-density multi-core server nodes running hypervisors, Docker containers, Kubernetes clusters, and Linux environments for full-stack deployment and database optimization.',
    icon: 'laptop',
    capacity: '40 Workstations'
  },
  {
    name: 'Hardware Diagnostics & Repair Suite',
    desc: 'Specialized lab for microcomputer assembly, oscilloscope diagnostics, logic analyzers, peripheral soldering, motherboard troubleshooting, and network cabling fabrication.',
    icon: 'code',
    capacity: '25 Benches'
  },
  {
    name: 'Digital Library & Archival Informatics Hub',
    desc: 'Integrated with Koha ILS, DSpace digital repository servers, automated RFID book tags, document flatbed scanners, and bibliographic search kiosks for BLIS training.',
    icon: 'library',
    capacity: '30 Terminals'
  }
]

const studentOrganizations = [
  {
    abbr: 'CSS',
    name: 'CPU Computer Science Society',
    focus: 'BSCS & BSIT Students',
    icon: '/assets/program-icons/computer-science.png',
    desc: 'Empowers students through competitive coding contests, hackathons, open-source workshops, peer study circles, and industry tech tours.'
  },
  {
    abbr: 'MIDAS',
    name: 'Media & Interactive Design Arts Society',
    focus: 'BSDMIA Students & Digital Creatives',
    icon: '/assets/program-icons/midas.png',
    desc: 'Cultivates artistic expression and interactive game creation through art exhibitions, 48-hour game jams, animation workshops, and community outreach like Project KULAY.'
  },
  {
    abbr: 'LISSO',
    name: 'Library & Information Science Student Organization',
    focus: 'BLIS Students & Information Scholars',
    icon: '/assets/program-icons/lisso.png',
    desc: 'Champions literacy advocacy, digital curation seminars, community library book drives, and preparations for national librarian licensure conventions.'
  }
]
</script>

<template>
  <div class="about-view">
    <AppBreadcrumb :items="breadcrumbs" />

    <!-- Hero / Header Section -->
    <section class="about-hero bg-navy">
      <div class="container hero-inner">
        <div class="hero-text-block">
          <div class="hero-badges">
            <span class="badge badge-gold">Central Philippine University</span>
            <span class="badge badge-navy hero-badge-glass">Established 1905</span>
          </div>
          <h1 class="hero-page-title">About the College of Computer Studies</h1>
          <p class="hero-lead">
            Combining Christian values, rigorous computing theory, and real-world technology application to develop ethical digital pioneers.
          </p>
        </div>

        <div class="hero-logos-cluster">
          <img src="/assets/logos/cpu-logo.png" alt="CPU Seal" class="hero-logo" width="90" height="90" />
          <div class="hero-plus">+</div>
          <img src="/assets/logos/ccs-logo.png" alt="CCS Seal" class="hero-logo" width="90" height="90" />
        </div>
      </div>
    </section>

    <!-- History & Heritage Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="history-grid">
          <div class="history-content">
            <SectionHeading
              badge="Our Heritage"
              title="A Legacy of Computing Innovation & Christian Faith"
              subtitle="From pioneering computing instruction in Western Visayas to leading modern digital transformation."
              align="left"
            />

            <p>
              Central Philippine University was founded in 1905 through a grant from American philanthropist John D. Rockefeller and American Baptist missionaries. Rooted in the university motto <strong>Scientia et Fides</strong> (Science and Faith), CPU has long recognized technology as a vital instrument for human development and ethical service.
            </p>

            <p>
              The <strong>College of Computer Studies (CCS)</strong> was established to meet the surging demands of the regional and global knowledge economy. Over decades of dedicated growth, CCS evolved from early data processing courses into an accredited powerhouse offering specialized degrees in <strong>Information Technology</strong>, <strong>Computer Science</strong>, <strong>Digital Media and Interactive Arts</strong>, and <strong>Library and Information Science</strong>.
            </p>

            <p>
              Today, the college holds prestigious <strong>PACUCOA Level III Re-Accreditation</strong>, a testament to its modern outcome-based curricula, world-class computer laboratories, faculty credentials, and award-winning student researchers.
            </p>

            <div class="stats-ribbon">
              <div class="s-ribbon-item">
                <strong>1905</strong>
                <span>CPU Founded</span>
              </div>
              <div class="s-ribbon-item">
                <strong>Level III</strong>
                <span>PACUCOA Accredited</span>
              </div>
              <div class="s-ribbon-item">
                <strong>4</strong>
                <span>Distinct Degrees</span>
              </div>
              <div class="s-ribbon-item">
                <strong>100%</strong>
                <span>OBE Compliant</span>
              </div>
            </div>
          </div>

          <div class="history-card-wrap">
            <div class="quote-card card">
              <div class="quote-badge">
                <AppIcon name="award" :size="20" class="gold-icon" />
                <span>Institutional Quality Policy</span>
              </div>
              <p class="quote-statement">
                "To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide quality education that develops students' spiritual, intellectual, moral, and technological competencies."
              </p>
              <div class="quote-meta">
                <strong>Central Philippine University</strong>
                <span>Exemplary Christian Education for Life (EXCEL)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision, Mission & Core Values Section -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <SectionHeading
          badge="Guiding Principles"
          title="Vision, Mission, and Core Values"
          subtitle="The foundational compass steering every academic course, research project, and laboratory innovation at CPU CCS."
          align="center"
        />

        <div class="grid-3 vm-grid">
          <div class="vm-card card">
            <div class="vm-header">
              <div class="vm-icon-box">
                <AppIcon name="star" :size="26" />
              </div>
              <h3>CCS Vision</h3>
            </div>
            <p>
              "A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them for advanced studies, careers in software development, computing systems technology, information management, and for lifelong learning."
            </p>
          </div>

          <div class="vm-card card">
            <div class="vm-header">
              <div class="vm-icon-box">
                <AppIcon name="academic" :size="26" />
              </div>
              <h3>University Mission</h3>
            </div>
            <p>
              "The mission of Central Philippine University is to carry out a program of spiritual, intellectual, moral, physical, scientific, technological, and cultural training under influences which strengthen Christian faith, build up character, and promote scholarship, research, and community service."
            </p>
          </div>

          <div class="vm-card card">
            <div class="vm-header">
              <div class="vm-icon-box">
                <AppIcon name="shield" :size="26" />
              </div>
              <h3>Scientia et Fides</h3>
            </div>
            <p>
              <strong>Science and Faith:</strong> We believe true technological brilliance must be guided by Christian ethics, empathy, and moral responsibility. Our graduates balance algorithmic precision with profound compassion for humanity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Computing Facilities & Laboratories -->
    <section class="section-padding bg-white">
      <div class="container">
        <SectionHeading
          badge="High-Tech Infrastructure"
          title="State-of-the-Art Computer Laboratories"
          subtitle="Hands-on learning is at the heart of our curriculum. Explore our specialized laboratories designed for industry readiness."
          align="center"
        />

        <div class="grid-3 facilities-grid">
          <div v-for="(fac, index) in facilities" :key="index" class="facility-card card">
            <div class="facility-icon-wrap">
              <AppIcon :name="fac.icon" :size="26" />
            </div>
            <div class="facility-body">
              <div class="facility-header-row">
                <h3 class="facility-title">{{ fac.name }}</h3>
                <span class="capacity-badge">{{ fac.capacity }}</span>
              </div>
              <p class="facility-desc">{{ fac.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Organizations -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <SectionHeading
          badge="Campus Life"
          title="Recognized Student Organizations"
          subtitle="Get involved beyond the classroom through student societies that organize code camps, creative exhibitions, and hackathons."
          align="center"
        />

        <div class="grid-3 orgs-grid">
          <div v-for="org in studentOrganizations" :key="org.abbr" class="org-card card">
            <div class="org-icon-row">
              <img :src="org.icon" :alt="org.abbr" class="org-icon-img" width="56" height="56" />
              <div class="org-meta">
                <span class="badge badge-navy">{{ org.abbr }}</span>
                <span class="org-focus">{{ org.focus }}</span>
              </div>
            </div>
            <h3 class="org-name">{{ org.name }}</h3>
            <p class="org-desc">{{ org.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Frequently Asked Questions Accordion -->
    <section class="section-padding bg-white">
      <div class="container container-narrow">
        <SectionHeading
          badge="Visitor Information"
          title="Frequently Asked Questions"
          subtitle="Answers to common inquiries regarding degree offerings, PACUCOA accreditation, admissions, and facilities."
          align="center"
        />

        <div class="faq-accordion">
          <div
            v-for="(faq, index) in faqData"
            :key="index"
            class="faq-item card"
            :class="{ 'faq-item-active': activeFaqIndex === index }"
          >
            <button
              class="faq-question-btn"
              :aria-expanded="activeFaqIndex === index"
              @click="toggleFaq(index)"
            >
              <span class="faq-q-text">{{ faq.question }}</span>
              <AppIcon
                name="chevron-down"
                :size="18"
                class="faq-chevron"
                :class="{ 'rotate-180': activeFaqIndex === index }"
              />
            </button>
            <div v-show="activeFaqIndex === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
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

.hero-logos-cluster {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: rgba(255, 255, 255, 0.06);
  padding: 1.75rem 2.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
}

.hero-logo {
  object-fit: contain;
}

.hero-plus {
  color: var(--cpu-gold);
  font-size: 1.5rem;
  font-weight: 700;
}

/* History Grid */
.history-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3.5rem;
  align-items: center;
}

.history-content p {
  margin-bottom: 1.25rem;
  font-size: 1.025rem;
  line-height: 1.75;
}

.stats-ribbon {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: var(--bg-subtle);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.s-ribbon-item {
  display: flex;
  flex-direction: column;
}

.s-ribbon-item strong {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  color: var(--cpu-navy);
}

.s-ribbon-item span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.quote-card {
  padding: 2.5rem;
  background: var(--cpu-navy-hero);
  color: #ffffff;
  border-radius: var(--radius-lg);
  border: none;
  box-shadow: var(--shadow-xl);
}

.quote-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--cpu-gold);
  margin-bottom: 1.5rem;
}

.gold-icon {
  color: var(--cpu-gold);
}

.quote-statement {
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #f1f5f9;
  margin-bottom: 1.5rem;
}

.quote-meta strong {
  display: block;
  color: var(--cpu-gold);
  font-size: 0.95rem;
}

.quote-meta span {
  color: #cbd5e1;
  font-size: 0.85rem;
}

/* Vision Mission Cards */
.vm-card {
  padding: 2.25rem 2rem;
  border-top: 4px solid var(--cpu-navy);
}

.vm-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.vm-icon-box {
  width: 48px;
  height: 48px;
  background-color: var(--cpu-navy-soft);
  color: var(--cpu-navy);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.vm-card h3 {
  font-size: 1.25rem;
  margin: 0;
}

.vm-card p {
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Facilities */
.facility-card {
  padding: 2rem;
  display: flex;
  gap: 1.25rem;
  border-left: 4px solid var(--cpu-navy);
}

.facility-icon-wrap {
  width: 52px;
  height: 52px;
  background-color: var(--cpu-navy-soft);
  color: var(--cpu-navy);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.facility-body {
  flex: 1 1 auto;
}

.facility-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.facility-title {
  font-size: 1.1rem;
  line-height: 1.35;
}

.capacity-badge {
  font-size: 0.725rem;
  font-weight: 600;
  color: var(--text-muted);
  background-color: var(--bg-subtle);
  padding: 2px 8px;
  border-radius: var(--radius-xs);
  white-space: nowrap;
}

.facility-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Orgs */
.org-card {
  padding: 2.25rem 2rem;
}

.org-icon-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.org-icon-img {
  object-fit: contain;
}

.org-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.org-focus {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
}

.org-name {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
}

.org-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* FAQ */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.faq-item-active {
  border-color: var(--cpu-navy);
  box-shadow: var(--shadow-md);
}

.faq-question-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  color: var(--cpu-navy);
}

.faq-chevron {
  color: var(--text-muted);
  transition: transform var(--transition-fast);
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
  border-top: 1px solid var(--border-light);
  padding-top: 1rem;
}

.faq-answer p {
  margin: 0;
  font-size: 0.925rem;
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .history-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .stats-ribbon {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
