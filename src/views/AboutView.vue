<script setup>
import { useFlash } from "@/composables/useFlash";
import { useCounterStore } from "@/stores/CounterStore";

const counter = useCounterStore();
const { flash } = useFlash();
</script>

<template>
  <div>
    <h1>About view. The current count is {{ counter.count }}.</h1>
    <button @click="flash('About Us', 'It also works on the About view!')">
      Click Me
    </button>
  </div>
</template>
