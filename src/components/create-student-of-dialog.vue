<template>
  <div class="create-student-of-dialog">
    <el-dialog title="提示" :visible="dialogVisible" width="30%" @close="onCancle">
      {{username}}
      <el-form ref="formData" :model="formData" label-width="80px">
        <el-form-item label="学生姓名">
          <el-input v-model="formData.studentName" placeholder="请输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item label="学生年龄">
          <el-input v-model="formData.studentAge" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="学生性别">
          <el-radio v-model="formData.studentSex" label="0">男</el-radio>
          <el-radio v-model="formData.studentSex" label="1">女</el-radio>
        </el-form-item>
        <el-form-item label="语文成绩">
          <el-input v-model="formData.studentChinese" placeholder="请输入语文成绩"></el-input>
        </el-form-item>
        <el-form-item label="数学成绩">
          <el-input v-model="formData.studentMath" placeholder="请输入数学成绩"></el-input>
        </el-form-item>
        <el-form-item label="英语成绩">
          <el-input v-model="formData.studentEnglish" placeholder="请输入英语成绩"></el-input>
        </el-form-item>
        <el-button size="large" type="danger" @click="onCancle">取消</el-button>
        <el-button size="large" type="danger" @click="newCreateStudente">确认添加</el-button>
      </el-form>

            {{users}}
    </el-dialog>

  </div>
</template>
<script lang="ts">
import { Component, Prop, Inject, Emit, Vue } from 'vue-property-decorator';
import { createStudent } from '@/api/student';

export interface form {
  studentName: string;
  studentAge: number;
  studentSex: string;
  studentChinese: number;
  studentMath: number;
  studentEnglish: number;
}

@Component({
  // mixins: [mixin]
})
export default class CreateStudenteOfDialog extends Vue {
  @Prop({ default: 'default value' })
  username: string = ''
  // propA: number = 1

  // @Prop({ default: 'default value' })
  // propB: string

  // @Prop([String, Boolean])
  // propC: string | boolean

  // @Prop({ type: null })
  // propD: any



  @Inject('users') users: any;

  dialogVisible: boolean = true;
  formData: form = {
    studentName: '',
    studentAge: 0,
    studentSex: '',
    studentChinese: 0,
    studentMath: 0,
    studentEnglish: 0
  };

  @Emit('on-closed')
  onCancle() {}

  newCreateStudente() {
    let params: any = {
      name: this.formData.studentName,
      age: this.formData.studentAge,
      sex: this.formData.studentSex,
      chinese: this.formData.studentChinese,
      math: this.formData.studentMath,
      english: this.formData.studentEnglish
    };
    createStudent(params).then((res: any) => {
      if (res.data.code !== 0) {
        this.$message.warning('添加成功！');
        return;
      }
      this.$message.success(res.data.message);
      this.$emit('get-studentList', this.formData);
      this.$emit('on-closed');
    });
  }
}
</script>