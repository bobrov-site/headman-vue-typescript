import { ref, computed, type Ref } from "vue";

export const useLetters = (word: Ref<string>) => {
  const letters = ref<string[]>([]);
  const correctLetters = computed(() => {
    return letters.value.filter((x) => word.value.includes(x));
  });
  const wrongLetters = computed(() => {
    return letters.value.filter((x) => !word.value.includes(x));
  });
  const isStatusLose = computed(() => wrongLetters.value.length === 6);
  const isStatusWin = computed(() =>
    [...word.value].every((x) => correctLetters.value.includes(x))
  );
  const addLetter = (key: string) => {
    if (/[а-яА-ЯёЁ]/.test(key)) {
      letters.value.push(key.toLocaleLowerCase());
    }
  };
  const resetLetters = () => {
    letters.value = [];
  };
  return {
    letters,
    wrongLetters,
    correctLetters,
    isStatusLose,
    isStatusWin,
    addLetter,
    resetLetters,
  };
};
