<template>
  <div class="student">
    
    <el-button size="large" type="danger" @click="addModelDialogOnVisible = true">添加</el-button>
    <create-student-of-dialog :username="username" v-if="addModelDialogOnVisible" @get-studentList="getStudentList" @on-closed="addModelDialogOnVisible = false" />

    <el-table :data="studentList" :header-cell-style="{textAlign:'center'}" style="width: 100%" >
      <el-table-column prop="id" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="chinese" label="语文">
      </el-table-column>
      <el-table-column prop="math" label="数学">
      </el-table-column>
      <el-table-column prop="english" label="英语">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Emit, Vue } from 'vue-property-decorator';
import { studentsList, deleteStudent } from '@/api/student';
import createStudentOfDialog from '@/components/create-student-of-dialog.vue';

@Component({
  components: {
    createStudentOfDialog
  }
})
export default class Student extends Vue {
  username: string = '';
  addModelDialogOnVisible: boolean = false;
  studentList: object[] = [
    {
      id: 123123,
      name: '李阳',
      age: 18,
      sex: '男',
      chinese: 99,
      math: 30,
      english: 55,
      sports: 20
    },
    {
      id: 123123,
      name: '李阳',
      age: 18,
      sex: '男',
      chinese: 99,
      math: 30,
      english: 55,
      sports: 30
    },
    {
      id: 123123,
      name: '李阳',
      age: 18,
      sex: '男',
      chinese: 99,
      math: 30,
      english: 55,
      sports: 55
    }
  ];

  @Provide('users')
  users = [
    {
      name: 'test',
      id: 0
    }
  ];

  mounted(): void {
    this.getList();
    this.username = this.$cookie.get('username');
  }

  private getList() {
    let params: any = {};
    studentsList(params).then((res: any) => {
      this.studentList = res.data;
    });
  }

  private handleDelete(index: number, row: any) {
    let params: number = row.id;
    deleteStudent(params).then((res: any) => {
      if (res.data.code !== 0) {
        this.$message.warning('删除失败！');
        return;
      }
      this.$message.success(res.data.message);
      this.getList();
    });
  }

  private getStudentList(res: any) {
    console.log(res);
    this.getList();
  }
}
</script>
