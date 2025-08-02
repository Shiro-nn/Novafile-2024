<script lang="ts" setup>
// import Interacts from "~/components/head/internal/interacts/macOS.vue"
import Interacts from "~/components/head/internal/interacts/basic.vue"
import Manage from "~/components/head/internal/Manage.vue"
import Hosts from "~/components/head/internal/Hosts.vue"
</script>

<template>
  <div class="head" data-tauri-drag-region>
    <Manage data-tauri-drag-region />
    <div class="zxc-container" data-tauri-drag-region>
      <Hosts data-tauri-drag-region />
      <Interacts data-tauri-drag-region />
    </div>
  </div>
</template>

<style scoped>
.head {
  user-select: none;
  height: 40px;
  background-color: rgba(11, 17, 23, 0.41);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  backdrop-filter: blur(12px);

  .zxc-container {
    display: flex;
    width: 100%;
    overflow-x: auto !important;
  }
}
</style>
