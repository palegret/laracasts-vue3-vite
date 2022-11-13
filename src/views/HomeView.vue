<script setup>
import { useFlash } from "@/composables/useFlash";

const { flash } = useFlash();
</script>

<template>
  <main>
    <button @click="flash('Yay!', 'It works!', 'success')">Click Me</button>
  </main>
</template>
