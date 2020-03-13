<template>
  <div>
    <div>home</div>
    <ul>
      <li v-for="item in todos" :key="item.id">
        <i>id: {{item.id}}</i>
        <span style="margin-left: 15px;">done: {{item.done}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        todos: []
      }
    },
    mounted() {
      this.todos = this.$store.getters.doneTodos
    }
  }
</script>

<style scoped lang="scss">

</style>
