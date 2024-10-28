<template>
  <footer>
    <div class="ranking__brand">
      <img
        alt="Centiment logo"
        class="ranking__brand--logo"
        src="@/assets/images/logo-dark.svg"
      />
      Powered by Centiment
    </div>
  </footer>
</template>

<style scoped>
.ranking__brand {
  display: flex;
  padding: 0.25rem 0.375rem;
  border: 1px solid var(--c-text-lighter);
  border-radius: 0.25rem;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 9.6rem;
  margin-left: auto;
  font-size: 0.6875rem;
}
.ranking__brand--logo {
  margin-right: 0.25rem;
  line-height: 1rem;
}
</style>
