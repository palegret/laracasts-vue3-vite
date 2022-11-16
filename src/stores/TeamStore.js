import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),
  actions: {
    async fill() {
      const response = await import("@/data/team.json");
      this.$state = response.default;
    },

    // Left here for demonstration purposes
    promisefill() {
      import("@/data/team.json").then((r) => {
        const data = r.default;

        // Three approaches:

        // One
        /*
        this.name = data.name;
        this.spots = data.spots;
        this.members = data.members;
        */

        // Two
        /*
        this.$patch({
          name: data.name,
          spots: data.spots,
          members: data.members,
        });
        */

        // Three
        this.$state = data;
      });
    },

    grow(spots) {
      this.spots = spots;
    },
  },
  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});
