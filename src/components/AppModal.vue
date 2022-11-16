<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <div>
        <slot>default body</slot>
      </div>

      <footer class="modal-footer">
        <slot name="footer">
          <button @click="$emit('app-modal-close')">Close</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style>
.modal-mask {
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  inset: 0;
  place-items: center;
  position: fixed;
}

.modal-container {
  background: white;
  border-radius: 7px;
  max-width: 500px;
  padding: 1rem;
  width: 80vw;
}

.modal-footer {
  border-top: 1px solid #ddd;
  font-size: 0.8rem;
  margin-top: 1rem;
  padding-top: 0.5rem;
}

.modal-footer button {
  background: #ddd;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
}

.modal-footer button:hover {
  background: #c8c8c8;
}
</style>
