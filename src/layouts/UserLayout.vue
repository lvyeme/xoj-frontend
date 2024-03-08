<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo_transparent.png" class="logo" />
          <div>X OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/lvyeme" target="_blank"> X-oj </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
  text-align: center;
}

#userLayout .logo {
  height: 64px;
  width: 64px;
}

#userLayout .header {
  margin-top: 16px;
  /*
  box-shadow: #eee 1px 1px 5px;
  */
}

#userLayout .content {
  /*
  background: linear-gradient(to right, #b5f8fa, #fff);
  */
  background: url("file:///F:/wallpaper/tumblr_ncnbpirLwf1rbnx7io2_500.webp") 0%
    0%/100% 100%;
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script></script>
