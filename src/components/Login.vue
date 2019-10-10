<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="username" label="用户名" :rules="[{ required: true}]">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" :rules="[{required: true}]">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    let checkUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        pass: ''
      },
      rules: {
        username: [
          {validator: checkUserName, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            username: this.ruleForm.username,
            password: this.ruleForm.pass
          }
          this.$axios.post('/login', this.$qs.stringify(params)).then(function (response) {
            if (response.data.success == false) {
              this.$toast.warn({
                title: "WARN",
                message: response.data.message
              });
            } else {
              this.$toast.success({
                title: "SUCCESS",
                message: "登陆成功"
              });
              this.$router.push("/home");
            }
          }.bind(this)).catch(error => {
            this.$toast.warn({
              title: "WARN",
              message: error
            });
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>