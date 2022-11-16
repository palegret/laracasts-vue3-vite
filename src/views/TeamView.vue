<script setup>
import { ref } from "vue";

import { useTeamStore } from "@/stores/TeamStore";

import AppModal from "../components/AppModal.vue";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";

const team = useTeamStore();

team.fill();

// Example of calling a store action.
setTimeout(() => {
  team.grow(25);
}, 2000);

const showModal = ref(false);
</script>

<template>
  <div class="m-8">
    <TeamHeader @team-member-add="showModal = true" />

    <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
      <TeamMembers />
    </div>

    <TeamFooter />

    <AppModal :show="showModal" @app-modal-close="showModal = false">
      <template #default>
        <p>Need to add a new member to your team?</p>

        <form class="mt-6">
          <div class="flex gap-2">
            <input type="email" placeholder="Email Address..." class="flex-1" />
            <button>Add</button>
          </div>
        </form>
      </template>
    </AppModal>
  </div>
</template>
