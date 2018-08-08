<template>
  <div class="left-menu">
    <ul>
      <li>
        <router-link to="/home">学生信息管理</router-link>
      </li>
      <li>
        <router-link to="/teacher">教师信息管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LeftMenu extends Vue {}
</script>

<style scoped lang="less">
.left-menu {
  background: lightgreen;
  ul li {
    width: 100%;
    height: 25px;
    color: white;
    list-style-type: none;
  }
}
</style>
