<script setup>
import { useFlash } from "@/composables/useFlash";

const { flash } = useFlash();
</script>

<template>
  <main>
    <button @click="flash('It works!')">Click Me</button>
  </main>
</template>
