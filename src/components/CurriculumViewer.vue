<script setup>
import { ref, computed } from 'vue'
import AppIcon from './AppIcon.vue'
import BaseModal from './BaseModal.vue'

const props = defineProps({
  curriculum: {
    type: Object,
    required: true
  }
})

// State for active year and semester
const selectedYearIndex = ref(0)
const selectedSemesterIndex = ref(0)
const selectedTrack = ref('')
const activeTabMode = ref('semesters') // 'semesters' | 'electives'
const isFullModalOpen = ref(false)

// Initialize track if BSDMIA
if (props.curriculum.tracksOffered && props.curriculum.tracksOffered.length) {
  selectedTrack.value = props.curriculum.tracksOffered[0]
}

const currentYear = computed(() => {
  return props.curriculum.years[selectedYearIndex.value] || props.curriculum.years[0]
})

// Determine semester list depending on whether the year has tracks
const currentSemesters = computed(() => {
  if (currentYear.value.hasTracks && currentYear.value.tracks) {
    const trackName = selectedTrack.value || Object.keys(currentYear.value.tracks)[0]
    return currentYear.value.tracks[trackName] || []
  }
  return currentYear.value.semesters || []
})

const currentSemester = computed(() => {
  if (selectedSemesterIndex.value >= currentSemesters.value.length) {
    return currentSemesters.value[0] || { courses: [] }
  }
  return currentSemesters.value[selectedSemesterIndex.value] || { courses: [] }
})

const selectYear = (index) => {
  selectedYearIndex.value = index
  selectedSemesterIndex.value = 0
  activeTabMode.value = 'semesters'
}

const selectSemester = (index) => {
  selectedSemesterIndex.value = index
  activeTabMode.value = 'semesters'
}
</script>

