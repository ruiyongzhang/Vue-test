<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitFrom('form')">登录</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return{
        form: {
          name: '',
          password: ''
        },
        rules:{
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码'
          }]
        }
      }
    },
    methods:{
      submitFrom(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem('isLogin','true');
            this.$store.dispatch("asyncUpdateUser",{name: this.form.name});
            this.$router.push({name: 'Main', params:{name: this.form.name}});
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'warning'
            });
            return false;
          }
        });
      }
    }
  };
  
  
</script>

<style lang="scss" scoped>
  .login-box{
    width:350px;
    margin:150px auto;
    border: 1px solid black;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px #DCDFE6;
  }
  .login-title{
    text-align: center;
  }
</style>