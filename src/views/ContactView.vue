<script setup>
import { ref, reactive } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import BaseModal from '@/components/BaseModal.vue'

const breadcrumbs = [
  { label: 'Contact Us' }
]

const form = reactive({
  fullName: '',
  email: '',
  inquirerType: 'Prospective Student',
  programInterest: 'General Inquiry',
  subject: '',
  message: ''
})

const errors = reactive({
  fullName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmittedModalOpen = ref(false)
const submittedData = ref(null)

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validateField = (field) => {
  if (field === 'fullName') {
    if (!form.fullName.trim()) {
      errors.fullName = 'Full Name is required.'
    } else if (form.fullName.trim().length < 3) {
      errors.fullName = 'Name must be at least 3 characters.'
    } else {
      errors.fullName = ''
    }
  }

  if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Email address is required.'
    } else if (!validateEmail(form.email)) {
      errors.email = 'Please enter a valid email address.'
    } else {
      errors.email = ''
    }
  }

  if (field === 'subject') {
    if (!form.subject.trim()) {
      errors.subject = 'Subject line is required.'
    } else if (form.subject.trim().length < 4) {
      errors.subject = 'Subject must be at least 4 characters.'
    } else {
      errors.subject = ''
    }
  }

  if (field === 'message') {
    if (!form.message.trim()) {
      errors.message = 'Message content is required.'
    } else if (form.message.trim().length < 15) {
      errors.message = 'Please provide a more detailed inquiry (minimum 15 characters).'
    } else {
      errors.message = ''
    }
  }
}

const handleSubmit = () => {
  validateField('fullName')
  validateField('email')
  validateField('subject')
  validateField('message')

  const hasErrors = Object.values(errors).some(err => err.length > 0)

  if (!hasErrors) {
    submittedData.value = { ...form }
    isSubmittedModalOpen.value = true
  }
}

const resetForm = () => {
  form.fullName = ''
  form.email = ''
  form.inquirerType = 'Prospective Student'
  form.programInterest = 'General Inquiry'
  form.subject = ''
  form.message = ''
  isSubmittedModalOpen.value = false
  submittedData.value = null
}
</script>

