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
    type?: 'info' | 'error'
  }>(),
  {
    type: 'info',
  },
)
</script>

<style>
.notification__wrapper {
  position: fixed;
  width: 100%;
  top: 1.25rem;
}
.notification {
  padding: 1.25rem;
  color: white;
  border-radius: 0.625rem;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 25rem;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
}

.notification--info {
  background: #f57c00;
}

.notification--error {
  background: #d32f2f;
}

.notification-enter-active {
  animation: wobble 0.5s ease;
}
.notification-leave-to {
  opacity: 0;
  transform: translateY(-4rem);
}
.notification-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
    opacity: 1;
  }
  70% {
    transform: translateX(-8px);
    opacity: 1;
  }
  80% {
    transform: translateX(4px);
    opacity: 1;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
