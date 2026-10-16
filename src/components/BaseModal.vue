<script setup>
import { onMounted, onUnmounted } from 'vue'
import AppIcon from './AppIcon.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-backdrop" @click="emit('close')">
        <div class="modal-dialog" role="dialog" aria-modal="true" @click.stop>
          <div class="modal-header">
            <div class="header-content">
              <span v-if="badge" class="badge badge-gold">{{ badge }}</span>
              <h3 class="modal-title">{{ title }}</h3>
            </div>
            <button class="close-btn" @click="emit('close')" aria-label="Close dialog">
              <AppIcon name="x" :size="20" />
            </button>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-navy btn-sm" @click="emit('close')">Close Window</button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 21, 46, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
  backdrop-filter: blur(4px);
}

.modal-dialog {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 680px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.modal-header {
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-subtle);
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.modal-title {
  font-size: 1.25rem;
  color: var(--cpu-navy);
  line-height: 1.35;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 4px;
  border-radius: var(--radius-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.08);
  color: var(--cpu-navy);
}

.modal-body {
  padding: 1.75rem;
  overflow-y: auto;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.modal-body :deep(p) {
  margin-bottom: 1rem;
}

.modal-body :deep(h4) {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--cpu-navy);
}

.modal-body :deep(ul),
.modal-body :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.modal-body :deep(li) {
  margin-bottom: 0.35rem;
}

.modal-footer {
  padding: 1rem 1.75rem;
  background-color: var(--bg-subtle);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-dialog,
.modal-fade-leave-active .modal-dialog {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-enter-from .modal-dialog {
  transform: translateY(20px) scale(0.97);
}

.modal-fade-leave-to .modal-dialog {
  transform: translateY(10px) scale(0.98);
}
</style>
