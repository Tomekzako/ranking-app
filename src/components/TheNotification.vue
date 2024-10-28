<template>
  <div class="notification__wrapper">
    <div class="notification" :class="[`notification--${type}`]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'info' | 'error';
  }>(),
  {
    type: 'info',
  }
);
</script>

<style scoped>
.notification__wrapper {
  position: fixed;
  width: 100%;
  top: 1.25rem;
}
.notification {
  padding: 1rem;
  color: var(--c-white);
  border-radius: 0.625rem;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  margin: 0 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
}

.notification--info {
  background: #f57c00;
}

.notification--error {
  background: #d32f2f;
}

@media (min-width: 768px) {
  .notification {
    padding: 1.25rem;
    max-width: 25rem;
    margin: 0 auto;
    font-size: 1rem;
  }
}

.notification-enter-active {
  animation: slide 0.5s ease;
}
.notification-leave-to {
  opacity: 0;
  transform: translateY(-4rem);
}
.notification-leave-active {
  transition: all 0.3s ease;
}

@keyframes slide {
  0% {
    transform: translateY(-4rem);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
