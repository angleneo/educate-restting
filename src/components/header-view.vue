<template>
  <div class="headerView">
    <div class="system">
      师生信息管理系统
    </div>
    <div class="username">
      欢迎您,{{username}}
      <el-button type="warning" @click="logout" style="margin-left:20px;">退出</el-button>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class HeaderViewWorld extends Vue {
  username: string = '李阳';

  mounted() {
    this.username = this.$cookie.get('username');
  }

  logout() {
    if (!this.$cookie.get('username')) {
      this.$router.push({ path: '/' });
    } else {
      this.$cookie.delete('username');
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.headerView {
  width: 100%;
  background: lightblue;
  .system {
    display: inline-block;
    width: 500px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    color: whitesmoke;
  }
  .username {
    width: 300px;
    height: 80px;
    line-height: 80px;
    float: right;
    color: yellow;
  }
}
</style>
