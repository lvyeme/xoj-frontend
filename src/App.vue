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
import BasicLayout from "@/layouts/BasicLayout";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const stroe = useStore();
const router = useRouter();
router.beforeEach((to, from, next) => {
  // 仅管理员可见，判断当前用户是否有权限
  if (to.meta?.access === "canAdmin") {
    if (stroe.state.user.loginUser?.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