<template>
  <div class="curriculum-viewer card">
    <!-- Header Banner -->
    <div class="cv-header">
      <div class="cv-header-left">
        <div class="cv-badges">
          <span class="badge badge-gold">{{ curriculum.effectivePeriod }}</span>
          <span class="badge badge-navy cv-units-badge">{{ curriculum.totalUnits }} Total Units</span>
          <span v-if="curriculum.basis" class="badge badge-subtle">{{ curriculum.basis }}</span>
        </div>
        <h3 class="cv-title">{{ curriculum.title }}</h3>
        <p class="cv-source-text">
          <AppIcon name="book" :size="14" />
          <span>Source Document: <strong>{{ curriculum.sourceFile }}</strong></span>
        </p>
      </div>

      <div class="cv-header-right">
        <button class="btn btn-outline-navy btn-sm" @click="isFullModalOpen = true">
          <AppIcon name="external-link" :size="15" />
          <span>View Full 4-Year Matrix</span>
        </button>
      </div>
    </div>

    <!-- Year-Level Navigation Bar -->
    <div class="year-nav-bar" role="tablist">
      <button
        v-for="(yr, yIdx) in curriculum.years"
        :key="yr.yearLevel"
        class="year-tab-btn"
        :class="{ 'year-tab-active': selectedYearIndex === yIdx && activeTabMode === 'semesters' }"
        role="tab"
        :aria-selected="selectedYearIndex === yIdx && activeTabMode === 'semesters'"
        @click="selectYear(yIdx)"
      >
        <span class="year-label">{{ yr.yearLevel }}</span>
      </button>

      <!-- Electives Tab (if available) -->
      <button
        v-if="curriculum.electives && curriculum.electives.length"
        class="year-tab-btn electives-tab"
        :class="{ 'year-tab-active': activeTabMode === 'electives' }"
        @click="activeTabMode = 'electives'"
      >
        <span class="year-label">Elective Tracks</span>
      </button>
    </div>

    <!-- Main Content Area -->
    <div class="cv-body">
      <!-- SEMESTER MODE -->
      <div v-if="activeTabMode === 'semesters'" class="semester-view">
        <!-- Sub-controls: Tracks & Semesters -->
        <div class="semester-toolbar">
          <!-- Semester Switcher -->
          <div class="semester-pills" role="tablist">
            <button
              v-for="(sem, sIdx) in currentSemesters"
              :key="sIdx"
              class="sem-pill-btn"
              :class="{ 'sem-pill-active': selectedSemesterIndex === sIdx }"
              role="tab"
              :aria-selected="selectedSemesterIndex === sIdx"
              @click="selectSemester(sIdx)"
            >
              {{ sem.semester }}
            </button>
          </div>

          <!-- Track Selector (for BSDMIA 3rd Year) -->
          <div v-if="currentYear.hasTracks" class="track-selector">
            <span class="track-label">Specialization Track:</span>
            <div class="track-buttons">
              <button
                v-for="trackName in curriculum.tracksOffered"
                :key="trackName"
                class="track-btn"
                :class="{ 'track-btn-active': selectedTrack === trackName }"
                @click="selectedTrack = trackName; selectedSemesterIndex = 0"
              >
                {{ trackName }}
              </button>
            </div>
          </div>
        </div>

        <!-- Course Table -->
        <div class="table-responsive">
          <table class="curriculum-table">
            <thead>
              <tr>
                <th scope="col" class="th-code">Subject Code</th>
                <th scope="col" class="th-title">Subject Title</th>
                <th scope="col" class="th-num">Lec Hrs</th>
                <th scope="col" class="th-num">Lab Hrs</th>
                <th scope="col" class="th-num">Credit Units</th>
                <th scope="col" class="th-prereq">Pre-requisites & (Co-requisites)</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(course, cIdx) in currentSemester.courses"
                :key="cIdx"
                :class="{ 'row-lab-fee': course.labFee, 'row-non-academic': course.isNonAcademic }"
              >
                <td class="td-code">
                  <strong>{{ course.code }}</strong>
                  <span v-if="course.labFee" class="lab-fee-star" title="Assigned in a laboratory with laboratory fees">*</span>
                </td>
                <td class="td-title">
                  {{ course.title }}
                </td>
                <td class="td-num">{{ course.lec }}</td>
                <td class="td-num">{{ course.lab }}</td>
                <td class="td-num td-units">
                  <span class="unit-badge">{{ course.units }}</span>
                </td>
                <td class="td-prereq">
                  <span v-if="course.prereq" class="prereq-text">{{ course.prereq }}</span>
                  <span v-else class="prereq-none">—</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="tfoot-row">
                <td colspan="4" class="tfoot-label">
                  <strong>Sub-total Academic Units for {{ currentSemester.semester }}</strong>
                </td>
                <td class="td-num tfoot-units">
                  <strong>{{ currentSemester.subTotalUnits }}</strong>
                </td>
                <td class="tfoot-note">
                  <span v-if="currentSemester.courses.some(c => c.labFee)">
                    * Subject assigned in a laboratory with laboratory fees
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- ELECTIVES MODE -->
      <div v-else-if="activeTabMode === 'electives'" class="electives-view">
        <div class="electives-header">
          <h4>Areas of Specialization / Professional Electives</h4>
          <p>
            Students complete designated elective sequences aligned with their technical or creative focus.
          </p>
        </div>

        <div class="electives-grid">
          <div
            v-for="track in curriculum.electives"
            :key="track.trackName"
            class="elective-track-card card"
          >
            <div class="track-header">
              <span class="badge badge-navy">{{ track.requiredUnits }} Units Required</span>
              <h5>{{ track.trackName }}</h5>
            </div>

            <div class="table-responsive">
              <table class="curriculum-table table-sm">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Subject Title</th>
                    <th>Units</th>
                    <th>Pre-requisites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="c in track.courses" :key="c.code">
                    <td class="td-code"><strong>{{ c.code }}</strong></td>
                    <td>{{ c.title }}</td>
                    <td class="td-num">{{ c.units }}</td>
                    <td class="td-prereq"><small>{{ c.prereq || '—' }}</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Curriculum Footer Sourcing -->
    <div class="cv-footer">
      <div class="cv-footer-left">
        <span class="audit-note">
          <strong>Institutional Governance:</strong> Prepared by <em>{{ curriculum.preparedBy }}</em> • Approved by <em>{{ curriculum.recommendingApproval }}</em>
        </span>
      </div>
      <div class="cv-footer-right">
        <small class="disclaimer-text">
          Source Checklist: AY 2024–2025 CPU-ACA Form No. 25
        </small>
      </div>
    </div>

    <!-- Full Curriculum Matrix Modal -->
    <BaseModal
      :is-open="isFullModalOpen"
      :title="`${curriculum.title} — Full 4-Year Curriculum Matrix`"
      badge="AY 2024–2025 Official Checklist"
      @close="isFullModalOpen = false"
    >
      <div class="full-matrix-content">
        <div class="matrix-overview-box">
          <div class="matrix-stat">
            <span>Program:</span>
            <strong>{{ curriculum.code }} ({{ curriculum.title }})</strong>
          </div>
          <div class="matrix-stat">
            <span>Total Units:</span>
            <strong>{{ curriculum.totalUnits }} Academic Units</strong>
          </div>
          <div class="matrix-stat">
            <span>Curriculum Period:</span>
            <strong>{{ curriculum.effectivePeriod }}</strong>
          </div>
        </div>

        <!-- Render all years -->
        <div v-for="yr in curriculum.years" :key="yr.yearLevel" class="matrix-year-block">
          <h4 class="matrix-year-title">{{ yr.yearLevel }}</h4>

          <!-- Non-track year -->
          <div v-if="!yr.hasTracks">
            <div v-for="sem in yr.semesters" :key="sem.semester" class="matrix-sem-block">
              <div class="matrix-sem-header">
                <strong>{{ sem.semester }}</strong>
                <span class="badge badge-navy">{{ sem.subTotalUnits }} Units</span>
              </div>
              <ul class="matrix-course-list">
                <li v-for="c in sem.courses" :key="c.code">
                  <span class="m-code">{{ c.code }}</span>
                  <span class="m-title">{{ c.title }}</span>
                  <span class="m-units">{{ c.units }} u</span>
                  <small v-if="c.prereq" class="m-prereq">({{ c.prereq }})</small>
                </li>
              </ul>
            </div>
          </div>

          <!-- Tracked year (e.g. BSDMIA Year 3) -->
          <div v-else>
            <div
              v-for="(semList, trackKey) in yr.tracks"
              :key="trackKey"
              class="matrix-track-section"
            >
              <h5 class="matrix-track-title">Track: {{ trackKey }}</h5>
              <div v-for="sem in semList" :key="sem.semester" class="matrix-sem-block">
                <div class="matrix-sem-header">
                  <strong>{{ sem.semester }}</strong>
                  <span class="badge badge-navy">{{ sem.subTotalUnits }} Units</span>
                </div>
                <ul class="matrix-course-list">
                  <li v-for="c in sem.courses" :key="c.code">
                    <span class="m-code">{{ c.code }}</span>
                    <span class="m-title">{{ c.title }}</span>
                    <span class="m-units">{{ c.units }} u</span>
                    <small v-if="c.prereq" class="m-prereq">({{ c.prereq }})</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <button class="btn btn-navy" @click="isFullModalOpen = false">Close Matrix</button>
      </template>
    </BaseModal>
  </div>
