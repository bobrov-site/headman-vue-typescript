<template>
  <div class="word">
    <span v-for="(letter, index) in word" :key="index" class="letter">
      {{ showLetters(letter) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  word: string;
  correctLetters: string[];
}

const props = defineProps<Props>();

const showLetters = (letter: string) => {
  return props.correctLetters.includes(letter) ? letter : "";
};
</script>

<style scoped></style>
