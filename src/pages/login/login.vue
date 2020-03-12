<template>
  <el-form :model="form" ref="loginForm">
    <el-form-item>
      <el-input
        v-model="form.username"
      >
        <template slot="prepend">
          <i class="el-icon-user"></i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input
        v-model="form.password"
        show-password
        @keyup.enter.native="onSubmit('loginForm')"
      >
        <template slot="prepend">
          <i class="el-icon-lock"></i>
        </template>
      </el-input>
    </el-form-item>
    <el-button
      type="primary"
      @click="onSubmit('loginForm')"
      @keyup.enter.native="onSubmit('loginForm')"
    >登录</el-button>
  </el-form>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate(valid => {
          if (!valid) {
            this.$message.error('error form field')
            return false
          }

          this.$store.dispatch('updateUser', this.form)
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
