<template>
  <header>
    <TheNav />
  </header>
  <main>
    <div class="ranking__container">
      <TheRanking
        v-for="ranking in rankingData"
        :key="ranking.id"
        :ranking="ranking"
        @triggerNotification="triggerNotification"
      />
      <TheButton variant="default" @click="nextStep" class="ranking__button">
        Next
      </TheButton>
    </div>
  </main>
  <transition name="notification">
    <TheNotification v-if="showNotification" type="error">
      {{ notificationMessage }}
    </TheNotification>
  </transition>
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

<script setup lang="ts">
import TheNav from './components/TheNav.vue';
import TheNotification from './components/TheNotification.vue';
import TheRanking from './components/TheRanking.vue';
import TheButton from './components/TheButton.vue';
import { ref } from 'vue';
import type { Ranking } from './types/Ranking';

const rankingData: Ranking[] = [
  {
    id: 4325,
    question: 'Which of the following are most important when selecting a job?',
    subtitle: 'Rank your top three items',
    answers: [
      { id: 0, title: 'Salary and benefits' },
      { id: 1, title: 'Work-life balance' },
      { id: 2, title: 'Career advancement opportunities' },
      { id: 3, title: 'Company culture' },
      { id: 4, title: 'Job location' },
    ],
    allowedAnswers: 3,
  },
];

const showNotification = ref(false);
const notificationMessage = ref('Only three responses are allowed');

function triggerNotification(message: string) {
  showNotification.value = true;
  notificationMessage.value = message;
  setTimeout(() => (showNotification.value = false), 3000);
}

function nextStep() {
  console.log('Save responses and move to next step');
}
</script>

<style scoped>
.ranking__button {
  margin-top: 2rem;
}
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
