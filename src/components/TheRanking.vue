<template>
  <div class="ranking">
    <TheButton variant="text" @click="goToPrevStep" class="ranking__prev">
      <img
        class="ranking__button--text-icon"
        alt="Previous step icon"
        src="@/assets/images/arrow-prev.svg"
      />
      Prev
    </TheButton>
    <h1 class="ranking__title">
      {{ ranking.question }}
    </h1>

    <h2 class="ranking__subtitle">{{ ranking.subtitle }}</h2>

    <main class="ranking__main">
      <draggable
        class="ranking__box"
        :list="ranking.answers"
        :sort="false"
        :move="validateMove"
        :group="{
          name: 'ranking',
          pull: responses.length <= 3 ? 'clone' : false,
          put: false,
        }"
        itemKey="name"
        @start="validateDrag"
      >
        <template #item="{ element }">
          <div
            @click="selectAnswer(element)"
            class="ranking__box--item ranking__box--answer"
          >
            {{ element.title }}

            <img alt="Arrow right" src="@/assets/images/arrow.svg" />
          </div>
        </template>
      </draggable>

      <div class="ranking__box">
        <div class="ranking__box--placeholder">
          <div
            v-for="(num, i) in ranking.allowedAnswers"
            :key="i"
            class="ranking__box--wrapper"
          >
            <span class="ranking__box--number">{{ num }}</span>

            <div class="ranking__box--item ranking__box--selected" />
          </div>
        </div>

        <draggable
          :list="responses"
          :group="{
            name: 'ranking',
            pull: true,
            put: responses.length <= 2,
          }"
          itemKey="name"
        >
          <template #item="{ element }">
            <div class="ranking__box--wrapper">
              <div
                class="ranking__box--item ranking__box--selected"
                @click="removeSelected(element.id)"
              >
                {{ element.title }}
              </div>
            </div>
          </template>
        </draggable>

        <TheButton
          v-if="responses.length === 3"
          variant="text"
          @click="responses.splice(0, responses.length)"
          class="ranking__reset"
        >
          <img
            class="button__text--icon"
            alt="Replay icon"
            src="@/assets/images/replay.svg"
          />
          Replay
        </TheButton>
      </div>
    </main>
    <TheButton @click="goToNextStep" class="ranking__next"> Next </TheButton>
  </div>
</template>

<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
import draggable from 'vuedraggable';
import { reactive } from 'vue';
import type { Ranking } from '@/types/ranking';
import type { Answer } from '@/types/answer';

defineProps<{
  ranking: Ranking;
}>();

const emit = defineEmits<{
  (e: 'triggerNotification', value: string): void;
}>();

const responses = reactive<Answer[]>([]);

function selectAnswer(answer: Answer) {
  const isAlreadySelected = responses.find((ans) => ans.id === answer.id);

  if (isAlreadySelected) {
    return emit('triggerNotification', 'This answer is already selected');
  }

  if (responses.length > 2) {
    return emit('triggerNotification', 'Only three responses are allowed');
  }

  responses.push(answer);
}

function removeSelected(id: number) {
  const selectedIndex = responses.findIndex((response) => response.id === id);

  responses.splice(selectedIndex, 1);
}

function validateMove(evt: any) {
  const isAlreadySelected = responses.find(
    (answer) => answer.id === evt.draggedContext.element.id
  );
  if (isAlreadySelected) {
    emit('triggerNotification', 'This answer is already selected');
    return false;
  }
}

function validateDrag(evt: any) {
  if (responses.length === 3) {
    return emit('triggerNotification', 'Only three responses are allowed');
  }
}

function goToPrevStep() {
  console.log('Go to previous step');
}

function goToNextStep() {
  console.log('Go to next step');
}
</script>

<style scoped>
.ranking {
  margin-top: 1.5rem;
}

.ranking__title {
  font-size: 1.1875rem;
  color: var(--c-text);
  line-height: 1.75rem;
  margin-top: 1rem;
}

.ranking__subtitle {
  font-size: 0.8125rem;
  color: var(--c-text-light);
  line-height: 1.25rem;
}

.ranking__main {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}

.ranking__box {
  flex: 0 0 45%;
  position: relative;
}

.ranking__box--wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.ranking__box--placeholder {
  position: absolute;
  left: 0;
  right: 0;
}

.ranking__box--item {
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  height: 4rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--c-text);
  line-height: 1.2rem;
  font-size: 0.875rem;
}

.ranking__box--answer {
  background-color: var(--c-text-lightest);
  box-shadow: 0px 0px 0px 2px var(--c-text-lightest) inset;
}

.ranking__box--answer img {
  transition: all 0.2s ease-in;
}

.ranking__box--answer:hover {
  background-color: var(--c-text-lighter);
}
.ranking__box--answer:hover img {
  transform: translateX(2px);
}

.ranking__box--selected {
  border: 2px dashed var(--c-accent-light);
  flex: 1;
}

.ranking__box--number {
  position: absolute;
  right: 100%;
  top: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.2rem;
  color: var(--c-accent);
  margin-right: 0.5rem;
}

.ranking__reset {
  margin-left: auto;
  margin-top: 0.875rem;
}

.ranking__next {
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .ranking {
    margin-top: 3rem;
  }

  .ranking__main {
    margin-top: 3rem;
  }

  .ranking__box--item {
    padding: 1.25rem;
    margin-bottom: 0.75rem;
    line-height: 1.5rem;
    font-size: 1.1875rem;
  }

  .ranking__box--number {
    top: 1.25rem;
    font-size: 1.1875rem;
    line-height: 1.5rem;
    margin-right: 1rem;
  }

  .ranking__next {
    margin-top: 2rem;
  }
}
</style>
