<template>
  <div id="app">
    <GameHeader />
    <div class="game-container">
      <GameFigure />
      <GameWrongLetters />
      <GameWord />
    </div>
    <GamePopup v-if="false" />
    <GameNotification />
  </div>
</template>

<script setup lang="ts">
import GameHeader from "./components/GameHeader.vue";
import GameFigure from "./components/GameFigure.vue";
import GameWrongLetters from "./components/GameWrongLetters.vue";
import GameWord from "./components/GameWord.vue";
import GamePopup from "./components/GamePopup.vue";
import GameNotification from "./components/GameNotification.vue";
</script>

<style></style>
