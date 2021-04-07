<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {

    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  #app {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
  .headerImg {
    width: 88px;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #fcb243;
    font-size: 32px;
    border-radius: 50%;
    margin-top: 20px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .containerInfor>li {
    width: 100%;
    text-align: center;
    margin: 6px 0;
    color: white;
    font-size: 14px;
  }
</style>
