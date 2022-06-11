<template>
  <transition name="el-fade-in-linear">
    <div>
      <div class="clickInGame" @click="clickInGame">点击进入游戏</div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    clickInGame () {
      this.$router.push('./home')
    }
  }
}
</script>

<style lang="scss" scoped>

.clickInGame {
  color: #ffffff;
  font-size: 40px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: glow 1200ms ease-out infinite alternate;
  cursor: pointer;
}

@keyframes glow {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
