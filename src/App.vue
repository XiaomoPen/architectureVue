<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  ul li{
    list-style: none;
  }
  #app{
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
