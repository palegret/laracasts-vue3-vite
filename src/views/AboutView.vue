<script setup>
import { useFlash } from "@/composables/useFlash";

const { flash } = useFlash();
</script>

<template>
  <div>
    <button @click="flash('About Us', 'It also works on the About view!')">
      Click Me
    </button>
  </div>
</template>
