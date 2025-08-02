<script lang="ts" setup>
import Close from '~icons/material-symbols/close-rounded'
import Maximize from '~icons/material-symbols/chrome-maximize-outline'
import Minimize from '~icons/qlementine-icons/windows-minimize-16'

import {getCurrentWindow} from '@tauri-apps/api/window'
const appWindow = getCurrentWindow()
</script>

<template>
  <div>
    <i @click="appWindow.minimize()">
      <Minimize/>
    </i>
    <i @click="appWindow.toggleMaximize()">
      <Maximize/>
    </i>
    <i @click="appWindow.hide()">
      <Close/>
    </i>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 5px;
}


i {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7px;

  height: 30px;
  width: 30px;

  transition: all 200ms ease-out;

  &:hover {
    background-color: rgba(255,255,255,0.1);
  }

  svg {
    height: 22px;
    width: 22px;
  }
}
</style>