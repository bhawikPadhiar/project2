<template>
  <div id="app">
    <!-- <home-page v-bind:task="task"></home-page> -->
    <router-view></router-view>
    <!-- <add-task v-bind:task="task"></add-task> -->
  </div>
</template>

<script>
// import Homepage from './components/Homepage.vue'
// import Addtask from './components/Addtask.vue';

export default {
  name: 'App',
  components: {
    // 'home-page':Homepage,
    // 'add-task':Addtask

  },
  data() {
    return {
      task: []
    }
  },

  methods: {

  },
}
</script>

<style>

</style>
