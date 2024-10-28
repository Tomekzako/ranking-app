<template>
  <header>
    <TheNav />
  </header>
  <main>
    <div class="ranking__container">
      <TheRanking
        :ranking="rankingData[step - 1]"
        @triggerNotification="triggerNotification"
      />
    </div>
  </main>
  <transition name="notification">
    <TheNotification v-if="showNotification" type="error">
      {{ notificationMessage }}
    </TheNotification>
  </transition>
  <TheFooter />
</template>

<script setup lang="ts">
import TheNav from './components/TheNav.vue';
import TheNotification from './components/TheNotification.vue';
import TheRanking from './components/TheRanking.vue';
import TheFooter from './components/TheFooter.vue';
import { ref } from 'vue';
import type { Ranking } from './types/ranking';

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
const step = 1;

const showNotification = ref(false);
const notificationMessage = ref('Only three responses are allowed');

function triggerNotification(message: string) {
  showNotification.value = true;
  notificationMessage.value = message;
  setTimeout(() => (showNotification.value = false), 3000);
}
</script>
