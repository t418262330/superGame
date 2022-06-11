<template>
  <div class="container">
    <div class="container-leftAndRight">
    <div class="container-left">
      <el-progress :percentage="personDataPercent.shengming" color="#FF4949"></el-progress>
      <el-progress :percentage="personDataPercent.neili" color="#20A0FF"></el-progress>
    </div>
    <div class="container-middle">
      <my-tag style="margin-right:5px;">生命：{{personDataCurrent.shengming}}/{{personData.shengming}}</my-tag>
      <my-tag>内力：{{personDataCurrent.neili}}/{{personData.neili}}</my-tag>
    </div>
    </div>
    <div class="container-right">
      <my-tag style="margin-right:5px;">等级：{{personData.dengji}}</my-tag>
      <my-tag style="margin-right:5px;">战力：{{personData.zhandouli}}</my-tag>
      <my-tag style="margin-right:5px;">元宝：{{personData.yuanbao}}</my-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personData: {
      type: Object,
      default: () => {
        return {
          shengming: 500,
          neili: 500,
          zhandouli: 500,
          yuanbao: 500,
          dengji: 1
        }
      }
    },
    damage: {
      type: Number,
      default: () => {
        return 60
      }
    }
  },
  data () {
    return {
      personDataCurrent: {
        shengming: 100,
        neili: 100
      },
      fightTimer: null
    }
  },
  computed: {
    personDataPercent: function () {
      // `this` 指向 vm 实例
      const personDataPercent = {
        shengming: this.personDataCurrent.shengming / this.personData.shengming * 100,
        neili: this.personDataCurrent.neili / this.personData.neili * 100
      }
      return personDataPercent
    }
  },
  methods: {
    fight () {
      if (this.damage) {
        this.fightTimer = setInterval(() => {
          this.personDataCurrent.shengming = this.personDataCurrent.shengming - this.damage
          if (this.personDataCurrent.shengming <= 0) {
            this.personDataCurrent.shengming = 0
            clearInterval(this.fightTimer)
          }
        }, 1000)
      }
    }
  },
  mounted () {
    this.personDataCurrent = { ...this.personData }
    this.fight()
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  .container-leftAndRight {
    display: flex;
  }
  .container-left {
    width: 20vw;
    .el-progress {
      height: 8px;
      line-height: 0.2 !important;
    }
    ::v-deep .el-progress__text {
      display: none !important;
    }
  }
  .container-middle, .container-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
