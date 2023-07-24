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
import GameHeader from "@/components/GameHeader.vue";
import GameFigure from "@/components/GameFigure.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameWord from "@/components/GameWord.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import { ref, watch } from "vue";
import { useRandomWord } from "@/composables/useRandomWord";
import { useLetters } from "@/composables/useLetters";
import { useNotification } from "@/composables/useNotification";

const { word, getRandomWord } = useRandomWord();
const {
  letters,
  wrongLetters,
  correctLetters,
  isStatusLose,
  isStatusWin,
  addLetter,
  resetLetters,
} = useLetters(word);

const { notification, showNotification } = useNotification();

const popup = ref<InstanceType<typeof GamePopup> | null>(null);

const restart = async () => {
  await getRandomWord();
  resetLetters();
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
    showNotification();
  }
  addLetter(key);
});
</script>

<style></style>
