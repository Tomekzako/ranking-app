<template>
  <button
    class="ranking__button"
    :disabled="isDisabled"
    :class="[
      { 'ranking__button--disabled': isDisabled },
      `ranking__button--${variant}`,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    isDisabled?: boolean;
    variant?: 'default' | 'text';
  }>(),
  {
    variant: 'default',
  }
);
</script>

<style>
.ranking__button {
  color: var(--c-white);
  padding: 0.5rem 1rem;
  height: 2.5rem;
  border: 0;
  letter-spacing: 0.3px;
  border-radius: 0.125rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
}

.ranking__button--default {
  background: var(--c-accent);
}

.ranking__button--text {
  font-size: 0.8125rem;
  color: var(--c-text-light);
  border: 0;
  background-color: transparent;
  padding: 0;
  height: 1.5rem;
}

.ranking__button--text:hover {
  color: var(--c-text);
}

.ranking__button--text-icon {
  margin-right: 0.25rem;
}
</style>
