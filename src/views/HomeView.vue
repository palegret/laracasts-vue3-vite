<script setup>
import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";

const { flash } = useFlash();
const food = useStorage("food", "salad");
const obj = useStorage("obj", { name: "Phil" });

setTimeout(() => {
  obj.value.name = "Bob";
}, 3000);
</script>

<template>
  <main>
    <div>
      <button @click="flash('Yay!', 'It works!', 'success')">Click Me</button>
    </div>
    <div>
      <input type="text" v-model="food" />
    </div>
  </main>
</template>
