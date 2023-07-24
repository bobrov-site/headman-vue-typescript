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
    <GamePopup :word="word" ref="popup" @restart="restart" />
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
import { computed, ref, watch } from "vue";
import axios from "axios";
const word = ref("");
const getRandomName = async () => {
  try {
    const { data } = await axios<{ FirstName: string }>(
      "http://api.randomdatatools.ru/?unescaped=false&params=FirstName"
    );
    word.value = data.FirstName.toLowerCase();
  } catch (e) {
    console.log(e);
    word.value = ''
  }
};
getRandomName();
const letters = ref<string[]>([]);
const notification = ref<InstanceType<typeof GameNotification> | null>(null);
const isStatusLose = computed(() => wrongLetters.value.length === 6);
const isStatusWin = computed(() =>
  [...word.value].every((x) => correctLetters.value.includes(x))
);
const popup = ref<InstanceType<typeof GamePopup> | null>(null);
const correctLetters = computed(() => {
  return letters.value.filter((x) => word.value.includes(x));
});
const wrongLetters = computed(() => {
  return letters.value.filter((x) => !word.value.includes(x));
});

const restart = async () => {
  await getRandomName();  
  letters.value = [];
  popup.value?.closePopup();
};

watch(wrongLetters, () => {
  if (isStatusLose.value) {
    popup.value?.showPopup("lose");
  }
});

watch(correctLetters, () => {
  if (isStatusWin.value) {
    popup.value?.showPopup("win");
  }
});
window.addEventListener("keydown", ({ key }) => {
  if (isStatusLose.value || isStatusWin.value) {
    return;
  }
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
