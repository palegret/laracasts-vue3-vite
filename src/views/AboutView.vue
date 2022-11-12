<script>
import flash from "@/mixins/flash";

export default {
  mixins: [flash],
};
</script>

<template>
  <div>
    <button @click="flash('It also works on the About view!')">Click Me</button>
  </div>
</template>
