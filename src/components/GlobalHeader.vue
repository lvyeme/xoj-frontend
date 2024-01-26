<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/logo_transparent.png" />
            <div class="title">X oj</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";

const store = useStore();
const loginUser = store.state.user.loginUser;
/*setTimeout(() => {
  store.dispatch("user/getLoginUser"),
    {
      userName: "xun",
      role: "admin",
    };
}, 3000);*/
const router = useRouter();
const selectedKeys = ref(["/"]);

//展示在菜单的路由数组
const visibleRouts = routes.filter((item, index) => {
  if (item.meta?.hideInMenu) {
    return false;
  }
  if (checkAccess(loginUser)) return true;
});

//路由跳转时，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

/*export default defineComponent({
  computed: {
    routes() {
      return routes;
    },
  },
});*/
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
