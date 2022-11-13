<script setup>
defineProps({
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

function onTabPress(e) {
  const el = e.target;
  const { value, selectionStart, selectionEnd } = el;
  const textBeforeTab = value.substring(0, selectionStart);
  const textAfterTab = value.substring(selectionEnd);

  el.value = textBeforeTab + "\t" + textAfterTab;
  el.selectionStart = el.selectionEnd = selectionStart + 1;
}
</script>

<template>
  <textarea
    v-text="modelValue"
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value)"
  />
</template>
