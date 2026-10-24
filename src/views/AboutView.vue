<script setup>
import { ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { faqData } from '@/data/faq'

const activeFaqIndex = ref(null)
const selectedEra = ref(0)

const toggleFaq = (index) => {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}

const breadcrumbs = [{ label: 'About the College' }]

const historyEras = [
  {
    id: 'era-1',
    era: '1995–2000',
    title: 'Foundations & Early Inception',
    subtitle: 'Computer Science under the College of Commerce',
    summary:
      'The origins of formal computing education at Central Philippine University, initiated within the College of Commerce under pioneer department leadership.',
    milestones: [
      {
        year: '1995',
        title: 'Inception of Computer Science under College of Commerce',
        description:
          'The Bachelor of Science in Computer Science (BSCS) program began under the College of Commerce, headed by Prof. Mary O’ T. Penetrante, admitting its pioneering cohort of computing students.',
      },
    ],
  },
  {
    id: 'era-2',
    era: '2001–2005',
    title: 'Transition & College Establishment',
    subtitle: 'Transfer to Engineering and the Founding of CCS',
    summary:
      'A pivotal period of growth, transferring through the College of Engineering before establishing an autonomous College of Computer Studies under Dean Engr. Cirilo C. Calibjo, PEE.',
    milestones: [
      {
        year: '1st Sem AY 2001–2002',
        title: 'Transfer to College of Engineering',
        description:
          'The Computer Science Department transferred to the College of Engineering. The Software Engineering and Computer Science Department was headed by Engr. Cirilo C. Calibjo, PEE.',
      },
      {
        year: 'End of AY 2002–2003',
        title: 'Approval of College Consolidation Proposal',
        description:
          'A proposal to combine the Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information Systems Management (BSISM), and Bachelor of Science in Information Technology (BSIT) under one independent college was approved.',
      },
      {
        year: '1st Sem AY 2003–2004',
        title: 'Establishment of CCS & First Dean',
        description:
          'The College of Computer Studies (CCS) was formally established, housed in the Mary Thomas Building. Engr. Cirilo C. Calibjo, PEE became the first Dean of the college.',
      },
      {
        year: 'April 2004',
        title: 'Graduate Degree Offerings Approved',
        description:
          'The Master in Computer Science (MCS) and Master of Science in Computer Science (MSCS) degree programs were approved for academic offering.',
      },
    ],
  },
  {
    id: 'era-3',
    era: '2006–2013',
    title: 'Leadership Transition & Quality Assurance',
    subtitle: 'Leadership transition and preliminary accreditation groundwork',
    summary:
      'Continuous academic standardization, leadership transition under Prof. Rodney A. Gicana as Officer-in-Charge, and the formal initiation of external quality surveys.',
    milestones: [
      {
        year: 'AY 2006–2007',
        title: 'Prof. Rodney A. Gicana Appointed OIC',
        description:
          "Prof. Rodney A. Gicana became Officer-in-Charge (OIC) of the College of Computer Studies during Engr. Cirilo C. Calibjo's doctoral studies.",
      },
      {
        year: '2011',
        title: 'Application for PAASCU Accreditation & Preliminary Visit',
        description:
          'The college formally applied for Philippine Accrediting Association of Schools, Colleges and Universities (PAASCU) accreditation, and PAASCU conducted its preliminary survey visit for computing programs.',
      },
    ],
  },
  {
    id: 'era-4',
    era: '2014–2019',
    title: 'Program Expansion & Accreditation Milestones',
    subtitle: 'Digital media launch, BLIS migration, and quality accreditations',
    summary:
      'A dynamic period marked by the launch of BSDMIA, PAASCU Level 1 surveys and re-accreditations, leadership transitions under OIC appointments, and the integration of BLIS.',
    milestones: [
      {
        year: '2014',
        title: 'BSDMIA Program Established & PAASCU Consultancy',
        description:
          'The Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) was established. PAASCU conducted an official consultancy visit for the college.',
      },
      {
        year: 'March–June 2015',
        title: 'Formal PAASCU Visit & Level 1 Conferred',
        description:
          'A formal PAASCU accreditation survey visit was conducted between March and June 2015, resulting in reported Level 1 accredited status for BSCS, BSIT, and BSIS.',
      },
      {
        year: 'June 2016',
        title: 'Prof. Rea P. Balontong Appointed OIC',
        description:
          'Prof. Rea P. Balontong was appointed Officer-in-Charge (OIC) of the College of Computer Studies.',
      },
      {
        year: 'June 2018',
        title: 'BLIS Program Migrated to CCS',
        description:
          'The Bachelor of Library and Information Science (BLIS) program was officially migrated to the College of Computer Studies, unifying library informatics with computing technologies.',
      },
      {
        year: 'AY 2018–2019',
        title: 'Prof. Ma. Christina A. Quijano Appointed OIC',
        description:
          'Prof. Ma. Christina A. Quijano was appointed Officer-in-Charge (OIC) of the College of Computer Studies.',
      },
      {
        year: 'September 16–18, 2019',
        title: 'PAASCU Level 1 Re-Accreditation Milestone',
        description:
          'A formal re-survey visit occurred on September 16–18, 2019, recording a Level 1 re-accreditation milestone for the computing programs.',
      },
      {
        year: 'October 2019',
        title: 'PACUCOA Orientation for BLIS',
        description:
          'The BLIS program underwent an official orientation and consultancy visit conducted by the Philippine Association of Colleges and Universities Commission on Accreditation (PACUCOA).',
      },
    ],
  },
]

const partners = [
  {
    name: 'Acer Academy',
    logo: '/assets/partners/Acer Academy.png',
  },
  {
    name: 'Cisco Networking Academy',
    logo: '/assets/partners/cisco networking academy.png',
  },
  {
    name: 'GOVESMART',
    logo: '/assets/partners/GOVESMART.png',
  },
  {
    name: 'Huawei ICT Academy',
    logo: '/assets/partners/Huawei ICT Academy.png',
  },
  {
    name: 'Lasortech',
    logo: '/assets/partners/Lasortech.png',
  },
  {
    name: 'Mayad',
    logo: '/assets/partners/Mayad.png',
  },
  {
    name: 'Oracle Academy',
    logo: '/assets/partners/Oracle Academy.png',
  },
  {
    name: 'PSITE',
    logo: '/assets/partners/PSITE.png',
  },
  {
    name: 'Startup Project Ventures',
    logo: '/assets/partners/Startup Project Ventures.png',
  },
]

const studentOrganizations = [
  {
    abbr: 'CSS',
    name: 'Computer Science Society',
    focus: 'BSCS Students',
    icon: '/assets/program-icons/computer-science.png',
    desc: 'The official student organization for Computer Science students, dedicated to algorithmic problem solving, software engineering, and peer technical activities.',
  },
  {
    abbr: 'ITSO',
    name: 'Information Technology Student Organization',
    focus: 'BSIT Students',
    icon: '/assets/program-icons/information-technology.png',
    desc: 'The official student organization for Information Technology students, fostering technical competencies, IT seminars, and professional development.',
  },
  {
    abbr: 'MIDAS',
    name: 'Media & Interactive Design Arts Society',
    focus: 'BSDMIA Students',
    icon: '/assets/program-icons/midas.png',
    desc: 'The official student organization for Digital Media and Interactive Arts students, fostering creative growth in digital animation, interactive design, and multimedia arts.',
  },
  {
    abbr: 'LISSO',
    name: 'Library & Information Science Student Organization',
    focus: 'BLIS Students',
    icon: '/assets/program-icons/lisso.png',
    desc: 'The official student organization for Library and Information Science students, promoting literacy advocacy, library sciences, and information stewardship.',
  },
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
            Combining Christian values, rigorous computing theory, and real-world technology
            application to develop ethical digital pioneers.
          </p>
        </div>

        <div class="hero-logos-cluster">
          <img
            src="/assets/logos/ccs-logo.png"
            alt="CCS Seal"
            class="hero-logo"
            width="100"
            height="100"
          />
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
              Central Philippine University was founded in 1905 through a grant from American
              philanthropist John D. Rockefeller and American Baptist missionaries. Rooted in the
              university motto <strong>Scientia et Fides</strong> (Science and Faith), CPU has long
              recognized technology as a vital instrument for human development and ethical service.
            </p>

            <p>
              The <strong>College of Computer Studies (CCS)</strong> was established to meet the
              surging demands of the regional and global knowledge economy. Over decades of
              dedicated growth, CCS evolved from early data processing courses into an accredited
              powerhouse offering specialized degrees in <strong>Information Technology</strong>,
              <strong>Computer Science</strong>,
              <strong>Digital Media and Interactive Arts</strong>, and
              <strong>Library and Information Science</strong>.
            </p>

            <p>
              Today, the college honors a proud tradition of academic excellence, grounded in
              documented historical quality milestones including PAASCU Level 1 accreditation visits
              for computing programs, PACUCOA orientation for BLIS, and full alignment with CHED
              Outcomes-Based Education standards across its degree offerings.
            </p>

            <div class="stats-ribbon">
              <div class="s-ribbon-item">
                <strong>1905</strong>
                <span>CPU Founded</span>
              </div>
              <div class="s-ribbon-item">
                <strong>1995</strong>
                <span>Computing Inception</span>
              </div>
              <div class="s-ribbon-item">
                <strong>4</strong>
                <span>Degree Programs</span>
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
                <span>CPU Institutional Quality Policy</span>
              </div>
              <p class="quote-statement">
                "Central Philippine University is committed to provide holistic, exemplary Christian
                education for life (EXCEL) through relevant academic programs, spiritual growth,
                dynamic research, and sustainable community engagement to satisfy customer
                expectations and continually improve the quality management system."
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
                <AppIcon name="star" :size="32" />
              </div>
              <h3>CCS Vision</h3>
            </div>
            <p>
              The College of Computer Studies is founded on the vision of academic excellence in
              Information Technology Education and responsive to the needs of the total person and
              the world.
            </p>
          </div>

          <div class="vm-card card">
            <div class="vm-header">
              <div class="vm-icon-box">
                <AppIcon name="academic" :size="28" />
              </div>
              <h3>CCS Mission</h3>
            </div>
            <p>
              A College of the future with a mission to educate students with the Christian
              principles and practices of computer studies, preparing them to advance studies,
              careers in software development, computing systems technology, information management,
              and for a lifetime learning.
            </p>
          </div>

          <div class="vm-card card">
            <div class="vm-header">
              <div class="vm-icon-box">
                <AppIcon name="shield" :size="20" />
              </div>
              <h3>Quality Policy</h3>
            </div>
            <p>
              To fulfill the mission and realize the vision of Central Philippine University, we
              commit to consistently provide superior quality services by integrating Christian
              values, academic excellence, highest level of professionalism, and quality
              consideration in every aspect of our operations.
            </p>

            <p style="margin-top: 24px !important">
              We maintain a quality management system that complies with international quality
              management system that complies with international quality standards. We continually
              improve to achieve global excellence that satisfies the expectations of the university
              community, partner institutions, and the general public.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Chronological History Timeline (1995 to Present) -->
    <section class="section-padding bg-white" id="timeline">
      <div class="container">
        <SectionHeading
          badge="Chronological Heritage"
          title="Five Decades of Computing Heritage (1995–Present)"
          subtitle="A chronological journey through the pivotal eras, pioneering deans, academic milestones, and accreditations that built the College of Computer Studies."
          align="center"
        />

        <!-- Era Selector Tabs -->
        <div class="timeline-era-tabs" role="tablist" aria-label="History Eras">
          <button
            v-for="(eraItem, idx) in historyEras"
            :key="eraItem.id"
            class="era-tab-btn"
            :class="{ 'era-active': selectedEra === idx }"
            role="tab"
            :aria-selected="selectedEra === idx"
            @click="selectedEra = idx"
          >
            <span class="era-badge">{{ eraItem.era }}</span>
            <span class="era-title">{{ eraItem.title }}</span>
          </button>
        </div>

        <!-- Active Era Content -->
        <div class="era-detail-container card">
          <div class="era-header-banner">
            <div class="era-banner-left">
              <span class="badge badge-gold">{{ historyEras[selectedEra].era }}</span>
              <h3 class="era-main-title">{{ historyEras[selectedEra].title }}</h3>
              <p class="era-main-subtitle">{{ historyEras[selectedEra].subtitle }}</p>
            </div>
            <div class="era-banner-right">
              <p class="era-summary">{{ historyEras[selectedEra].summary }}</p>
            </div>
          </div>

          <!-- Milestones Track -->
          <div class="timeline-milestones-track">
            <div
              v-for="(milestone, mIdx) in historyEras[selectedEra].milestones"
              :key="mIdx"
              class="milestone-item"
            >
              <div class="milestone-node">
                <div class="milestone-dot">
                  <AppIcon name="award" :size="16" class="gold-icon" />
                </div>
                <span class="milestone-year">{{ milestone.year }}</span>
              </div>
              <div class="milestone-card">
                <h4 class="milestone-title">{{ milestone.title }}</h4>
                <p class="milestone-desc">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners and Memberships (Linkages) Section -->
    <section class="partners-section">
      <!-- Header Banner: Amber to Emerald Gradient with SVG Wave -->
      <div class="partners-banner">
        <div class="container banner-inner">
          <h2 class="partners-heading font-serif text-white">Partners and Memberships</h2>
        </div>
        <!-- Bottom SVG Curve/Wave for smooth transition to the white section below -->
        <div class="banner-wave-wrap">
          <svg
            class="banner-wave-svg"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,24 C240,64 480,72 720,44 C960,16 1200,48 1440,32 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      <!-- Logos Grid Container -->
      <div class="partners-content bg-white">
        <div class="container">
          <div class="partners-grid flex flex-wrap justify-center items-center gap-8">
            <div
              v-for="partner in partners"
              :key="partner.name"
              class="partner-card"
              :title="partner.name"
            >
              <img
                :src="partner.logo"
                :alt="`${partner.name} Logo`"
                class="max-w-full h-20 object-contain hover:scale-105 transition-transform"
                loading="lazy"
              />
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
          subtitle="Get involved beyond the classroom through student societies that organize academic seminars, workshops, and peer collaboration."
          align="center"
        />

        <div class="orgs-grid">
          <div v-for="org in studentOrganizations" :key="org.abbr" class="org-card card">
            <div class="org-icon-row">
              <img
                v-if="org.icon"
                :src="org.icon"
                :alt="org.abbr"
                class="org-icon-img"
                width="56"
                height="56"
              />
              <div v-else class="org-icon-fallback" aria-label="Information Technology">
                <span class="fallback-abbr">{{ org.abbr }}</span>
              </div>
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

.quality-policy-card p + p {
  margin-top: 1.25rem;
}

/* Partners & Memberships (Linkages) */
.partners-section {
  background-color: #ffffff;
  overflow: hidden;
}

.partners-banner {
  position: relative;
  background: linear-gradient(135deg, #d97706 0%, #f59e0b 40%, #10b981 100%);
  padding-top: 5rem;
  padding-bottom: 6rem;
  text-align: center;
}

.banner-inner {
  position: relative;
  z-index: 2;
}

.partners-heading {
  font-family: 'Playfair Display', Georgia, Cambria, 'Times New Roman', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.font-serif {
  font-family: 'Playfair Display', Georgia, Cambria, 'Times New Roman', serif;
}

.text-white {
  color: #ffffff;
}

.banner-wave-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
  overflow: hidden;
  z-index: 1;
}

.banner-wave-svg {
  position: relative;
  display: block;
  width: 100%;
  height: 60px;
}

.partners-content {
  background-color: #ffffff;
  padding-top: 3.5rem;
  padding-bottom: 5rem;
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.partner-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: var(--radius-md, 12px);
  padding: 1.25rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 33, 71, 0.05);
  transition: all var(--transition-normal, 0.25s ease);
  min-width: 200px;
  max-width: 260px;
  height: 120px;
}

.partner-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 8px 20px rgba(0, 33, 71, 0.1);
  transform: translateY(-2px);
}

/* Tailwind utility classes for logos & grid */
.max-w-full {
  max-width: 100%;
}

.h-20 {
  height: 5rem;
}

.object-contain {
  object-fit: contain;
}

.transition-transform {
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.hover\:scale-105:hover,
.partner-card:hover .hover\:scale-105 {
  transform: scale(1.05);
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.gap-8 {
  gap: 2rem;
}

@media (max-width: 768px) {
  .partners-banner {
    padding-top: 3.5rem;
    padding-bottom: 4.5rem;
  }
  .partners-heading {
    font-size: 2rem;
  }
  .banner-wave-svg {
    height: 40px;
  }
  .partners-content {
    padding-top: 2rem;
    padding-bottom: 3.5rem;
  }
  .partner-card {
    min-width: 150px;
    max-width: 180px;
    height: 100px;
    padding: 1rem 1.25rem;
  }
  .h-20 {
    height: 3.75rem;
  }
}

/* Orgs Grid */
.orgs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 992px) {
  .orgs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .orgs-grid {
    grid-template-columns: 1fr;
  }
}

.org-card {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
}

.org-icon-fallback {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: #002147;
  color: #fbbf24;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.05em;
  border: 2px solid #f59e0b;
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.fallback-abbr {
  display: inline-block;
  line-height: 1;
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

/* History Timeline */
.timeline-era-tabs {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.75rem;
  margin-bottom: 2rem;
  scrollbar-width: thin;
}

.era-tab-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  padding: 0.875rem 1.25rem;
  background-color: var(--bg-white);
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
  flex-shrink: 0;
  text-align: left;
}

.era-tab-btn:hover {
  border-color: var(--cpu-navy);
  background-color: var(--cpu-navy-soft);
}

.era-tab-btn.era-active {
  background-color: var(--cpu-navy);
  border-color: var(--cpu-navy);
  box-shadow: var(--shadow-md);
}

.era-tab-btn .era-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cpu-gold);
  letter-spacing: 0.04em;
}

.era-tab-btn.era-active .era-badge {
  color: var(--cpu-gold);
}

.era-tab-btn .era-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.era-tab-btn.era-active .era-title {
  color: #ffffff;
}

.era-detail-container {
  padding: 2.25rem;
  border-top: 4px solid var(--cpu-gold);
}

.era-header-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
  align-items: center;
}

.era-main-title {
  font-size: 1.5rem;
  color: var(--cpu-navy);
  margin: 0.5rem 0 0.25rem;
  font-weight: 800;
}

.era-main-subtitle {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

.era-summary {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-primary);
  margin: 0;
  padding-left: 1.25rem;
  border-left: 3px solid var(--cpu-gold);
}

.timeline-milestones-track {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  padding-left: 0.5rem;
}

.milestone-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1.5rem;
  align-items: flex-start;
  position: relative;
}

.milestone-node {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.milestone-dot {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--cpu-navy-soft);
  border: 2px solid var(--cpu-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.milestone-year {
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--cpu-navy);
  letter-spacing: 0.02em;
}

.milestone-card {
  background-color: var(--bg-subtle);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--border-light);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.milestone-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: var(--border-color);
}

.milestone-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--cpu-navy);
  margin-bottom: 0.4rem;
}

.milestone-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
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
  .era-header-banner {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .milestone-item {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>
