<template>
  <div id="app">
    <BasicLayout />
  </div>

  <!--
  注释bug，↓双重页面
    <router-view />
  -->
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
</script>
