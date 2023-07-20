<template>
  <div id="app">
    <GameHeader />
    <div class="game-container">
      <GameFigure />
      <GameWrongLetters />
      <GameWord />
    </div>

    <!-- Container for final message -->
    <div v-if="false" class="popup-container">
      <div class="popup">
        <h2>Поздравляю, вы победили! 😃</h2>
        <!-- <h2>Вы проиграли. 😕</h2> -->
        <!-- <h3>...имя: Лидия</h3> -->
        <button>Сыграть еще раз</button>
      </div>
    </div>

    <!-- Notification -->
    <div class="notification-container show">
      <p>Вы уже вводили этот символ</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameHeader from "./components/GameHeader.vue";
import GameFigure from "./components/GameFigure.vue";
import GameWrongLetters from "./components/GameWrongLetters.vue";
import GameWord from "./components/GameWord.vue";
</script>

<style></style>
