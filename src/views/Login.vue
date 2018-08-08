<template>
  <div class="login">
    <div style="margin: 20px;"></div>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" style="width:200px;" @click="loginSystem">登陆</el-button>
      <div style="margin: 20px;"></div>
      <el-button type="success" style="width:200px;" @click="regist">注册</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { login, register } from '@/api/user';

@Component({})
export default class Login extends Vue {
  username: string = '';
  password: string = '';

  loginSystem() {
    let params: any = {
      username: this.username,
      password: this.password
    };
    login(params).then((res: any) => {
      if (res.data.code !== 0) {
        this.$message.warning(res.data.message);
        return;
      }
      this.$message.success(res.data.message);
      this.$cookie.set('username', this.username);
      this.$router.push({ path: '/home' });
    });
  }

  regist(): void {
    let params: any = {
      username: this.username,
      password: this.password
    };
    register(params).then((res: any) => {
      if (res.data.code !== 0) {
        this.$message.warning(res.data.message);
        return;
      }
      this.$message.success(res.data.message);
      this.$cookie.set('username', this.username);
      this.$router.push({ path: '/home' });
    });
  }
}
</script>
