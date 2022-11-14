<template>
  <div>
    <h1 class="counter">{{ count }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
