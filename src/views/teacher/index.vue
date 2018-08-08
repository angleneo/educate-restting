<template>
  <div class="student">
    <el-table :data="teacherList" :header-cell-style="{textAlign:'center'}" style="width: 100%;">
      <el-table-column prop="id" label="教师编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="teaching" label="任课">
      </el-table-column>
      <el-table-column prop="headMaster" label="职称">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.headMaster === 0" type="success">班主任</el-tag>
          <el-tag v-if="scope.row.headMaster === 1">任课老师</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
    <el-input-number v-model="num2" :min="1" :max="10" label="描述文字"></el-input-number>

    {{num3}}
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { teachersList } from '@/api/teacher';

@Component
export default class Teacher extends Vue {
  teacherList: object[] = [];
  num1: number = 0;
  num2: number = 0;

  @Watch('num3')
  onNum3change(val: string, oldVal: string) {
    if (this.num3 === 5) {
      console.log('hahahahaha')
    }
  }

  get num3 () {
    return this.num1 + this.num2
  }

  mounted() {
    this.getList();
  }

  getList() {
    let params: any = {};
    teachersList(params).then((res: any) => {
      this.teacherList = res.data;
    });
  }
}
</script>
