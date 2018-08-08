<template>
  <div class="home">
    <headerView class="header" />
    <div class="main-content">
      <leftMenu class="left-menu" />
      <div class="main-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import headerView from '@/components/header-view.vue'; // @ is an alias to /src
import leftMenu from '@/components/left-menu.vue';

@Component({
  components: {
    headerView,
    leftMenu
  }
})

export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 80px;
}
.main-content {
  position: relative;
  .left-menu {
    width: 15%;
    min-width: 220px;
    height: 100%;
    position: fixed;
    top: 80px;
    left: 0;
  }
  .main-body {
    margin-left: 20px;
    width: 78%;
    height: 100%;
    position: fixed;
    top: 80px;
    left: 280px;
  }
}
</style>
