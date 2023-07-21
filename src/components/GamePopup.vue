<template>
  <div v-if="isShow" class="popup-container">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ word }}</h3>
      </template>
      <button @click="emit('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose, defineEmits, defineProps } from "vue";
import type { GameStatus } from "../types/GameStatus";

interface Props {
  word: string;
}
defineProps<Props>();
const gameStatus = ref<GameStatus | null>(null);
const isShow = ref(false);

const showPopup = (status: GameStatus) => {
  gameStatus.value = status;
  isShow.value = true;
};
const closePopup = () => {
  isShow.value = false;
};

defineExpose({
  showPopup,
  closePopup,
});

const emit = defineEmits<{
  (e: "restart"): void;
}>();
</script>

<style scoped></style>
