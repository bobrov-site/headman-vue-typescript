<template>
  <div id="app">
    <GameHeader />
    <div class="game-container">
      <GameFigure :wrong-letters-count="wrongLetters.length" />
      <GameWrongLetters
        v-if="wrongLetters.length"
        :wrong-letters="wrongLetters"
      />
      <GameWord :word="word" :correct-letters="correctLetters" />
    </div>
    <GamePopup v-if="false" />
    <GameNotification ref="notification" />
  </div>
</template>

<script setup lang="ts">
import GameHeader from "./components/GameHeader.vue";
import GameFigure from "./components/GameFigure.vue";
import GameWrongLetters from "./components/GameWrongLetters.vue";
import GameWord from "./components/GameWord.vue";
import GamePopup from "./components/GamePopup.vue";
import GameNotification from "./components/GameNotification.vue";
import { computed, ref } from "vue";

const word = ref("василий");
const letters = ref<string[]>([]);
const notification = ref<InstanceType<typeof GameNotification> | null>(null);
const correctLetters = computed(() => {
  return letters.value.filter((x) => word.value.includes(x));
});
const wrongLetters = computed(() => {
  return letters.value.filter((x) => !word.value.includes(x));
});
window.addEventListener("keydown", ({ key }) => {
  if (letters.value.includes(key)) {
    notification.value?.showNotification();
    setTimeout(() => notification.value?.closeNotification(), 2000);
    return;
  }
  if (/[а-яА-ЯёЁ]/.test(key)) {
    letters.value.push(key.toLocaleLowerCase());
  }
});
</script>

<style></style>