</template>

<style scoped>
.curriculum-viewer {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

.cv-header {
  padding: 1.75rem 2rem;
  background-color: #fafbfc;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cv-badges {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.badge-subtle {
  background-color: var(--bg-subtle);
  color: var(--text-muted);
  font-size: 0.75rem;
  border: 1px solid var(--border-color);
}

.cv-units-badge {
  font-weight: 700;
  background-color: var(--cpu-navy);
  color: #ffffff;
}

.cv-title {
  font-size: 1.35rem;
  color: var(--cpu-navy);
  margin-bottom: 0.35rem;
}

.cv-source-text {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.825rem;
  color: var(--text-muted);
  margin: 0;
}

/* Year Nav Bar */
.year-nav-bar {
  display: flex;
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-color);
  padding: 0 1rem;
  overflow-x: auto;
}

.year-tab-btn {
  padding: 1rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-secondary);
  border-bottom: 3px solid transparent;
  transition: all var(--transition-fast);
  white-space: nowrap;
  background: none;
}

.year-tab-btn:hover {
  color: var(--cpu-navy);
  background-color: rgba(0, 33, 71, 0.04);
}

.year-tab-active {
  color: var(--cpu-navy);
  border-bottom-color: var(--cpu-gold);
  background-color: var(--bg-surface);
}

.electives-tab {
  margin-left: auto;
  color: #0369a1;
}

/* Body */
.cv-body {
  padding: 1.75rem 2rem;
}

.semester-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.semester-pills {
  display: flex;
  gap: 0.5rem;
}

.sem-pill-btn {
  padding: 0.45rem 1.15rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-pill);
  background-color: var(--bg-subtle);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.sem-pill-btn:hover {
  background-color: var(--cpu-navy-soft);
  color: var(--cpu-navy);
}

.sem-pill-active {
  background-color: var(--cpu-navy);
  color: #ffffff;
  border-color: var(--cpu-navy);
}

.track-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.track-label {
  font-weight: 700;
  color: var(--text-muted);
}

.track-buttons {
  display: flex;
  gap: 0.35rem;
}

