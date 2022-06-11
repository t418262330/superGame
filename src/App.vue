<template>
  <div id="app">
    <video id="v1" autoplay loop muted v-if="false">
        <source src="@/assets/vedio/login-bg.mp4" type="video/mp4" />
      </video>
      <div v-else class="bg"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

*{
  margin: 0;
  padding: 0;
  font-family: Microsoft YaHei;
}

.bg {
  background-image: url("../src/assets/images/main-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: fixed;
  left: -1px;
  top: -1px;
  height: 101vh;
  width: 101vw;
  z-index: -11; //111
}

video {
  position: fixed;
  left: -1px;
  top: -1px;
  // min-width: 100vw;
  // min-height: 100vh;
  height: 101vh;
  width: 101vw;
  // filter: blur(1px); //背景模糊设置
  z-index: -11;
  source {
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }
}
</style>
