<script setup lang="ts">
import "assets/scripts/InactiveChecker.ts"
import HeadPanel from "~/components/head/MainPanel.vue"

const route = useRoute()
</script>

<template>
  <HeadPanel />
  <Panel />
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>

<style src="assets/styles/body.css"/>