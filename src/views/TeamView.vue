<script setup>
import { useTeamStore } from "@/stores/TeamStore";

import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";

const team = useTeamStore();

team.fill();

// Example of calling a store action.
setTimeout(() => {
  team.grow(25);
}, 2000);
</script>

<template>
  <div class="m-8">
    <TeamHeader />

    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
      <TeamMembers />
    </div>

    <TeamFooter />
  </div>
</template>
