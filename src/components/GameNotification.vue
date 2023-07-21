<template>
  <div :class="{ show: isShow }" class="notification-container">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue";
const isShow = ref(false);

const showNotification = () => {
  isShow.value = true;
};
const closeNotification = () => {
  isShow.value = false;
};

defineExpose({
  showNotification,
  closeNotification,
});
</script>

<style scoped></style>
