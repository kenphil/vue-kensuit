<template>
  <div>
    <div>header</div>
    <div>
      <router-link to="/home">
        <el-button>home</el-button>
      </router-link>
      <router-link to="/about">
        <el-button>about</el-button>
      </router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layout"
  }
</script>

<style scoped lang="scss">

</style>
