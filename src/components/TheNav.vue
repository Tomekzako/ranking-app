<template>
  <nav class="nav">
    <img
      alt="Centiment logo"
      class="nav__logo"
      src="@/assets/images/logo.svg"
    />
  </nav>
</template>

<style scoped>
.nav {
  height: 3rem;
  width: 100%;
  background: #f6f6f6;
  border-bottom: 1px solid var(--c-accent-light);
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 0.5rem;
}
/* @media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
} */
</style>
