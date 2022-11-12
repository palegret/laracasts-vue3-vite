<script>
import { useFlash } from "@/composables/useFlash";

export default {
  setup() {
    const { flash } = useFlash();

    return {
      flash,
    };
  },
};
</script>

<template>
  <main>
    <button @click="flash('It works!')">Click Me</button>
  </main>
</template>
