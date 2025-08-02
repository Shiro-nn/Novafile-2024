<script setup lang="ts">
import Vault from '~icons/ic/outline-sd-storage'
import Settings from '~icons/material-symbols/settings'

import CloseSmall from '~icons/material-symbols/close-small'
import QlementineIconsWindowsMinimize16 from '~icons/qlementine-icons/windows-minimize-16'
import FluentArrowMinimize16Filled from '~icons/fluent/arrow-minimize-16-filled'

import {onMounted, useTemplateRef} from 'vue'
import { useRouter } from 'nuxt/app'
import {getCurrentWindow} from '@tauri-apps/api/window'

const appWindow = getCurrentWindow()
const router = useRouter()

const rootRef = useTemplateRef('root')
const dateRef = useTemplateRef('time:date')
const hoursRef = useTemplateRef('time:hours')

async function get_average_rgb(src: string): Promise<Uint8ClampedArray> {
  /* https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript */
  return new Promise(resolve => {
    let context = document.createElement('canvas').getContext('2d');
    context!.imageSmoothingEnabled = true;

    let img = new Image;
    img.src = src;
    img.crossOrigin = "";

    img.onload = () => {
      context!.drawImage(img, 0, 0, 1, 1);
      resolve(context!.getImageData(0, 0, 1, 1).data.slice(0,3));
    };
  });
}

async function updateBanner(path: string) {
  if (!rootRef.value) return;

  const averageRgb = await get_average_rgb(path);
  const averageCombine = averageRgb[0] + averageRgb[1] + averageRgb[2];

  // (255+255+255)/2 == white theme
  if (averageCombine > 382) {
    rootRef.value.classList.add('white-theme');
  } else {
    rootRef.value.classList.remove('white-theme');
  }

  rootRef.value.style.setProperty('--banner', `url(${path})`);
}

function updateTime() {
  if (!hoursRef.value) return;
  if (!dateRef.value) return;

  const now = new Date();
  hoursRef.value.innerHTML = now.toLocaleTimeString();
  dateRef.value.innerHTML = now.toLocaleDateString(navigator.language, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}

onMounted(async() => {
  await updateBanner('/bin/default_banner.jpg');
  setInterval(updateTime, 1000);
  updateTime();
})

</script>

<template>
  <div class="root white-theme" ref="root" data-tauri-drag-region>

    <span class="logo">Nova File</span>

    <div class="header">
      <i @click="appWindow.minimize()">
        <QlementineIconsWindowsMinimize16/>
      </i>
      <i @click="appWindow.hide()">
        <CloseSmall/>
      </i>
    </div>

    <div class="time">
      <span ref="time:date"/>
      <span ref="time:hours"/>
    </div>

    <div class="panels">
      <Vault @click="router.push('/vault')"/>
      <Settings @click="router.push('/settings')"/>
    </div>

  </div>
</template>

<style>
body {
  margin: 0;
}
</style>
<style scoped>
.root:root {
  --banner: url("/bin/default_banner.jpg");
}

.root {
  height: 100vh;
  width: 100vw;
  background-image: var(--banner);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  color: aliceblue;
  font-size: 33px;
  font-family: Nunito, sans-serif;
  user-select: none;

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    font-family: 'Neonderthaw', 'Nunito', sans-serif;
    pointer-events: none;
  }

  .header {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;

    i {
      border-radius: 7px;

      &:hover {
        background-color: rgba(255,255,255,0.1);
      }

      svg, & {
        height: 35px;
        width: 35px;
      }
    }
  }

  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: max(33px, 6vh);
    pointer-events: none;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    span:first-child {
      color: #9f9f9f;
      font-size: max(20px, 3vh);
    }
  }

  .panels {
    display: flex;
    margin-top: 30px;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 20%;

    svg {
      margin: 5px;
      padding: 5px;

      width: max(25px, 4vh);
      height: max(25px, 4vh);

      border-radius: 50%;
      background-color: rgba(128, 128, 128, 0.1);

      cursor: pointer;
      transition: all 200ms ease-out;

      &:hover {
        background-color: rgba(128, 128, 128, 0.5);
      }
    }
  }


  &.white-theme {
    color: #212223;

    .time span:first-child {
      color: #4a4a4a;
    }
  }
}
</style>
