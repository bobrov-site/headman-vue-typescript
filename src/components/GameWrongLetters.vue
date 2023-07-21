<template>
  <div class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span v-for="(letter, index) in wrongLetters" :key="letter">
        {{ showLetterWithSymbol(letter, index) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  wrongLetters: string[];
}
const props = defineProps<Props>();

const showLetterWithSymbol = (letter: string, index: number) => {
  return index === props.wrongLetters.length - 1 ? letter : `${letter},`;
};
</script>

<style scoped></style>
