<script lang="ts" setup>
import Close from '~icons/material-symbols/close-small'
import Maximize from '~icons/gg/minimize'
import Minimize from '~icons/qlementine-icons/windows-minimize-16'

import {getCurrentWindow} from '@tauri-apps/api/window'
const appWindow = getCurrentWindow()
</script>

<template>
  <div>
    <i @click="appWindow.toggleMaximize()">
      <Maximize/>
    </i>
    <i @click="appWindow.minimize()">
      <Minimize/>
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
  margin-left: 10px;
}

i {
  display: flex;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  color: #0f1520;

  & {
    height: 17px;
    width: 17px;
  }

  svg {
    margin: auto;
    height: 15px;
    width: 15px;
  }

  &:nth-child(1) {
    background: lime;
  }

  &:nth-child(2) {
    background: yellow;
  }

  &:nth-child(3) {
    background: red;
  }

  &:hover {
    border-radius: 35%;
  }
}
</style>