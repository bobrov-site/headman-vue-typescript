<template>
  <div id="app">
    <GameHeader />
    <div class="game-container">
      <GameFigure />

      <div class="wrong-letters-container">
        <div class="wrong-letters">
          <p>Ошибки</p>
          <span>п , </span>
          <span>м , </span>
          <span>с </span>
        </div>
      </div>

      <div class="word">
        <span class="letter">л</span>
        <span class="letter"></span>
        <span class="letter">д</span>
        <span class="letter"></span>
        <span class="letter"></span>
      </div>
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
</script>

<style></style>