.track-btn {
  padding: 0.35rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: var(--radius-pill);
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.track-btn:hover {
  border-color: var(--cpu-navy);
  color: var(--cpu-navy);
}

.track-btn-active {
  background: var(--cpu-gold);
  color: var(--cpu-navy-dark);
  font-weight: 700;
  border-color: var(--cpu-gold);
}

/* Table */
.table-responsive {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
}

.curriculum-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  text-align: left;
}

.curriculum-table thead {
  background-color: var(--cpu-navy-soft);
}

.curriculum-table th {
  padding: 0.85rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cpu-navy);
  border-bottom: 2px solid var(--border-color);
}

.curriculum-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-primary);
  vertical-align: middle;
}

.curriculum-table tr:hover td {
  background-color: #f8fafc;
}

.th-code { width: 14%; }
.th-title { width: 42%; }
.th-num { width: 8%; text-align: center; }
.th-prereq { width: 28%; }

.td-code {
  font-family: monospace;
  font-size: 0.85rem;
  white-space: nowrap;
}

.td-num {
  text-align: center;
}

.unit-badge {
  display: inline-block;
  padding: 2px 8px;
  background-color: var(--bg-subtle);
  border-radius: var(--radius-xs);
  font-weight: 700;
  color: var(--cpu-navy);
}

.lab-fee-star {
  color: #d97706;
  font-weight: 800;
  margin-left: 2px;
}

.prereq-text {
  font-size: 0.825rem;
  color: var(--text-secondary);
}

.prereq-none {
  color: #94a3b8;
}

.tfoot-row td {
  background-color: #f1f5f9;
  border-top: 2px solid var(--border-color);
  padding: 1rem;
}

.tfoot-label {
  color: var(--cpu-navy);
  font-size: 0.95rem;
}

.tfoot-units {
  font-size: 1.1rem;
  color: var(--cpu-navy);
}

.tfoot-note {
  font-size: 0.775rem;
  color: var(--text-muted);
  font-style: italic;
}

/* Electives View */
.electives-header {
  margin-bottom: 1.5rem;
}

.electives-header h4 {
  font-size: 1.15rem;
  color: var(--cpu-navy);
  margin-bottom: 0.25rem;
}

.electives-header p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
}

.electives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
}

.elective-track-card {
  padding: 1.5rem;
  border-top: 4px solid var(--cpu-navy);
}

.track-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.track-header h5 {
  font-size: 1rem;
  color: var(--cpu-navy);
  margin: 0;
}

.table-sm {
  font-size: 0.825rem;
}

.table-sm th,
.table-sm td {
  padding: 0.6rem 0.75rem;
}

/* Footer Sourcing */
.cv-footer {
  padding: 1rem 2rem;
  background-color: #fafbfc;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.audit-note {
  color: var(--text-secondary);
}

.disclaimer-text {
  color: var(--text-muted);
}

/* Modal Full Matrix */
.full-matrix-content {
  font-size: 0.9rem;
}

.matrix-overview-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: var(--cpu-navy-soft);
  border-radius: var(--radius-sm);
  margin-bottom: 1.5rem;
}

.matrix-stat {
  display: flex;
  flex-direction: column;
}

.matrix-stat span {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
}

.matrix-stat strong {
  color: var(--cpu-navy);
  font-size: 0.9rem;
}

.matrix-year-block {
  margin-bottom: 2rem;
}

.matrix-year-title {
  font-size: 1.15rem;
  color: var(--cpu-navy);
  border-bottom: 2px solid var(--cpu-gold);
  padding-bottom: 0.4rem;
  margin-bottom: 1rem;
}

.matrix-sem-block {
  margin-bottom: 1.25rem;
  padding-left: 0.5rem;
}

.matrix-sem-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.matrix-course-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.matrix-course-list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  padding: 0.35rem 0.5rem;
  background: var(--bg-subtle);
  border-radius: var(--radius-xs);
}

.m-code {
  font-family: monospace;
  font-weight: 700;
  min-width: 80px;
}

.m-title {
  flex: 1 1 auto;
}

.m-units {
  font-weight: 700;
  color: var(--cpu-navy);
}

.m-prereq {
  color: var(--text-muted);
}

.matrix-track-section {
  margin-bottom: 1rem;
  border-left: 3px solid var(--cpu-navy);
  padding-left: 1rem;
}

.matrix-track-title {
  color: var(--cpu-navy);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .cv-header,
  .cv-body,
  .cv-footer {
    padding: 1.25rem;
  }
  .semester-toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
  .matrix-overview-box {
    grid-template-columns: 1fr;
  }
}
</style>

