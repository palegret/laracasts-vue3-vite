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
  <div>
    <button @click="flash('It also works on the About view!')">Click Me</button>
  </div>
</template>
