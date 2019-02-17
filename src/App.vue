<template>
  <div id="app">
    <el-container>
      <el-header>HIROSHIMA Shuhei's Portfolio Site
        <el-menu default-active="1" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
            <i class="el-icon-star-off"></i>
            <router-link to="/">
              <span>Home</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-view"></i>
            <router-link to="/sendHRSM">
              <span>HRSM faucet</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }


</style>
