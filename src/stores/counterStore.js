import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // Options API: data()
  state() {
    return {
      count: 0,
    };
  },
  // Options API: methods {}
  actions: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    },
  },
  // Options API: computed {}
  getters: {
    remaining() {
      return 10 - this.count;
    },
  },
});
