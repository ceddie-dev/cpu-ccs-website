<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'

defineProps({
  faculty: {
    type: Object,
    required: true
  }
})

const copied = ref(false)
let copyTimer = null

const copyEmail = async (email) => {
  if (!email) return
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(email)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = email
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copied.value = true
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}
</script>

<template>
  <div class="faculty-card card">
    <div class="portrait-container">
      <img
        :src="faculty.image"
        :alt="`Official portrait of ${faculty.name}`"
        class="portrait-img"
        loading="lazy"
      />
      <div v-if="faculty.verified" class="verified-tag">
        <AppIcon name="check-circle" :size="14" />
        <span>Verified Staff</span>
      </div>
      <div class="category-pill">
        {{ faculty.category }}
      </div>
    </div>

    <div class="card-content">
      <h3 class="faculty-name">{{ faculty.name }}</h3>
      <p class="faculty-title">{{ faculty.title }}</p>
      
      <div class="department-line">
        <AppIcon name="award" :size="15" class="meta-icon" />
        <span>{{ faculty.department }}</span>
      </div>

      <p class="faculty-bio">{{ faculty.bio }}</p>

      <div v-if="faculty.specializations && faculty.specializations.length" class="specializations">
        <span
          v-for="(spec, i) in faculty.specializations.slice(0, 3)"
          :key="i"
          class="spec-tag"
        >
          {{ spec }}
        </span>
      </div>

      <div v-if="faculty.office" class="contact-details">
        <div class="contact-row">
          <AppIcon name="map-pin" :size="14" class="meta-icon" />
          <span>{{ faculty.office }}</span>
        </div>
      </div>

      <div v-if="faculty.verificationNote" class="verification-note">
        <AppIcon name="info" :size="13" class="note-icon" />
        <span>{{ faculty.verificationNote }}</span>
      </div>
    </div>

    <div class="card-action">
      <button
        type="button"
        class="email-btn"
        :class="{ 'is-copied': copied }"
        :title="copied ? 'Email copied to clipboard!' : `Copy email: ${faculty.email}`"
        @click="copyEmail(faculty.email)"
      >
        <AppIcon :name="copied ? 'check' : 'mail'" :size="16" />
        <span>{{ copied ? 'Copied!' : faculty.email }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.faculty-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--bg-surface);
}

.portrait-container {
  position: relative;
  width: 100%;
  height: 280px;
  background-color: var(--cpu-navy-dark);
  overflow: hidden;
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform var(--transition-slow);
}

.faculty-card:hover .portrait-img {
  transform: scale(1.04);
}

.verified-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(16, 185, 129, 0.92);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
}

.category-pill {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0, 33, 71, 0.88);
  color: var(--cpu-gold);
  font-size: 0.725rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(245, 184, 0, 0.3);
}

.card-content {
  padding: 1.5rem 1.5rem 1rem;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.faculty-name {
  font-size: 1.2rem;
  color: var(--cpu-navy);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.faculty-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 0.75rem;
}

.department-line {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.825rem;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
  font-weight: 500;
}

.meta-icon {
  color: var(--cpu-gold-hover);
  flex-shrink: 0;
}

.faculty-bio {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.55;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.specializations {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.spec-tag {
  background-color: var(--cpu-navy-soft);
  color: var(--cpu-navy);
  font-size: 0.725rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: var(--radius-xs);
}

.contact-details {
  border-top: 1px solid var(--border-color);
  padding-top: 0.85rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.contact-row {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.verification-note {
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
  font-size: 0.725rem;
  color: #854d0e;
  background-color: #fefce8;
  border: 1px solid #fef08a;
  border-radius: var(--radius-xs);
  padding: 0.4rem 0.6rem;
  margin-top: 0.6rem;
  line-height: 1.35;
}

.note-icon {
  flex-shrink: 0;
  margin-top: 1px;
}

.card-action {
  padding: 0.85rem 1.5rem;
  background-color: #f8fafc;
  border-top: 1px solid var(--border-color);
}

.email-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--cpu-navy);
  border: 1px solid rgba(22, 22, 42, 0.18);
  border-radius: var(--radius-sm);
  background: #ffffff;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.email-btn:hover {
  background-color: var(--cpu-navy);
  color: #ffffff;
  border-color: var(--cpu-navy);
}

.email-btn.is-copied {
  background-color: #059669;
  color: #ffffff;
  border-color: #059669;
}
</style>