<template>
  <div class="contact-page">
    <AppBreadcrumb :items="breadcrumbs" />

    <!-- Hero Header -->
    <section class="contact-hero bg-navy">
      <div class="container hero-inner">
        <div class="hero-text-block">
          <div class="hero-badges">
            <span class="badge badge-gold">We are here to help</span>
            <span class="badge badge-navy hero-badge-glass">Dean's Office & Departments</span>
          </div>
          <h1 class="hero-page-title">Contact the College of Computer Studies</h1>
          <p class="hero-lead">
            Have questions about admissions, prerequisite evaluation, degree curriculum, or industry partnerships? Reach out directly to our administration and faculty coordinators.
          </p>
        </div>

        <div class="hero-hours-card">
          <div class="hours-icon-box">
            <AppIcon name="clock" :size="24" class="gold-text" />
          </div>
          <div>
            <span class="hours-label">Official Office Hours</span>
            <strong>Monday to Friday: 8:00 AM – 5:00 PM</strong>
            <p>Closed on Philippine National Holidays & University Convocations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Grid -->
    <section class="section-padding bg-subtle">
      <div class="container">
        <div class="contact-layout-grid">
          <!-- Left Column: Interactive Contact Form -->
          <div class="form-wrapper card">
            <div class="form-card-header">
              <span class="badge badge-navy">Send an Inquiry</span>
              <h2 class="form-card-title">Online Inquiry Form</h2>
              <p class="form-card-subtitle">
                Fill out the form below. Real-time front-end validation ensures all necessary information is captured.
              </p>
            </div>

            <!-- Demo Form Notice Banner -->
            <div class="demo-banner">
              <AppIcon name="info" :size="18" class="demo-info-icon" />
              <div class="demo-banner-text">
                <strong>Academic Demonstration Notice</strong>
                <p>
                  This form features active client-side JavaScript validation. As this is a front-end academic project without a dedicated mail server, submissions are simulated locally and do not dispatch emails.
                </p>
              </div>
            </div>

            <form class="inquiry-form" @submit.prevent="handleSubmit" novalidate>
              <!-- Name & Email Row -->
              <div class="grid-2 form-row">
                <div class="form-group">
                  <label for="fullName" class="form-label">
                    Full Name <span class="required">*</span>
                  </label>
                  <input
                    id="fullName"
                    v-model="form.fullName"
                    type="text"
                    class="form-input"
                    :class="{ 'has-error': errors.fullName }"
                    placeholder="e.g., Juan Dela Cruz"
                    @blur="validateField('fullName')"
                    @input="errors.fullName && validateField('fullName')"
                  />
                  <div v-if="errors.fullName" class="form-error">
                    <AppIcon name="alert-triangle" :size="13" />
                    <span>{{ errors.fullName }}</span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">
                    Email Address <span class="required">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    :class="{ 'has-error': errors.email }"
                    placeholder="e.g., juan.delacruz@example.com"
                    @blur="validateField('email')"
                    @input="errors.email && validateField('email')"
                  />
                  <div v-if="errors.email" class="form-error">
                    <AppIcon name="alert-triangle" :size="13" />
                    <span>{{ errors.email }}</span>
                  </div>
                </div>
              </div>

              <!-- Inquirer Type & Program of Interest -->
              <div class="grid-2 form-row">
                <div class="form-group">
                  <label for="inquirerType" class="form-label">I am a...</label>
                  <select id="inquirerType" v-model="form.inquirerType" class="form-select">
                    <option value="Prospective Student">Prospective Student / SHS Graduate</option>
                    <option value="Current Centralian">Current CPU Student</option>
                    <option value="Parent / Guardian">Parent or Guardian</option>
                    <option value="Alumni">Centralian Alumni</option>
                    <option value="Industry Partner">Industry / Practicum Partner</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="programInterest" class="form-label">Program of Interest</label>
                  <select id="programInterest" v-model="form.programInterest" class="form-select">
                    <option value="General Inquiry">General CCS Inquiries</option>
                    <option value="BSIT">BS Information Technology (BSIT)</option>
                    <option value="BSCS">BS Computer Science (BSCS)</option>
                    <option value="BSDMIA">BS Digital Media & Interactive Arts (BSDMIA)</option>
                    <option value="BLIS">BS Library & Information Science (BLIS)</option>
                  </select>
                </div>
              </div>

              <!-- Subject -->
              <div class="form-group">
                <label for="subject" class="form-label">
                  Inquiry Subject <span class="required">*</span>
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="form-input"
                  :class="{ 'has-error': errors.subject }"
                  placeholder="e.g., Admission Requirements & Transfer Credentials for BSIT"
                  @blur="validateField('subject')"
                  @input="errors.subject && validateField('subject')"
                />
                <div v-if="errors.subject" class="form-error">
                  <AppIcon name="alert-triangle" :size="13" />
                  <span>{{ errors.subject }}</span>
                </div>
              </div>

              <!-- Message -->
              <div class="form-group">
                <div class="message-label-row">
                  <label for="message" class="form-label">
                    Detailed Message <span class="required">*</span>
                  </label>
                  <span class="char-count">{{ form.message.length }} characters</span>
                </div>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  class="form-textarea"
                  :class="{ 'has-error': errors.message }"
                  placeholder="Write your message, specific questions, or advising request here..."
                  @blur="validateField('message')"
                  @input="errors.message && validateField('message')"
                ></textarea>
                <div v-if="errors.message" class="form-error">
                  <AppIcon name="alert-triangle" :size="13" />
                  <span>{{ errors.message }}</span>
                </div>
              </div>

              <!-- Submit Buttons -->
              <div class="form-submit-row">
                <button type="submit" class="btn btn-primary btn-lg">
                  <AppIcon name="mail" :size="18" />
                  <span>Submit Inquiry Message</span>
                </button>
                <button type="button" class="btn btn-outline-navy" @click="resetForm">
                  <span>Reset Form</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Right Column: Contact Directory & Campus Info -->
          <div class="contact-info-col">
            <!-- Directory Info Card -->
            <div class="info-card card">
              <h3 class="info-card-title">
                <AppIcon name="map-pin" :size="20" class="gold-text" />
                <span>Dean's Office & Location</span>
              </h3>

              <div class="info-items">
                <div class="info-item">
                  <AppIcon name="map-pin" :size="18" class="info-icon" />
                  <div>
                    <strong>Campus Address</strong>
                    <p>
                      College of Computer Studies Building,<br />
                      Central Philippine University, Lopez Jaena Street,<br />
                      Jaro, Iloilo City 5000, Philippines
                    </p>
                  </div>
                </div>

                <div class="info-item">
                  <AppIcon name="phone" :size="18" class="info-icon" />
                  <div>
                    <strong>Telephone Lines</strong>
                    <p>(033) 329-1971 local 1076 (Dean's Office)</p>
                    <p>(033) 329-1971 local 1077 (Faculty Room)</p>
                  </div>
                </div>

                <div class="info-item">
                  <AppIcon name="mail" :size="18" class="info-icon" />
                  <div>
                    <strong>Official Email Addresses</strong>
                    <p><a href="mailto:ccs@cpu.edu.ph">ccs@cpu.edu.ph</a> (Dean's Office)</p>
                    <p><a href="mailto:infotech@cpu.edu.ph">infotech@cpu.edu.ph</a> (IT Department)</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Department Contacts -->
            <div class="dept-contacts-card card">
              <h3 class="info-card-title">
                <AppIcon name="users" :size="20" class="gold-text" />
                <span>Department Leadership</span>
              </h3>

              <ul class="dept-contact-list">
                <li>
                  <strong>Dean's Office</strong>
                  <span>Prof. Ma. Christina A. Quijano, MSCS</span>
                  <small>ccs@cpu.edu.ph</small>
                </li>
                <li>
                  <strong>IT & IS Department Head</strong>
                  <span>Prof. Rea P. Balontong, MBA</span>
                  <small>rbalontong@cpu.edu.ph</small>
                </li>
                <li>
                  <strong>CS & DMIA Program Coordinator</strong>
                  <span>Prof. Marjee Rose B. Parreño, MSCS, MBA</span>
                  <small>mrparreno@cpu.edu.ph</small>
                </li>
                <li>
                  <strong>BLIS Program Coordinator</strong>
                  <span>Prof. Ana Mae B. Cantel, MLIS, RL</span>
                  <small>acantel@cpu.edu.ph</small>
                </li>
              </ul>
            </div>

            <!-- Interactive Map Graphic / Location Guide -->
            <div class="map-card card">
              <h3 class="info-card-title">
                <AppIcon name="map-pin" :size="20" class="gold-text" />
                <span>Finding the CCS Building</span>
              </h3>
              <p class="map-guide-text">
                The College of Computer Studies building is situated near the Mary Thomas Hall and the Henry Luce III Library, easily accessible through the Gate 1 main entrance along Lopez Jaena St.
              </p>
              <div class="map-directions-badge">
                <AppIcon name="check-circle" :size="16" />
                <span>Accessible via CPU Gate 1 & Gate 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Submission Confirmation Modal -->
    <BaseModal
      :is-open="isSubmittedModalOpen"
      title="Inquiry Validated Successfully"
      badge="Form Submission Confirmation"
      @close="isSubmittedModalOpen = false"
    >
      <div v-if="submittedData" class="modal-success-content">
        <div class="success-banner">
          <AppIcon name="check-circle" :size="32" class="success-icon" />
          <div>
            <strong>Thank You, {{ submittedData.fullName }}!</strong>
            <p>Your inquiry details passed all client-side validation checks.</p>
          </div>
        </div>

        <h4>Submitted Information Preview:</h4>
        <div class="preview-fields">
          <div class="preview-row">
            <span>Sender:</span>
            <strong>{{ submittedData.fullName }} ({{ submittedData.email }})</strong>
          </div>
          <div class="preview-row">
            <span>Affiliation:</span>
            <strong>{{ submittedData.inquirerType }}</strong>
          </div>
          <div class="preview-row">
            <span>Program Selected:</span>
            <strong>{{ submittedData.programInterest }}</strong>
          </div>
          <div class="preview-row">
            <span>Subject:</span>
            <strong>{{ submittedData.subject }}</strong>
          </div>
          <div class="preview-row preview-msg">
            <span>Message:</span>
            <p>"{{ submittedData.message }}"</p>
          </div>
        </div>

        <div class="disclaimer-callout">
          <AppIcon name="info" :size="20" class="callout-icon" />
          <p>
            <strong>Demonstration Notice:</strong> As this website is a front-end project developed for <em>CCS 3031 – Web Systems and Technologies</em>, this form does not transmit actual emails to the CPU mail servers. All inputs were successfully validated in the browser.
          </p>
        </div>
      </div>

      <template #footer>
        <button class="btn btn-navy" @click="resetForm">Clear & Close Form</button>
      </template>
    </BaseModal>
  </div>
</template>

<style scoped>
.contact-hero {
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

.hero-hours-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(245, 184, 0, 0.35);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  max-width: 380px;
}

.hours-icon-box {
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

.hours-label {
  display: block;
  font-size: 0.75rem;
  color: var(--cpu-gold);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

.hero-hours-card strong {
  display: block;
  color: #ffffff;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.hero-hours-card p {
  font-size: 0.8rem;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.4;
}

/* Layout */
.contact-layout-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.85fr;
  gap: 2.5rem;
  align-items: flex-start;
}

.form-wrapper {
  padding: 2.5rem;
  background-color: var(--bg-surface);
}

.form-card-header {
  margin-bottom: 1.5rem;
}

.form-card-title {
  font-size: 1.6rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  color: var(--cpu-navy);
}

.form-card-subtitle {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.demo-banner {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background-color: #fffbeb;
  border-left: 4px solid var(--cpu-gold);
  border-radius: var(--radius-sm);
  margin-bottom: 2rem;
}

.demo-info-icon {
  color: #b45309;
  flex-shrink: 0;
  margin-top: 2px;
}

.demo-banner-text strong {
  display: block;
  font-size: 0.85rem;
  color: #92400e;
  margin-bottom: 0.2rem;
}

.demo-banner-text p {
  font-size: 0.8rem;
  color: #78350f;
  margin: 0;
  line-height: 1.4;
}

.form-row {
  margin-bottom: 0;
}

.message-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.char-count {
  font-size: 0.775rem;
  color: var(--text-muted);
}

.form-submit-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

/* Right column */
.contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.info-card,
.dept-contacts-card,
.map-card {
  padding: 2rem;
  background-color: var(--bg-surface);
}

.info-card-title {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 1.15rem;
  color: var(--cpu-navy);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.info-icon {
  color: var(--cpu-navy);
  margin-top: 3px;
  flex-shrink: 0;
}

.info-item strong {
  display: block;
  font-size: 0.9rem;
  color: var(--cpu-navy);
  margin-bottom: 0.2rem;
}

.info-item p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.info-item a {
  color: var(--cpu-navy);
  font-weight: 600;
}

.info-item a:hover {
  color: var(--cpu-gold-hover);
}

.dept-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dept-contact-list li {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 0.75rem;
}

.dept-contact-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.dept-contact-list strong {
  color: var(--cpu-navy);
  font-size: 0.9rem;
}

.dept-contact-list span {
  color: var(--text-secondary);
}

.dept-contact-list small {
  color: var(--text-muted);
}

.map-guide-text {
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.map-directions-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #d1fae5;
  color: #065f46;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}

/* Modal */
.success-banner {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #d1fae5;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-sm);
  margin-bottom: 1.5rem;
}

.success-icon {
  color: #059669;
  flex-shrink: 0;
}

.success-banner strong {
  display: block;
  font-size: 1rem;
  color: #065f46;
}

.success-banner p {
  margin: 0;
  font-size: 0.85rem;
  color: #047857;
}

.preview-fields {
  background-color: var(--bg-subtle);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.preview-row {
  display: flex;
  font-size: 0.875rem;
  gap: 0.5rem;
}

.preview-row span {
  color: var(--text-muted);
  min-width: 130px;
}

.preview-row strong {
  color: var(--cpu-navy);
}

.preview-msg {
  flex-direction: column;
}

.preview-msg p {
  margin: 0.25rem 0 0;
  font-style: italic;
  color: var(--text-secondary);
}

.disclaimer-callout {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background-color: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-xs);
}

.callout-icon {
  color: #2563eb;
  flex-shrink: 0;
  margin-top: 2px;
}

.disclaimer-callout p {
  margin: 0;
  font-size: 0.825rem;
  line-height: 1.5;
  color: #1e40af;
}

@media (max-width: 1024px) {
  .contact-layout-grid {
    grid-template-columns: 1fr;
  }
}
</style>
