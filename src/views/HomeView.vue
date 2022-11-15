<script setup>
import { ref } from "vue";

import { state } from "@/stores/QuizStore";
import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";

import TabbableTextarea from "@/components/TabbableTextarea.vue";

const { flash } = useFlash();
const food = useStorage("food", "salad");
const obj = useStorage("obj", { name: "Phil" });

setTimeout(() => {
  obj.value.name = "Bob";
}, 3000);

// To work with a DOM node, set a ref attribute on the element with a name, and
// declare a ref() with the same name and an initial value of null. Here,
// however, we ultimately opted to pass in the event and use event.target.
// E.g., const textarea = ref(null); and <textarea ref="textarea"...

const comment = ref("Comment test");

setTimeout(() => {
  comment.value += ", and re-tested.";
}, 4000);
</script>

<template>
  <main>
    <div>
      <button @click="flash('Yay!', 'It works!', 'success')">Click Me</button>
    </div>
    <div>
      <input type="text" v-model="food" />
    </div>
    <div>
      <form>
        <TabbableTextarea
          v-model="comment"
          style="width: 100%; height: 300px"
        />
      </form>
    </div>
    <div>
      <h5>Quiz name: {{ state.name }}</h5>
    </div>
  </main>
</template>
