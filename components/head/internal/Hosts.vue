<script lang="ts" setup>
import MaterialSymbolsAdd from '~icons/material-symbols/add'

import {onMounted, useTemplateRef} from 'vue'

const scrollerRef = useTemplateRef('scroller')
const rootRef = useTemplateRef('root')

const wheel = (ev: WheelEvent) => {
  if (!scrollerRef.value) return;
  scrollerRef.value.scrollLeft += ev.deltaY / 2;
  updateScroll();
}

const updateScroll = () => {
  if (!rootRef.value) return;
  if (!scrollerRef.value) return;

  const scrollWidth = scrollerRef.value.scrollWidth;
  const clientWidth = scrollerRef.value.clientWidth;
  const scrollLeft = scrollerRef.value.scrollLeft;

  if (scrollWidth > clientWidth) {
    rootRef.value.classList.add('scrollable');

    if (scrollLeft == 0) {
      rootRef.value.classList.add('left');
      rootRef.value.classList.remove('right');
    } else if (scrollLeft + clientWidth == scrollWidth) {
      rootRef.value.classList.add('right');
      rootRef.value.classList.remove('left');
    } else {
      rootRef.value.classList.remove('right');
      rootRef.value.classList.remove('left');
    }

  } else {
    rootRef.value.classList.remove('scrollable');
  }
}

onMounted(updateScroll);
</script>

<template>
  <div ref="root" class="root-container">
    <div ref="scroller" class="block" @wheel="wheel" data-tauri-drag-region>
      <div id="home" class="container">
        ZXC
      </div>


      <div id="home" class="container">ZXC</div>
      <div id="home" class="container">ZXC</div>
      <div id="home" class="container">ZXC</div>

      <div id="new">
        <MaterialSymbolsAdd/>
      </div>
    </div>
  </div>
</template>

<style scoped src="assets/styles/block.css"/>
<style scoped>
.root-container {
  width: 100%;
  overflow: hidden;

  border-radius: 6px;
  position: relative;

  &.scrollable {
    &:before {
      content: ' ';
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 300px;
      margin-top: -150px;
      box-shadow: inset #161e2e 0 0 20px 20px;
      pointer-events: none;
    }

    &.left:before {
      box-shadow: inset #161e2e -20px 0 20px 20px;
    }

    &.right:before {
      box-shadow: inset #161e2e 20px 0 20px 20px;
    }
  }
}

.block {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 4px 0;
  border-left: solid 1px #7d79a1;

  overflow-x: auto;
  width: 100%;

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }

  #new {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all 100ms linear;

    &:hover {
      color: gray;
    }
  }
}
</style>