<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <!-- 
  <Transition
   STARTING POINT of an "entering" (initial) animation
   enter-from-class="opacity-0 scale-125"

   For the ENTIRE LENGTH of an "entering" animation
   enter-active-class="transition duration-300"
   
   ENDING POINT of an "entering" (initial) animation
   enter-to-class="opacity-100 scale-100"

   STARTING POINT of a "leaving" (exiting/ending) animation
   leave-from-class="opacity-100 scale-100"

   For the ENTIRE LENGTH of an "leaving" (exiting/ending) animation
   leave-active-class="transition duration-200"

   ENDING POINT of a "leaving" (exiting/ending) animation
   leave-to-class="opacity-0 scale-125"
  > 

  Alternate approach (uses Tailwind):

    <Transition name="{transitionName}">
  
  Then, in stylesheet:

    .{transitionName}-enter-from { @apply opacity-0 scale-125; }
    .{transitionName}-enter-active { @apply transition duration-300; }
    .{transitionName}-enter-to { @apply opacity-100 scale-100; }
    .{transitionName}-leave-from { @apply opacity-100 scale-100; }
    .{transitionName}-leave-active { @apply transition duration-200; }
    .{transitionName}-leave-to { @apply opacity-0 scale-125; }

  -->

  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-active-class="transition duration-300"
    enter-to-class="opacity-100 scale-100"
    leave-from-class="opacity-100 scale-100"
    leave-active-class="transition duration-200"
    leave-to-class="opacity-0 scale-125"
  >
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
  </Transition>
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
