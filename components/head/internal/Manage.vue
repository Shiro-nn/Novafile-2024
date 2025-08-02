<script lang="ts" setup>
import Home from '~icons/material-symbols/house-rounded'
import Vault from '~icons/ic/outline-sd-storage'
import Settings from '~icons/material-symbols/settings'

import { useRouter } from 'nuxt/app'

const router = useRouter()
</script>

<template>
  <div class="block">

    <div class="container" @click="router.push('/')">
      <Home/>
    </div>

    <div class="container" @click="router.push('/vault')">
      <Vault/>
      <span>Vault</span>
    </div>

    <div class="container" @click="router.push('/settings')">
      <Settings/>
      <span>Settings</span>
    </div>

  </div>
</template>

<style scoped src="assets/styles/block.css"/>
<style scoped>
.block {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 5px;
  height: 100%;

}
</style>